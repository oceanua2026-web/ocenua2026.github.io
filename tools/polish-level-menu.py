from pathlib import Path
p=Path('python-lessons.js');s=p.read_text(encoding='utf-8-sig').replace("btn('level',`${label} · ${lessons.filter(l=>l.level===level).length} уроків`", "btn('level',`<span class=\"lesson-row-title\" style=\"grid-column:1 / -1\">${label} · ${lessons.filter(l=>l.level===level).length} уроків</span>`");p.write_text(s,encoding='utf-8')
