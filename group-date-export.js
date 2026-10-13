(function(){
 let importedLessonEvents=[];
 const eventKey='oceanua-python-lesson-events-v1';
 const day=value=>{const d=new Date(value);if(!value||Number.isNaN(d.getTime()))return '';const parts=new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Kyiv',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(d);return ['year','month','day'].map(k=>parts.find(p=>p.type===k).value).join('-');};
 const read=()=>{try{const a=JSON.parse(localStorage.getItem(eventKey)||'[]');return Array.isArray(a)?a.filter(e=>e&&typeof e==='object'):[];}catch{return [];}};
 const events=()=>[...read(),...importedLessonEvents].filter((e,i,a)=>a.findIndex(x=>JSON.stringify(x)===JSON.stringify(e))===i);
 window.recordPythonLessonEvent=function(lessonId,step,kind,firstTry){
  const p=getProfile(),events=read();events.push({at:new Date().toISOString(),userKey:getStatsUserKey(),userName:p.name||'Гість',schoolName:p.schoolName||'',schoolCode:p.schoolCode||'',placeName:p.placeName||p.city||'',placeCode:p.placeCode||'',grade:p.grade||'',groupName:p.groupName||'',lessonId,step,kind,firstTry:!!firstTry});
  try{localStorage.setItem(eventKey,JSON.stringify(events));}catch{}
 };
 function sessions(scope){return [...getNmtStats().sessions,...importedGroupSessions].filter(s=>scope==='python'?isPythonStatsSession(s):!isPythonStatsSession(s)).filter((s,i,a)=>a.findIndex(x=>x.id===s.id&&x.userKey===s.userKey)===i);}
 window.renderDatedGroupExport=function(scope){
  const records=[...sessions(scope),...(scope==='python'?events():[])],groups=new Map();records.filter(s=>s.schoolName&&s.groupName).forEach(s=>groups.set(getStatsGroupKey(s),s));
  return `<section class="linked-panel dated-group-export" data-report-scope="${scope}"><h3>Файл статистики групи за дату</h3><p>Усі учасники вибраної групи з локальних та імпортованих результатів.</p><label class="field-label" for="datedReportImport">Додати файли учасників (JSON)</label><input class="text-field" id="datedReportImport" type="file" accept=".json" multiple><label class="field-label" for="datedReportGroup">Заклад і група</label><select class="text-field" id="datedReportGroup"><option value="">Усі учасники на цьому пристрої та в імпортованих файлах</option>${[...groups].map(([key,s])=>`<option value="${escapeHtml(key)}">${escapeHtml(formatDetails([s.schoolName,s.groupName]))}</option>`).join('')}</select><label class="field-label" for="datedReportPeriod">Період</label><select class="text-field" id="datedReportPeriod"><option value="day">Один день</option><option value="all">За весь час</option></select><label class="field-label" for="datedReportDate">Дата (Europe/Kyiv)</label><input class="text-field" id="datedReportDate" type="date" value="${day(new Date().toISOString())}" required><label class="field-label" for="datedReportFormat">Формат</label><select class="text-field" id="datedReportFormat"><option value="csv">CSV — звіт для керівника</option><option value="json">JSON — дані для передачі та імпорту</option></select><button class="ghost-action full-action" id="downloadDatedReport" type="button">Завантажити файл статистики</button><p id="datedReportNotice" role="status"></p><p class="empty-text">Для уроків Python дата починає записуватися з цього оновлення. Старі відповіді без дати не включаються у звіт за день. Для даних з інших пристроїв імпортуйте файли статистики учнів.</p></section>`;
 };
 window.bindDatedGroupExport=function(scope){
  const date=document.getElementById('datedReportDate'),period=document.getElementById('datedReportPeriod');period.addEventListener('change',()=>date.disabled=period.value==='all');
  document.getElementById('datedReportImport').addEventListener('change',async event=>{
   let count=0,failed=0;for(const file of event.target.files){try{const data=JSON.parse(await file.text());if(!Array.isArray(data.sessions)||data.sessions.some(s=>!s||typeof s.id!=='string'||!Array.isArray(s.answers)))throw Error();const lessonEvents=data.lessonEvents||[];if(!Array.isArray(lessonEvents)||lessonEvents.some(e=>!e||typeof e.lessonId!=='string'||typeof e.userKey!=='string'||!['correct','wrong','hint'].includes(e.kind)||!day(e.at)))throw Error();importedGroupSessions.push(...data.sessions);importedLessonEvents.push(...lessonEvents);count++;}catch{failed++;}}
   if(scope==='python')window.renderPythonLessons('stats');else renderStatsSection();document.getElementById('datedReportNotice').textContent=`Додано файлів: ${count}. Не вдалося прочитати: ${failed}.`;
  });
  document.getElementById('downloadDatedReport').addEventListener('click',()=>{
   const all=period.value==='all',chosen=date.value,group=document.getElementById('datedReportGroup').value,notice=document.getElementById('datedReportNotice');if(!all&&!date.checkValidity()){date.reportValidity();return;}
   if(document.getElementById('datedReportFormat').value==='json'){
    const selectedSessions=sessions(scope).filter(s=>!group||getStatsGroupKey(s)===group).map(s=>({...s,answers:(s.answers||[]).filter(a=>all||day(a.answeredAt)===chosen)})).filter(s=>all||s.answers.length);
    const lessonEvents=scope==='python'?events().filter(e=>(!group||getStatsGroupKey(e)===group)&&(all||day(e.at)===chosen)):[];
    if(!selectedSessions.length&&!lessonEvents.length){notice.textContent='За вибраний період немає результатів.';return;}
    const payload={schemaVersion:4,exportedAt:new Date().toISOString(),period:all?'all':chosen,timeZone:'Europe/Kyiv',sessions:selectedSessions,lessonEvents};const url=URL.createObjectURL(new Blob([JSON.stringify(payload,null,2)],{type:'application/json'})),link=document.createElement('a');link.href=url;link.download=`oceanua-${scope}-group-${all?'all':chosen}.json`;document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);notice.textContent='Файл JSON завантажено.';return;
   }
   const rows=[['Дата','Учень','Ідентифікатор','Заклад','Група','Тип','Предмет / урок','Усього завдань','Правильних відповідей за період','Помилок за період','Підказок за період']];
   const matches=s=>!group||getStatsGroupKey(s)===group;
   for(const s of sessions(scope).filter(matches)){
    const answers=(s.answers||[]).filter(a=>all||day(a.answeredAt)===chosen);if(!all&&!answers.length)continue;
    rows.push([all?'Увесь час':chosen,s.userName,s.userKey,s.schoolName,s.groupName,'Флешкартки',formatDetails([s.subjectLabel,s.variantLabel]),s.total,answers.filter(a=>a.isCorrect).length,answers.filter(a=>!a.isCorrect).length,'']);
   }
   if(scope==='python'){
    const groups=new Map();for(const e of events().filter(matches).filter(e=>all||day(e.at)===chosen)){
     const key=JSON.stringify([e.userKey,getStatsGroupKey(e),e.lessonId]);if(!groups.has(key))groups.set(key,{e,correct:0,wrong:0,hints:0});const r=groups.get(key);if(e.kind==='correct')r.correct++;if(e.kind==='wrong')r.wrong++;if(e.kind==='hint')r.hints++;
    }
    for(const {e,correct,wrong,hints} of groups.values()){const lesson=window.OCEANUA_PYTHON_BEGINNER_LESSONS.find(l=>l.id===e.lessonId);rows.push([all?'Увесь час':chosen,e.userName,e.userKey,e.schoolName,e.groupName,'Інтерактивний урок',lesson?.title||e.lessonId,lesson?.steps.filter(s=>s.correct!==undefined).length||6,correct,wrong,hints]);}
   }
   if(rows.length===1){notice.textContent='За вибраний період немає результатів. Виберіть іншу дату або «За весь час».';return;}
   const quote=v=>{let s=String(v??'');if(/^[=+@-]/.test(s))s="'"+s;return '"'+s.replace(/"/g,'""')+'"';};const blob=new Blob(['\uFEFF'+rows.map(r=>r.map(quote).join(';')).join('\r\n')],{type:'text/csv;charset=utf-8'}),url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download=`oceanua-${scope}-group-${all?'all':chosen}.csv`;document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);notice.textContent=`Вивантажено рядків: ${rows.length-1}.`;
  });
 };
}());
