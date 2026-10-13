(function () {
  const rangeSteps = [
    {title:'Дві межі діапазону',text:'range(start, stop) починається зі start і зупиняється перед stop. range(1, 4) дає числа 1, 2, 3.',code:'for i in range(1, 4):\n    print(i)',output:'1\n2\n3'},
    {title:'Передбачте результат',text:'Які числа виведе цикл?',code:'for i in range(1, 5):\n    print(i)',options:['1, 2, 3, 4, 5','1, 2, 3, 4','0, 1, 2, 3, 4'],correct:1,reasons:['Число 5 — права межа, воно не входить у діапазон.','Так! Починаємо з 1, а перед 5 зупиняємося.','Початок задано явно: 1, а не 0.'],hint:'Початкова межа входить у діапазон, кінцева — ні.'},
    {title:'Знайдіть місце помилки',text:'Потрібно вивести числа від 1 до 5 включно. Натисніть на рядок, який потрібно змінити.',lines:['for i in range(1, 5):','    print(i)'],correct:0,reasons:['Правильно: потрібно змінити межу range().','print(i) правильно виводить число. Перевірте рядок із діапазоном.'],hint:'Який рядок визначає числа, які отримає змінна i?'},
    {title:'Виправте код',text:'Виберіть праву межу, щоб отримати числа від 1 до 5 включно.',repair:true,options:['5','6','4'],correct:1,reasons:['З межею 5 останнім числом буде 4.','Саме так: range(1, 6) дає числа 1, 2, 3, 4, 5.','З межею 4 останнім числом буде 3.'],hint:'Права межа має бути на одиницю більшою за останнє потрібне число.'},
    {title:'Перевірте себе',text:'Новий приклад: які числа виведе програма?',code:'for i in range(3, 7):\n    print(i)',options:['3, 4, 5, 6, 7','0, 1, 2, 3, 4, 5, 6','3, 4, 5, 6'],correct:2,reasons:['Права межа 7 не входить у діапазон.','Перший аргумент — 3. Починаємо саме з нього.','Правильно! Правило працює і з іншими межами.'],hint:'Почніть із першого аргументу та зупиніться перед другим.'},
    {title:'Застосуйте правило',text:'Який діапазон дасть числа 2, 3, 4 включно?',options:['range(2, 4)','range(2, 5)','range(1, 5)'],correct:1,reasons:['range(2, 4) дає лише 2 та 3.','Так! Початок — 2, права межа — 5, останнє число — 4.','Цей діапазон додасть зайве число 1.'],hint:'Перша межа — перше число. Друга — наступне після останнього.'}
  ];
  const lessons = [...(window.OCEANUA_PYTHON_BEGINNER_LESSONS || [])];
  lessons.splice(8, 0, {id:'range',title:'Цикл for: куди зникає останнє число?',description:'Передбачте результат, знайдіть помилку та виправте діапазон.',summary:'range(start, stop) включає start, але не включає stop. Для чисел від 1 до 5 використовуйте range(1, 6).',steps:rangeSteps});
  for(const lesson of lessons){const extra=window.OCEANUA_PYTHON_ACTIVITIES?.[lesson.id];if(extra){lesson.steps[0].walkthrough=extra.scene;lesson.steps.push(extra.task);}}
  lessons.forEach(lesson=>lesson.level ||= 'beginner');
  let courseLevel='beginner';
  const levelLabels={beginner:'Початковий рівень',middle:'Середній рівень',high:'Високий рівень'};
  const storageKey='oceanua-python-beginner-course-v1';
  const fresh=()=>({step:0,answers:{},mistakes:0,hints:[],selected:null,feedback:'',trace:0,assembly:[],assemblyAttempted:false,walk:0});
  let states={},activeId=lessons[0].id,storageAvailable=true,selectedPythonStatsSessionId="";
  try {
    const saved=JSON.parse(localStorage.getItem(storageKey)||'{}');
    for(const lesson of lessons){
      const s=saved[lesson.id];
      if(!s||!Number.isInteger(s.step)||s.step<0||s.step>lesson.steps.length)continue;
      if(!s.answers||typeof s.answers!=='object'||Array.isArray(s.answers)||!Array.isArray(s.hints))continue;
      const answers={};
      for(const [key,value] of Object.entries(s.answers)){const i=Number(key);if(Number.isInteger(i)&&lesson.steps[i]?.correct!==undefined&&typeof value?.firstTry==='boolean')answers[i]={firstTry:value.firstTry};}
      if(lesson.steps.slice(0,s.step).some((step,i)=>step.correct!==undefined&&!answers[i]))continue;
      const current=lesson.steps[s.step];
      const selected=Number.isInteger(s.selected)&&s.selected>=0&&s.selected<(current?.options||current?.lines||[]).length?s.selected:null;
      states[lesson.id]={step:s.step,answers,mistakes:Number.isInteger(s.mistakes)&&s.mistakes>=0?s.mistakes:0,hints:s.hints.filter(i=>Number.isInteger(i)&&lesson.steps[i]?.hint),selected,feedback:selected===null?'':current.reasons[selected],trace:0,assembly:Array.isArray(s.assembly)&&current?.assemble?s.assembly.filter((id,i,all)=>Number.isInteger(id)&&id>=0&&id<current.assemble.length&&all.indexOf(id)===i):[],assemblyAttempted:s.assemblyAttempted===true,walk:Number.isInteger(s.walk)&&current?.walkthrough?Math.max(0,Math.min(s.walk,current.walkthrough.frames.length-1)):0};
    }
  } catch(e) { storageAvailable=false; }
  function save(){try{localStorage.setItem(storageKey,JSON.stringify(states));storageAvailable=true;}catch(e){storageAvailable=false;}}
  const completed=lesson=>states[lesson.id]?.step===lesson.steps.length;
  window.renderPythonLessons=function(view='home'){
    const panel=document.getElementById('menuContent'),esc=value=>escapeHtml(String(value)),oldScroll=panel.scrollTop;
    const btn=(action,label,attrs='')=>`<button type="button" data-lesson-action="${action}" ${attrs}>${label}</button>`;
    const doneCount=lessons.filter(completed).length;
    const visibleLessons=lessons.filter(l=>l.level===courseLevel),visibleDone=visibleLessons.filter(completed).length;
    const heading=`<header class="lesson-heading"><span class="lesson-eyebrow">PYTHON · ${levelLabels[courseLevel]}</span><h2>Інтерактивні уроки Python</h2><p>${visibleLessons.length} уроків вибраного рівня. Рухайтеся у своєму темпі.</p><div class="lesson-progress"><span>Завершено ${visibleDone} із ${visibleLessons.length} уроків</span><progress max="${visibleLessons.length}" value="${visibleDone}" aria-label="Прогрес курсу"></progress></div></header>`;
    if(view==='stats') {
      const rows=lessons.map((lesson,index)=>{
        const state=states[lesson.id],total=lesson.steps.filter(s=>s.correct!==undefined).length;
        const answered=Object.keys(state?.answers||{}).length,first=Object.values(state?.answers||{}).filter(a=>a.firstTry).length;
        return {lesson,index,total,answered,first,mistakes:state?.mistakes||0,hints:state?.hints.length||0,status:completed(lesson)?'Завершено':state?'Розпочато':'Не розпочато'};
      });
      const answered=rows.reduce((sum,r)=>sum+r.answered,0),first=rows.reduce((sum,r)=>sum+r.first,0),mistakes=rows.reduce((sum,r)=>sum+r.mistakes,0),hints=rows.reduce((sum,r)=>sum+r.hints,0);
      const sessions=getUserNmtSessions().filter(isPythonStatsSession);
      const selected=sessions.find(s=>s.id===selectedPythonStatsSessionId)||sessions[0];
      selectedPythonStatsSessionId=selected?.id||'';
      panel.innerHTML=`<div class="python-lessons">${btn('home','← Усі матеріали','class="lesson-back"')}<header class="lesson-heading"><span class="lesson-eyebrow">PYTHON · РЕЗУЛЬТАТИ</span><h2>Статистика Python</h2><p>Інтерактивні уроки та флешкартки Python.</p></header>${window.renderDatedGroupExport("python")}<section class="lesson-card"><h3>Інтерактивні уроки</h3><p class="lesson-note">Поточний прогрес у цьому браузері спільний для пристрою. Повторне проходження замінює результат вибраного уроку.</p><div class="stats-strip"><div><strong>${doneCount} / ${lessons.length}</strong><span>уроків завершено</span></div><div><strong>${answered} / ${rows.reduce((sum,r)=>sum+r.total,0)}</strong><span>завдань виконано</span></div><div><strong>${first}</strong><span>без помилок і підказок</span></div><div><strong>${mistakes}</strong><span>помилкових спроб</span></div><div><strong>${hints}</strong><span>кроків із підказками</span></div></div><div class="lesson-stats-list">${rows.map(r=>`<article class="lesson-stat-row"><span class="lesson-badge">Урок ${r.index+1} · ${r.status}</span><h4>${esc(r.lesson.title)}</h4><p>Виконано ${r.answered} із ${r.total} · без помилок і підказок: ${r.first}<br>Помилкових спроб: ${r.mistakes} · кроків із підказками: ${r.hints}</p>${btn('start',completed(r.lesson)?'Переглянути підсумок':'Відкрити урок',`data-lesson-id="${r.lesson.id}"`)}</article>`).join('')}</div></section><section class="lesson-card"><h3>Флешкартки Python</h3><p>Історія тестів користувача ${esc(getProfile().name?.trim()||'Гість')}.</p><div class="stats-strip"><div><strong>${sessions.length}</strong><span>запусків</span></div><div><strong>${sessions.filter(s=>s.status==='completed').length}</strong><span>завершено</span></div><div><strong>${sessions.reduce((sum,s)=>sum+(s.correctCount||0),0)}</strong><span>правильних відповідей</span></div><div><strong>${sessions.reduce((sum,s)=>sum+(s.wrongCount||0),0)}</strong><span>неправильних відповідей</span></div></div>${sessions.length?`<div class="lesson-stats-list">${sessions.map(s=>`<button type="button" data-lesson-action="stats-session" data-python-session-id="${esc(s.id)}" class="${s.id===selectedPythonStatsSessionId?'is-selected':''}"><strong>${esc(getNmtSessionLabel(s))}</strong><br>${formatDateTime(s.startedAt)} · ${s.correctCount||0}/${s.total||0} · ${esc(renderNmtGradeLabel(s))}</button>`).join('')}</div>${selected?renderStatsSessionDetails(selected):''}`:'<p>Результатів ще немає. Дайте відповідь у флешкартках Python.</p>'}${btn('flashcards','Відкрити флешкартки')}</section></div>`;
    } else if(view==='home'){
      panel.innerHTML=`<div class="python-lessons"><header class="lesson-heading"><span class="lesson-eyebrow">PYTHON · КУРС</span><h2>Оберіть рівень курсу</h2><p>Спочатку виберіть рівень — потім відкриється компактний список його уроків.</p></header><div class="lesson-catalog lesson-compact">${Object.entries(levelLabels).map(([level,label])=>btn('level',`<span class="lesson-row-title" style="grid-column:1 / -1">${label} · ${lessons.filter(l=>l.level===level).length} уроків</span>`,`data-course-level="${level}" class="lesson-row"`)).join('')}</div><div class="lesson-actions">${btn('flashcards','Флешкартки: три набори')}${btn('stats','Статистика')}</div></div>`;
    } else if(view==='course'){
      const recommended=visibleLessons.find(l=>!completed(l));
      panel.innerHTML=`<div class="python-lessons">${heading}<nav class="lesson-actions" aria-label="Матеріали Python">${btn('levels','← Обрати рівень')}${btn('stats','Статистика')}</nav><div class="lesson-catalog lesson-compact">${visibleLessons.map((lesson,i)=>{const s=states[lesson.id],total=lesson.steps.filter(step=>step.correct!==undefined).length,passed=Object.keys(s?.answers||{}).length,status=`${total}/${passed}`;return btn('start',`<span class="lesson-row-number">${i+1}</span><span class="lesson-row-title">${esc(lesson.title)}</span><span class="lesson-row-status">${status}</span><span aria-hidden="true">›</span>`,`data-lesson-id="${lesson.id}" class="lesson-row ${recommended?.id===lesson.id?'lesson-recommended':''}" title="${esc(lesson.title)} · Усього завдань: ${total}, пройдено: ${passed}"`);}).join('')}${btn('flashcards','<span class="lesson-row-number" aria-hidden="true">▤</span><span class="lesson-row-title">Флешкартки Python</span><span class="lesson-row-status">3 набори</span><span aria-hidden="true">›</span>','class="lesson-row"')}</div><p class="lesson-note">Усі уроки доступні одразу. ${storageAvailable?'Прогрес зберігається у цьому браузері на цьому пристрої.':'Збереження недоступне: прогрес залишиться лише до перезавантаження.'}</p></div>`;
    }else{
      const lesson=lessons.find(l=>l.id===activeId),steps=lesson.steps;
      const state=states[activeId]||(states[activeId]=fresh());
      const count=steps.filter(s=>s.correct!==undefined).length;
      if(state.step===steps.length){
        const first=Object.values(state.answers).filter(a=>a.firstTry).length,nextLesson=visibleLessons[visibleLessons.indexOf(lesson)+1];
        panel.innerHTML=`<div class="python-lessons">${heading}<article class="lesson-card"><span class="lesson-badge">Урок завершено</span><h2>${esc(lesson.title)}</h2><p>${esc(lesson.summary)}</p><div class="lesson-summary"><strong>${count} / ${count}</strong><span>завдань виконано</span></div><p>Без помилок і підказок: ${first} із ${count}.<br>Помилкових спроб: ${state.mistakes}. Кроків із підказками: ${state.hints.length}.</p>${nextLesson?`<p>Далі: ${esc(nextLesson.title)}</p>`:'<p>Ви дійшли до кінця курсу! Повторіть складні теми або перевірте себе флешкартками.</p>'}<div class="lesson-actions">${nextLesson?btn('start','Наступний урок →',`data-lesson-id="${nextLesson.id}" class="lesson-primary"`):btn('flashcards','До флешкарток','class="lesson-primary"')}${btn('restart','Пройти ще раз')}${btn('home','До списку уроків')}${btn('stats','Статистика')}</div></article></div>`;
      }else{
        const s=steps[state.step],question=s.correct!==undefined,done=!!state.answers[state.step];
        const chosen=s.repair?(state.selected===null?'5':s.options[state.selected]):null;
        const trace=s.repair?Array.from({length:Number(chosen)-1},(_,i)=>i+1):[];
        let activity='';
        if(s.assemble){
          if(done)state.assembly=[...s.correctOrder];
          activity=`<div class="lesson-assembly"><h3>Доступні рядки</h3><div class="lesson-choices">${s.assemble.map((line,i)=>btn('add-line',`<code>${esc(line)}</code>`,`data-line-id="${i}" ${done||state.assembly.includes(i)?'disabled':''}`)).join('')}</div><h3>Ваша програма</h3><div class="lesson-choices">${state.assembly.length?state.assembly.map((id,i)=>btn('remove-line',`<span>${i+1}. </span><code>${esc(s.assemble[id])}</code>`,`data-line-index="${i}" ${done?'disabled':''}`)).join(''):'<p>Додайте перший рядок із переліку вище.</p>'}</div><div class="lesson-actions">${btn('check-order','Перевірити програму',`class="lesson-primary" ${done||state.assembly.length!==s.assemble.length?'disabled':''}`)}${btn('reset-order','Очистити',done?'disabled':'')}</div>${done?`<div class="lesson-output"><span>Результат зібраної програми</span><pre>${esc(s.assemblyOutput||'Початок\nКінець')}</pre></div>`:''}</div>`;
        }
        if(s.walkthrough){
          const walk=s.walkthrough,frame=walk.frames[state.walk];
          activity=`<section class="lesson-simulator"><h3>${esc(walk.title||'Скарбничка: простежте монети')}</h3><div class="lesson-code">${walk.lines.map((line,i)=>`<div class="lesson-trace-line ${(frame.line===undefined?state.walk===i+1:frame.line===i)?'is-current':''}"><span>${i+1}</span><code>${esc(line)}</code></div>`).join('')}</div><div class="lesson-watch"><div><h4>Змінні</h4><pre>${Object.entries(frame.vars).map(([key,value])=>`${key} = ${typeof value==='boolean'?(value?'True':'False'):typeof value==='string'&&!value.startsWith('[')?JSON.stringify(value):value}`).join('\n')||'Ще немає змінних'}</pre></div><div><h4>Екран</h4><pre>${esc(frame.output)||'Ще немає виведення'}</pre></div></div><p role="status" aria-live="polite">${esc(frame.note)}</p><div class="lesson-actions">${btn('walk-next','Наступний крок',`class="lesson-primary" ${state.walk===walk.frames.length-1?'disabled':''}`)}${btn('walk-reset','Почати знову')}</div></section>`;
        }
        const code=s.preview&&state.selected!==null?s.options[state.selected]:s.code;
        panel.innerHTML=`<div class="python-lessons">${btn('home','← Усі матеріали','class="lesson-back"')}${btn('stats','Статистика')}<span class="lesson-badge">Урок ${lessons.indexOf(lesson)+1}: ${esc(lesson.title)}</span><div class="lesson-progress"><span>Крок ${state.step+1} із ${steps.length}</span><progress max="${steps.length}" value="${state.step+1}" aria-label="Прогрес уроку"></progress></div><article class="lesson-card"><span class="lesson-badge">${question?'Ваша черга':'Мінілекція'}</span><h2 id="lessonStepTitle" tabindex="-1">${esc(s.title)}</h2><p>${esc(s.text)}</p>${code?`<pre class="lesson-code"><code>${esc(code)}</code></pre>`:''}${s.output?`<div class="lesson-output"><span>Результат прикладу</span><pre>${esc(s.output)}</pre></div>`:''}${s.lines?`<div class="lesson-lines" role="group" aria-label="Виберіть рядок із помилкою">${s.lines.map((line,i)=>`<button type="button" data-lesson-choice="${i}" class="${state.selected===i?(done?'is-correct':'is-selected'):''}" ${done?'disabled':''}><span>${i+1}</span><code>${esc(line)}</code></button>`).join('')}</div>`:''}${s.repair?`<pre class="lesson-code"><code>for i in range(1, <mark>${chosen}</mark>):\n    print(i)</code></pre>`:''}${s.options&&!s.assemble?`<div class="lesson-choices" role="group" aria-label="Варіанти відповіді">${s.options.map((o,i)=>`<button type="button" data-lesson-choice="${i}" class="${state.selected===i?(done?'is-correct':'is-selected'):''}" ${done?'disabled':''}>${esc(o)}</button>`).join('')}</div>`:''}${activity}${s.repair?`<div class="lesson-output"><span>Покрокова демонстрація обраного діапазону</span><pre>${state.trace?trace.slice(0,state.trace).join('\n'):'Натисніть «Наступна ітерація»'}</pre>${btn('trace',state.trace>=trace.length?'Почати демонстрацію знову':'Наступна ітерація')}</div>`:''}<div class="lesson-feedback ${done?'is-success':''}" role="status" aria-live="polite">${esc(state.feedback)}</div>${state.hints.includes(state.step)?`<aside class="lesson-hint">${esc(s.hint)}</aside>`:''}<div class="lesson-actions">${s.hint&&!done?btn('hint','Підказка'):''}${btn('next',state.step===steps.length-1?'Підсумок уроку →':'Далі →',`class="lesson-primary" ${question&&!done?'disabled':''}`)}</div></article><p class="lesson-note">Можна пробувати знову. ${storageAvailable?'Прогрес зберігається у цьому браузері.':'Збереження недоступне: не закривайте сторінку до завершення.'}</p></div>`;
      }
    }
    if(view==='stats')window.bindDatedGroupExport('python');
    panel.scrollTop=view==='home'?0:oldScroll;
    panel.querySelectorAll('[data-lesson-action]').forEach(el=>el.addEventListener('click',()=>{
      const action=el.dataset.lessonAction;
      if(action==='stats'||action==='stats-session'){
        if(action==='stats-session')selectedPythonStatsSessionId=el.dataset.pythonSessionId;
        window.renderPythonLessons('stats');panel.scrollTop=0;return;
      }
      if(action==='flashcards'){renderPythonSection();return;}
      if(action==='levels'){window.renderPythonLessons();return;}
      if(action==='level'){courseLevel=el.dataset.courseLevel;window.renderPythonLessons('course');panel.scrollTop=0;return;}
      if(action==='home'){window.renderPythonLessons('course');return;}
      if(action==='start'){activeId=el.dataset.lessonId;courseLevel=lessons.find(l=>l.id===activeId).level;states[activeId] ||= fresh();}
      if(action==='restart')states[activeId]=fresh();
      const state=states[activeId],steps=lessons.find(l=>l.id===activeId).steps;
      if(action==='next'){if(steps[state.step].correct!==undefined&&!state.answers[state.step])return;state.step++;state.selected=null;state.feedback='';state.trace=0;state.assembly=[];state.assemblyAttempted=false;state.walk=0;}
      const current=steps[state.step];
      if(current?.assemble&&!state.answers[state.step]){
        if(action==='add-line'){const id=Number(el.dataset.lineId);if(!state.assembly.includes(id))state.assembly.push(id);state.feedback='';}
        if(action==='remove-line'){state.assembly.splice(Number(el.dataset.lineIndex),1);state.feedback='';}
        if(action==='reset-order'){state.assembly=[];state.feedback='';}
        if(action==='check-order'&&state.assembly.length===current.assemble.length){
          const ok=state.assembly.every((id,i)=>id===current.correctOrder[i]);
          if(ok){window.recordPythonLessonEvent(activeId,state.step,'correct',!state.assemblyAttempted&&!state.hints.includes(state.step));state.answers[state.step]={firstTry:!state.assemblyAttempted&&!state.hints.includes(state.step)};state.feedback='Правильно! Рядки складено в потрібному порядку. Подивіться на результат нижче.';}
          else{window.recordPythonLessonEvent(activeId,state.step,'wrong');state.mistakes++;state.assemblyAttempted=true;state.feedback='Порядок ще не відповідає завданню. Перевірте підготовку значень і відступи. Приберіть рядки натисканням і змініть порядок.';}
        }
      }
      if(current?.walkthrough){if(action==='walk-next')state.walk=Math.min(state.walk+1,current.walkthrough.frames.length-1);if(action==='walk-reset')state.walk=0;}
      if(action==='hint'&&!state.hints.includes(state.step)){state.hints.push(state.step);window.recordPythonLessonEvent(activeId,state.step,'hint');}
      if(action==='trace'){const stop=Number(state.selected===null?5:steps[state.step].options[state.selected]);state.trace=state.trace>=stop-1?0:state.trace+1;}
      save();window.renderPythonLessons('lesson');
      if(['next','start','restart'].includes(action)){panel.scrollTop=0;panel.querySelector('#lessonStepTitle')?.focus();}
      else panel.querySelector(`[data-lesson-action="${action}"]`)?.focus({preventScroll:true});
    }));
    panel.querySelectorAll('[data-lesson-choice]').forEach(el=>el.addEventListener('click',()=>{
      const state=states[activeId],step=lessons.find(l=>l.id===activeId).steps[state.step];
      if(state.answers[state.step])return;
      const index=Number(el.dataset.lessonChoice),hadWrong=state.selected!==null;
      state.selected=index;state.trace=0;state.feedback=step.reasons[index];
      window.recordPythonLessonEvent(activeId,state.step,index===step.correct?'correct':'wrong',!hadWrong&&!state.hints.includes(state.step));
      if(index===step.correct)state.answers[state.step]={firstTry:!hadWrong&&!state.hints.includes(state.step)};else state.mistakes++;
      save();window.renderPythonLessons('lesson');
      panel.querySelector(index===step.correct?'[data-lesson-action="next"]':`[data-lesson-choice="${index}"]`)?.focus({preventScroll:true});
    }));
  };
}());




