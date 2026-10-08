from pathlib import Path
import re,json,hashlib,html,shutil,argparse,subprocess
from datetime import datetime
ROOT=Path(__file__).resolve().parents[1]
KEYS=list('АБВГ')
NAMES=['Алгебра','Англійська мова','Біологія','Всесвітня історія','Географія','Геометрія','Громадська освіта','Зарубіжна література','Здоров’я, безпека та добробут','Інформатика','Історія України','Мистецтво','Підприємництво і фінансова грамотність','Правознавство','Технологія','Українська література','Українська мова','Фізика']
IDS=dict(zip(NAMES,['algebra','english','biology','world-history','geography','geometry','civics','foreign-literature','health-safety','informatics','ukraine-history','art','finance','law','technology','ukrainian-literature','ukrainian-language','physics']))
def field(t,n):
 m=re.search(r'^\*\*'+re.escape(n)+r'\*\*[ \t]*(.*?)(?=^\*\*[^\n]+?\*\*|^#{1,3} |\Z)',t,re.M|re.S)
 return m[1].strip() if m else ''
def dump(x):return json.dumps(x,ensure_ascii=False,indent=2)
def write(p,t):
 p.parent.mkdir(parents=True,exist_ok=True);p.write_text(t,encoding='utf-8')
def build(source):
 overrides={}
 for line in (ROOT/'tools/paraphrased-explanations.txt').read_text(encoding='utf-8-sig').splitlines():
  if not line.strip():continue
  k,v=line.split('|',1);overrides[k if ':' in k else 'world-history-9-v21:'+k]=v
 def explanation_override(k):
  v=overrides[k]
  return explanation_override('world-history-9-v21:'+v[1:]) if v.startswith('@') else v
 review_path=ROOT/'tools/content-review/corrections.json'
 content_review=json.loads(review_path.read_text(encoding='utf-8')) if review_path.exists() else {}
 confirmed_path=ROOT/'tools/confirmed-content-errors.json'
 confirmed={x['id']:x for x in json.loads(confirmed_path.read_text(encoding='utf-8'))} if confirmed_path.exists() else {}
 packages={};assets={};copies={};report={'edition':'v21','subjects':[],'duplicates':[],'invalid':[],'explanationsFromSource':[]}
 for d in sorted(source.iterdir()):
  if not d.is_dir() or d.name not in IDS:continue
  sid=IDS[d.name]+'-9-v21';m=json.loads((d/'manifest_v21.json').read_text(encoding='utf-8-sig'))
  label=f"{m['book']} - {m['first_author']}, {m['year']}";variants=[];seen={};hashes=set();count=0
  imgs={p.name:p for p in d.rglob('*.png')};qa={}
  for sf in sorted(d.glob('*_ДЖЕРЕЛО_*.md')):
   st=sf.read_text(encoding='utf-8-sig').replace('\r','');sh=list(re.finditer(r'^#{2,3}\s+ДЖЕРЕЛО\s+(.+?)\s*$',st,re.M));copies[f'{sid}/{sf.name}']=sf
   for j,hh in enumerate(sh):qa[hh[1]]=st[hh.end():sh[j+1].start() if j+1<len(sh) else len(st)]
  for f in sorted(d.glob('*_ТЕСТИ_*.md')):
   t=f.read_text(encoding='utf-8-sig').replace('\r','');digest=hashlib.sha256(t.encode()).hexdigest()
   if digest in hashes:report['duplicates'].append(str(f.relative_to(source)));continue
   hashes.add(digest);copies[f'{sid}/{f.name}']=f
   heads=list(re.finditer(r'^#{2,3}\s+ТЕСТ\s+(.+?)\s*$',t,re.M));topics={}
   for i,h in enumerate(heads):
    b=t[h.end():heads[i+1].start() if i+1<len(heads) else len(t)];cid=h[1]
    q=field(b,'Запитання:');opts=[field(b,k+'.') for k in KEYS];answer=field(b,'Правильна відповідь:');exp=field(b,'Повне пояснення:');topic=field(b,'Параграф:') or f.stem.split('_ТЕСТИ_')[0]
    qa_id=cid if cid in qa else re.sub(r'[абвг]$', '', cid)
    if qa_id not in qa:
     qa_id=re.sub(r'\.(\d+)$',lambda m:'.'+m[1].zfill(2),qa_id)
    if not exp and qa_id in qa:
     exp=field(qa[qa_id],'Повна відповідь:') or field(qa[qa_id],'Відповідь:')
     if exp:
      assert f'{sid}:{cid}' in overrides, f'Missing authored explanation {sid}:{cid}'
      exp=explanation_override(f'{sid}:{cid}')
      report['explanationsFromSource'].append(f'{sid}:{cid}')
    if topic.startswith('Картка '):
     matching=next((sf for sf in d.glob('*_ДЖЕРЕЛО_*.md') if sf.name.split('_ДЖЕРЕЛО_')[0]==f.name.split('_ТЕСТИ_')[0]),None)
     topic=(matching.read_text(encoding='utf-8-sig').splitlines()[0].lstrip('# ').split(' — ',1)[-1] if matching else f.stem.split('_ТЕСТИ_')[0])
    km=re.match(r'([АБВГAB])(?:[.)\s]|$)',answer);key={'A':'А','B':'Б'}.get(km[1],km[1]) if km else ''
    if not q or not all(opts) or len(set(opts))!=4 or key not in KEYS or not exp:
     report['invalid'].append({'file':str(f.relative_to(source)),'id':cid,'question':bool(q),'options':[bool(x) for x in opts],'distinct':len(set(opts)),'key':key,'explanation':bool(exp)});continue
    fingerprint=(q,tuple(opts),key)
    if cid in seen:
     if seen[cid]==fingerprint:report['duplicates'].append(f'{f.relative_to(source)}:{cid}');continue
     report['invalid'].append({'file':str(f.relative_to(source)),'id':cid,'error':'Conflicting ID'});continue
    seen[cid]=fingerprint;media=[]
    for alt,link in re.findall(r'!\[([^\]]*)\]\(([^)]+)\)',b):
     name=Path(link.replace('\\','/')).name;original=imgs.get(name)
     if not original:report['invalid'].append({'file':str(f.relative_to(source)),'id':cid,'error':'Missing image '+link});continue
     target=f'assets/flashcards/grade-9/{sid}/img-'+hashlib.sha256(name.encode()).hexdigest()[:16]+'.png';assets[target]=original
     if target not in [x['image'] for x in media]:media.append({'image':target,'imageAlt':alt or topic,'imagePlacement':'answer' if 'пояснен' in alt.lower() else 'question'})
    clean=lambda x:re.sub(r'!\[[^\]]*\]\([^)]+\)','',x).strip()
    card={'number':0,'externalId':f'{sid}:{cid}','sourceCardId':cid,'type':'single','topic':topic,'questionHtml':'<p>'+html.escape(clean(q)).replace('\n','<br>')+'</p>','options':[{'key':k,'text':clean(v)} for k,v in zip(KEYS,opts)],'correctKey':key,'answerText':clean(exp),'optionSource':'prepared-v21-test','explanationSource':'authored-paraphrase' if f'{sid}:{cid}' in report['explanationsFromSource'] else 'prepared-v21-test','sourceFile':f'data/flashcards/grade-9/sources/v21/{sid}/{f.name}'}
    if f'{sid}:{cid}' in content_review:
     change=content_review[f'{sid}:{cid}']
     card.update({k:v for k,v in change.items() if k!='question'})
     card['questionHtml']='<p>'+html.escape(change['question'])+'</p>'
     card['optionSource']='individual-content-review-v21';card['explanationSource']='individual-content-review-v21'
     media=[]
    if f'{sid}:{cid}' in confirmed and f'{sid}:{cid}' not in content_review:
     card['reviewStatus']='needs_revision';card['reviewReason']=confirmed[f'{sid}:{cid}']['issue']
    if media:card.update(media[0]);card['media']=media
    topics.setdefault(topic,[]).append(card);count+=1
   for topic,cards in topics.items():
    for n,c in enumerate(cards,1):c['number']=n
    variants.append({'id':f'v21-{len(variants)+1}','label':topic,'session':topic,'cards':cards})
  for name in ['manifest_v21.json','BIBLIO.md','AUDIT_V21.md','PROBLEMNI_V21.md','REESTR_V21.md']:
   p=d/name
   if p.exists():copies[f'{sid}/{name}']=p
  packages[sid]={'label':label,'sourceEdition':'v21','sourceStatus':m.get('status',''),'variants':variants}
  report['subjects'].append({'id':sid,'label':label,'cards':count,'variants':len(variants),'preparedTestsInManifest':m.get('counts',{}).get('tests'),'sourceRecordsInManifest':m.get('counts',{}).get('source_records'),'sourceStatus':m.get('status','')})
 report['totalCards']=sum(s['cards'] for s in report['subjects']);return packages,assets,copies,report

