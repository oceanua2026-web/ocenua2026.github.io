"""Independent calculations and consistency checks for reviewed educational tests."""
from pathlib import Path
import json,re,ast,subprocess,importlib.util
ROOT=Path(__file__).resolve().parents[1]
review=json.loads((ROOT/'tools/content-review/corrections.json').read_text(encoding='utf-8'))
def answer(cid):
 c=review['informatics-9-v21:'+cid];return next(o['text'] for o in c['options'] if o['key']==c['correctKey'])
checks=0
def check(cid,actual):
 global checks
 assert answer(cid)==actual,(cid,answer(cid),actual);checks+=1
check('2.05','Приблизно 0,85%');assert round(51.4/(5.9*1024)*100,2)==0.85
check('26.02',str(['a','b','c','d'][1:3]))
a=[2,15,3,-5,10];a[3]=0;assert ast.literal_eval(answer('26.03'))==a;checks+=1
assert eval(answer('26.05'))==[i*i for i in range(1,11)];checks+=1
assert eval(answer('26.06'))==list(range(1,21,2));checks+=1
a=[2,8,1,4,3,-5,3];check('27.01',', '.join(map(str,[a.index(4),a.count(3),len(a),max(a)])));a.insert(3,10);assert ast.literal_eval(answer('27.02'))==a;checks+=1
check('28.01',str(sum([3,8,5,7,6])))
a=[-3,0,2,2,5];assert eval(answer('28.02'))==3;checks+=1
nazva=['a','b'];assert eval(answer('28.03'))=='a, b';checks+=1
Numbers=[2,3,2,2];assert eval(answer('28.04'))==1;checks+=1
a=[1,2,2,4];check('29.02',str(sum(a[i]>=a[i+1] for i in range(len(a)-1))))
assert ast.literal_eval(answer('29.03'))==sorted([3,-1,5,2,0,4,-2],reverse=True);checks+=1
times=[14,11,15,12,10];assert eval(answer('29.05'))==[10,11,12];checks+=1
assert ast.literal_eval(answer('32.02').split('=',1)[1])==[[1,2,3,4],[8,7,6,5],[9,10,11,12]];checks+=1
inputs=iter(range(15));matrix=eval(answer('32.03'),{'input':lambda:next(inputs)});assert len(matrix)==3 and all(len(row)==5 for row in matrix) and len({id(row) for row in matrix})==3;checks+=1
import random
matrix=eval(answer('32.04'),{'randint':random.randint});assert len(matrix)==4 and all(len(row)==6 for row in matrix) and len({id(row) for row in matrix})==4;checks+=1
check('32.06',str(abs(2-2)))
tabl=[[i*10+j for j in range(6)] for i in range(6)]
assert eval(answer('33.01'))==sum(i*10+j for i in range(6) for j in range(6));checks+=1
assert eval(answer('33.02'))==0+11+22+33;checks+=1
assert eval(answer('33.03'))==42;checks+=1
assert eval(answer('33.04'))==12.5;checks+=1
assert eval(answer('33.05'))==[i*10+2.5 for i in range(6)];checks+=1
magazyn={'яблука':15,'груші':25,'огірки':9};assert magazyn['груші']==25
try:magazyn['морква'];raise AssertionError('Missing KeyError')
except KeyError:pass
exec(answer('34.02'));assert magazyn['капуста']==5;checks+=1
name='капуста';kg=3;assert eval(answer('34.06'))==15;checks+=1
# Compare each reviewed record to both independently stored Markdown copies.
for cid,c in review.items():
 assert len(c['options'])==4 and len({o['text'] for o in c['options']})==4,cid
 assert sum(o['key']==c['correctKey'] for o in c['options'])==1,cid
 assert c['reviewSource']['pdfPages'] and c['answerText'] and c['question'],cid
old=[entry['before'] for entry in json.loads((ROOT/'data/flashcards/grade-9/content-review-report.json').read_text(encoding='utf-8'))['cards']]
for row in old:
 c=review[row['id']];p=ROOT/row['sourceFile'];t=p.read_text(encoding='utf-8-sig');cid=row['id'].split(':')[1]
 m=re.search(r'^#{2,3}\s+ТЕСТ\s+'+re.escape(cid)+r'\s*$(.*?)(?=^#{2,3}\s+ТЕСТ\s|\Z)',t,re.M|re.S);assert m,cid;b=m[1]
 assert '**Запитання:** '+c['question'] in b,cid
 assert '**Повне пояснення:** '+c['answerText'] in b,cid
 for o in c['options']:assert '**'+o['key']+'.** '+o['text'] in b,cid
 assert '**Правильна відповідь:** '+c['correctKey']+'. ' in b,cid
 label={'civics-9-v21':'Громадська освіта','informatics-9-v21':'Інформатика','ukraine-history-9-v21':'Історія України'}[row['id'].split(':')[0]]
 source=Path(r'D:\Claude Code в VS Code\підручники\ШК3\09 кл шк3')/label/p.name
 assert source.read_text(encoding='utf-8-sig')==t,str(source)
result={'passed':True,'calculationChecks':checks,'reviewedRecords':len(review),'markdownCopiesVerified':len(old),'correctKeyDistribution':{k:sum(c['correctKey']==k for c in review.values()) for k in 'АБВГ'}}
(ROOT/'tools/content-review/verification.json').write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding='utf-8');print(json.dumps(result,ensure_ascii=False))
