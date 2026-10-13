from pathlib import Path
keep=[0,1,2,3,5,6,8,9,10,11,14,15]
p=Path('data/python-flashcards.js');s=p.read_text(encoding='utf-8-sig');lines=s.splitlines();cards=[i for i,line in enumerate(lines) if line.lstrip().startswith('["')];assert len(cards)==20
chosen={cards[i] for i in keep};lines=[line for i,line in enumerate(lines) if i not in cards or i in chosen];s='\n'.join(lines).replace('python-basics"','python-basics-12-v2"').replace('20 флеш-карт','12 флеш-карт');p.write_text(s+'\n',encoding='utf-8')
p=Path('data/python-levels.js');s=p.read_text(encoding='utf-8-sig').replace('c.answerText=explanations[i]','c.answerText=explanations[[0,1,2,3,5,6,8,9,10,11,14,15][i]]');p.write_text(s,encoding='utf-8')
for name in ['check-python-lessons.js','check-python-stats.js','check-python-levels.js']:
 p=Path('tools')/name;s=p.read_text(encoding='utf-8-sig').replace('cards.length),20','cards.length),12').replace('cards.length,44','cards.length,36').replace('20 original cards','12 beginner cards').replace('44 flashcards','36 flashcards');p.write_text(s,encoding='utf-8')
