from pathlib import Path
p=Path('app.js');s=p.read_text(encoding='utf-8-sig');s='\n'.join(line for line in s.split('\n') if '<strong>${escapeHtml(nmtData.years?.[selectedNmtYear]?.subjects?.[selectedNmtSubject]?.label' not in line);p.write_text(s,encoding='utf-8')
p=Path('styles.css');s=p.read_text(encoding='utf-8-sig').replace('grid-template-columns: minmax(0, 1.4fr) auto auto auto;','grid-template-columns: minmax(0, 1fr) minmax(0, 2fr) auto;');p.write_text(s,encoding='utf-8')
