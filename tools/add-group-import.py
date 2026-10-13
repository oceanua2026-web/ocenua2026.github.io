from pathlib import Path
p=Path('group-date-export.js');s=p.read_text(encoding='utf-8-sig')
s=s.replace(" const eventKey=", " let importedLessonEvents=[];\n const eventKey=")
s=s.replace(" window.recordPythonLessonEvent=", " const events=()=>[...read(),...importedLessonEvents].filter((e,i,a)=>a.findIndex(x=>JSON.stringify(x)===JSON.stringify(e))===i);\n window.recordPythonLessonEvent=")
s=s.replace("scope==='python'?read():[]", "scope==='python'?events():[]").replace("of read().filter(matches)", "of events().filter(matches)")
s=s.replace('<label class="field-label" for="datedReportGroup">', '<label class="field-label" for="datedReportImport">Додати файли учасників (JSON)</label><input class="text-field" id="datedReportImport" type="file" accept=".json" multiple><label class="field-label" for="datedReportGroup">')
s=s.replace('<button class="ghost-action full-action" id="downloadDatedReport"', '<label class="field-label" for="datedReportFormat">Формат</label><select class="text-field" id="datedReportFormat"><option value="csv">CSV — звіт для керівника</option><option value="json">JSON — дані для передачі та імпорту</option></select><button class="ghost-action full-action" id="downloadDatedReport"')
s=s.replace('Завантажити CSV для керівника групи','Завантажити файл статистики')
s=s.replace("  document.getElementById('downloadDatedReport').addEventListener", """  document.getElementById('datedReportImport').addEventListener('change',async event=>{
   let count=0,failed=0;for(const file of event.target.files){try{const data=JSON.parse(await file.text());if(!Array.isArray(data.sessions)||data.sessions.some(s=>!s||typeof s.id!=='string'||!Array.isArray(s.answers)))throw Error();const lessonEvents=data.lessonEvents||[];if(!Array.isArray(lessonEvents)||lessonEvents.some(e=>!e||typeof e.lessonId!=='string'||typeof e.userKey!=='string'||!['correct','wrong','hint'].includes(e.kind)||!day(e.at)))throw Error();importedGroupSessions.push(...data.sessions);importedLessonEvents.push(...lessonEvents);count++;}catch{failed++;}}
   if(scope==='python')window.renderPythonLessons('stats');else renderStatsSection();document.getElementById('datedReportNotice').textContent=`Додано файлів: ${count}. Не вдалося прочитати: ${failed}.`;
  });
  document.getElementById('downloadDatedReport').addEventListener""")
s=s.replace("   const rows=[[", """   if(document.getElementById('datedReportFormat').value==='json'){
    const selectedSessions=sessions(scope).filter(s=>!group||getStatsGroupKey(s)===group).map(s=>({...s,answers:(s.answers||[]).filter(a=>all||day(a.answeredAt)===chosen)})).filter(s=>all||s.answers.length);
    const lessonEvents=scope==='python'?events().filter(e=>(!group||getStatsGroupKey(e)===group)&&(all||day(e.at)===chosen)):[];
    if(!selectedSessions.length&&!lessonEvents.length){notice.textContent='За вибраний період немає результатів.';return;}
    const payload={schemaVersion:4,exportedAt:new Date().toISOString(),period:all?'all':chosen,timeZone:'Europe/Kyiv',sessions:selectedSessions,lessonEvents};const url=URL.createObjectURL(new Blob([JSON.stringify(payload,null,2)],{type:'application/json'})),link=document.createElement('a');link.href=url;link.download=`oceanua-${scope}-group-${all?'all':chosen}.json`;document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);notice.textContent='Файл JSON завантажено.';return;
   }
   const rows=[[""")
p.write_text(s,encoding='utf-8')
