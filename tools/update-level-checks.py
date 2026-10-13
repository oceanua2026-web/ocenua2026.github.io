from pathlib import Path
for name in ['check-python-lessons.js','check-python-stats.js','check-python-activities.js','check-dated-group-export.js']:
 p=Path('tools')/name;s=p.read_text(encoding='utf-8-sig');s=s.replace("()=>openMenu('python')","()=>{openMenu('python');window.renderPythonLessons('course');}")
 s=s.replace('data.length,11','data.length,35').replace(".map(l=>l.id)).size,11", ".map(l=>l.id)).size,35")
 if name=='check-python-stats.js':s=s.replace("('.lesson-stat-row').count(),12","('.lesson-stat-row').count(),36").replace('5 / 61','5 / 133')
 if name=='check-python-activities.js':s=s.replace('61 / 61','61 / 133').replace('12 / 12','12 / 36')
 p.write_text(s,encoding='utf-8')