def main():
 p=argparse.ArgumentParser();p.add_argument('source',type=Path);p.add_argument('--apply',action='store_true');a=p.parse_args()
 packages,assets,copies,report=build(a.source.resolve());write(ROOT/'tools/grade-9-import-preview.json',dump(report));print(dump({'cards':report['totalCards'],'subjects':len(packages),'invalidCount':len(report['invalid']),'invalidSample':report['invalid'][:3],'explanationsFromSource':len(report['explanationsFromSource'])}))
 if report['invalid'] or not a.apply:return
 assert len(packages)==18 and all(x['variants'] for x in packages.values())
 catalog=json.loads(subprocess.check_output(['node','-e',"global.window={};require('./data/grade-flashcards.js');console.log(JSON.stringify(window.OCEANUA_GRADE_FLASHCARDS));"],cwd=ROOT,encoding='utf-8'))
 now=datetime.fromisoformat(subprocess.check_output(['node','-e',"console.log(new Date().toLocaleString('sv-SE',{timeZone:'Europe/Kyiv'}).replace(' ','T'));"],encoding='utf-8').strip());version=now.strftime('%Y.%m.%d.%H%M%S');stamp=now.strftime('%Y%m%d-%H%M%S')
 for grade in [9,10,11]:
  for base in [ROOT/'data/flashcards',ROOT/'assets/flashcards']:
   folder=(base/f'grade-{grade}').resolve();assert folder.parent==base.resolve() and folder.name==f'grade-{grade}'
   if folder.exists():shutil.rmtree(folder)
 for grade in [9,10,11]:
  file=f'data/flashcards/grade-{grade}.js';year=dump(f'{grade} клас')
  write(ROOT/file,'(function () {\nwindow.OCEANUA_NMT = window.OCEANUA_NMT || {years:{}};\nwindow.OCEANUA_NMT.years['+year+'] = {label:'+year+',subjects:{}};\n})();\n')
  catalog['grades'][str(grade)]={'dataFile':file+'?v='+stamp,'label':f'{grade} клас','description':'Готові тести з редакції v21.' if grade==9 else 'Нові комплекти ще не додані.','sourceYears':[f'{grade} клас'],'subjects':[],'pendingSubjects':[]}
 for sid,package in packages.items():
  file=f'data/flashcards/grade-9/{sid}.js'
  write(ROOT/file,'(function () {\nwindow.OCEANUA_NMT = window.OCEANUA_NMT || {years:{}};\nconst years=window.OCEANUA_NMT.years;\nyears["9 клас"] = years["9 клас"] || {label:"9 клас",subjects:{}};\nyears["9 клас"].subjects['+dump(sid)+'] = '+dump(package)+';\n})();\n')
  catalog['grades']['9']['subjects'].append({'id':sid,'label':package['label'],'dataFile':file+'?v='+stamp})
 for relative,original in assets.items():
  target=ROOT/relative;target.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(original,target)
 for relative,original in copies.items():
  target=ROOT/'data/flashcards/grade-9/sources/v21'/relative;target.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(original,target)
 report['importedAt']=now.isoformat();write(ROOT/'data/flashcards/grade-9/import-report.json',dump(report));write(ROOT/'data/grade-flashcards.js','// Lazy-loaded catalog; see README.md.\nwindow.OCEANUA_GRADE_FLASHCARDS = '+dump(catalog)+';\n')
 app=(ROOT/'app.js').read_text(encoding='utf-8');app=re.sub(r'Версія [\d.]+\. Оновлено .*?\(Europe/Kyiv\)\.',f'Версія {version}. Оновлено {now:%d.%m.%Y} о {now:%H:%M:%S} (Europe/Kyiv).',app);write(ROOT/'app.js',app)
 index=(ROOT/'index.html').read_text(encoding='utf-8')
 for file in ['app.js','data/grade-flashcards.js']:index=re.sub(re.escape(file)+r'\?v=[^"\s]+',file+'?v='+stamp,index)
 write(ROOT/'index.html',index)
if __name__=='__main__':main()
