const fs=require('node:fs'),path=require('node:path'),http=require('node:http'),assert=require('node:assert/strict');
const {chromium}=require('C:/Users/User/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const root=path.resolve(__dirname,'..');
const server=http.createServer((req,res)=>{const p=new URL(req.url,'http://localhost').pathname;const file=path.resolve(root,'.'+(p==='/'?'/index.html':decodeURIComponent(p)));if(!file.startsWith(root+path.sep)){res.writeHead(403);return res.end();}fs.readFile(file,(e,d)=>{if(e){res.writeHead(404);return res.end();}res.setHeader('Content-Type',file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':file.endsWith('.html')?'text/html':'application/octet-stream');res.end(d);});});
(async()=>{await new Promise(r=>server.listen(0,'127.0.0.1',r));let browser;try{
for(const channel of ['msedge','chrome',undefined]){try{browser=await chromium.launch({channel,headless:true});break;}catch(e){if(!channel)throw e;}}
const page=await browser.newPage({viewport:{width:1400,height:1000}});const errors=[];page.on('pageerror',e=>errors.push(e.message));
const origin=`http://127.0.0.1:${server.address().port}`;
await page.goto(origin);await page.evaluate(()=>{openMenu('python');window.renderPythonLessons('course');});
assert.equal(await page.locator('[data-lesson-id]').count(),12);
const data=await page.evaluate(()=>OCEANUA_PYTHON_BEGINNER_LESSONS);assert.equal(data.length,35);assert.equal(new Set(data.map(l=>l.id)).size,35);
for(const lesson of data)for(const step of lesson.steps){if(step.correct===undefined)continue;assert.equal(step.options.length,step.reasons.length);assert(step.correct>=0&&step.correct<step.options.length);assert.equal(new Set(step.options).size,step.options.length);assert(step.hint);}
await page.screenshot({path:path.join(root,'tools/python-course-catalog.png')});
await page.locator('[data-lesson-id="first-print"]').click();await page.locator('[data-lesson-action="next"]').click();assert(await page.locator('[data-lesson-action="next"]').isDisabled());
await page.locator('[data-lesson-choice="1"]').click();assert(await page.locator('[data-lesson-action="next"]').isDisabled());await page.locator('[data-lesson-action="hint"]').click();assert(await page.locator('.lesson-hint').isVisible());
await page.reload();await page.evaluate(()=>{openMenu('python');window.renderPythonLessons('course');});await page.locator('[data-lesson-id="first-print"]').click();assert((await page.locator('.lesson-progress').innerText()).includes('2 із 6'));assert(await page.locator('.lesson-hint').isVisible());assert((await page.locator('.lesson-feedback').innerText()).includes('print'));
await page.locator('[data-lesson-action="home"]').click();await page.locator('[data-lesson-id="variables"]').click();assert((await page.locator('.lesson-progress').innerText()).includes('1 із 6'));await page.locator('[data-lesson-action="home"]').click();
const ordered=await page.locator('[data-lesson-id]').evaluateAll(nodes=>nodes.map(n=>n.dataset.lessonId));let questions=0;
for(let index=0;index<ordered.length;index++){
const id=ordered[index];await page.locator(`[data-lesson-id="${id}"]`).click();const correct=id==='range'?[null,1,0,1,2,1,0]:data.find(l=>l.id===id).steps.map(s=>s.correct??null);
for(let i=0;i<correct.length;i++){
if(i===0&&id==='first-print')continue;
if(id==='variables'&&i===0){
 assert((await page.locator('.lesson-watch').innerText()).includes('Ще немає змінних'));await page.locator('[data-lesson-action="walk-next"]').click();assert((await page.locator('.lesson-watch').innerText()).includes('coins = 2'));await page.locator('[data-lesson-action="walk-next"]').click();assert((await page.locator('.lesson-watch').innerText()).includes('coins = 5'));
 await page.reload();await page.evaluate(()=>{openMenu('python');window.renderPythonLessons('course');});await page.locator('[data-lesson-id="variables"]').click();assert((await page.locator('.lesson-watch').innerText()).includes('coins = 5'));await page.locator('[data-lesson-action="walk-next"]').click();assert.equal(await page.locator('.lesson-watch>div').nth(1).locator('pre').innerText(),'5');assert(await page.locator('[data-lesson-action="walk-next"]').isDisabled());assert.equal(await page.locator('.lesson-trace-line.is-current').count(),1);await page.screenshot({path:path.join(root,'tools/python-walkthrough.png')});await page.locator('[data-lesson-action="walk-reset"]').click();assert((await page.locator('.lesson-watch').innerText()).includes('Ще немає змінних'));
}
if((id==='range'?i===6:Boolean(data.find(l=>l.id===id).steps[i]?.assemble))&&!(id==='first-print'&&i===3)){
 const task=id==='range'?await page.evaluate(()=>OCEANUA_PYTHON_ACTIVITIES.range.task):data.find(l=>l.id===id).steps[i];
 for(let j=0;j<task.assemble.length;j++)await page.locator(`[data-lesson-action="add-line"][data-line-id="${j}"]`).click();await page.locator('[data-lesson-action="check-order"]').click();assert(await page.locator('[data-lesson-action="next"]').isDisabled());await page.locator('[data-lesson-action="reset-order"]').click();for(const j of task.correctOrder)await page.locator(`[data-lesson-action="add-line"][data-line-id="${j}"]`).click();await page.locator('[data-lesson-action="check-order"]').click();assert.equal(await page.locator('.lesson-output pre').innerText(),task.assemblyOutput);questions++;
}else if(id==='first-print'&&i===3){
 await page.locator('[data-lesson-action="add-line"][data-line-id="0"]').click();await page.locator('[data-lesson-action="add-line"][data-line-id="1"]').click();await page.locator('[data-lesson-action="check-order"]').click();assert(await page.locator('[data-lesson-action="next"]').isDisabled());
 await page.reload();await page.evaluate(()=>{openMenu('python');window.renderPythonLessons('course');});await page.locator('[data-lesson-id="first-print"]').click();assert.equal(await page.locator('[data-lesson-action="remove-line"]').count(),2);
 await page.locator('[data-lesson-action="reset-order"]').click();await page.locator('[data-lesson-action="add-line"][data-line-id="1"]').click();await page.locator('[data-lesson-action="add-line"][data-line-id="0"]').click();await page.locator('[data-lesson-action="check-order"]').click();assert(!(await page.locator('[data-lesson-action="next"]').isDisabled()));assert((await page.locator('.lesson-output').innerText()).includes('Початок'));questions++;
 await page.setViewportSize({width:390,height:844});await page.screenshot({path:path.join(root,'tools/python-assembly-mobile.png')});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await page.setViewportSize({width:1400,height:1000});
}else if(correct[i]!==null){
const count=await page.locator('[data-lesson-choice]').count();const wrong=(correct[i]+1)%count;
await page.locator(`[data-lesson-choice="${wrong}"]`).click();assert(await page.locator('[data-lesson-action="next"]').isDisabled());assert(await page.locator('.lesson-feedback').innerText());
await page.locator(`[data-lesson-choice="${correct[i]}"]`).click();assert(!(await page.locator('[data-lesson-action="next"]').isDisabled()));questions++;
if(id==='range'&&i===3){assert((await page.locator('.lesson-code').innerText()).includes('range(1, 6)'));for(let j=0;j<5;j++)await page.locator('[data-lesson-action="trace"]').click();assert.equal(await page.locator('.lesson-output pre').innerText(),'1\n2\n3\n4\n5');}
if(id==='conditions'&&i===3){assert((await page.locator('.lesson-code').innerText()).includes('    print'));await page.setViewportSize({width:390,height:844});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await page.screenshot({path:path.join(root,'tools/python-course-mobile.png')});await page.setViewportSize({width:1400,height:1000});}
}
await page.locator('[data-lesson-action="next"]').click();
}
assert(await page.locator('.lesson-summary').isVisible());const total=correct.filter(c=>c!==null).length;assert((await page.locator('.lesson-summary').innerText()).includes(`${total} / ${total}`));
if(index<ordered.length-1){await page.locator('[data-lesson-action="start"]').click();assert((await page.locator('.lesson-progress').innerText()).includes('1 із'));}
await page.locator('[data-lesson-action="home"]').click();
}
assert.equal(questions,61);assert((await page.locator('.lesson-heading').innerText()).includes('Завершено 12 із 12'));
await page.reload();await page.evaluate(()=>{openMenu('python');window.renderPythonLessons('course');});assert((await page.locator('.lesson-heading').innerText()).includes('Завершено 12 із 12'));await page.locator('[data-lesson-id="variables"]').click();await page.locator('[data-lesson-action="restart"]').click();assert((await page.locator('.lesson-progress').innerText()).includes('1 із 6'));await page.locator('[data-lesson-action="home"]').click();assert((await page.locator('.lesson-heading').innerText()).includes('Завершено 11 із 12'));
await page.locator('[data-lesson-action="flashcards"]').click();assert.equal(await page.locator('.nmt-test-card').count(),1);assert.equal(await page.evaluate(()=>nmtData.years.python.subjects.python_basics.variants[0].cards.length),12);await page.locator('[data-nmt-select="А"]').click();assert(await page.locator('.nmt-correct-answer').isVisible());await page.getByRole('button',{name:'← Уроки Python',exact:true}).click();assert.equal(await page.locator('[data-lesson-id]').count(),12);
await page.evaluate(()=>localStorage.setItem('oceanua-python-beginner-course-v1','{broken'));await page.reload();await page.evaluate(()=>{openMenu('python');window.renderPythonLessons('course');});assert((await page.locator('.lesson-heading').innerText()).includes('Завершено 0 із 12'));await page.locator('[data-lesson-id="first-print"]').click();assert(await page.locator('[data-lesson-action="next"]').isVisible());
await page.addInitScript(()=>{Storage.prototype.setItem=function(){throw Error('storage disabled');};});await page.reload();await page.evaluate(()=>{openMenu('python');window.renderPythonLessons('course');});await page.locator('[data-lesson-id="first-print"]').click();assert((await page.locator('.lesson-note').innerText()).includes('Збереження недоступне'));await page.locator('[data-lesson-action="next"]').click();assert(await page.locator('[data-lesson-choice="0"]').isVisible());assert.deepEqual(errors,[]);
console.log('Passed: 12 lessons, 61 exercises, all incorrect/correct branches, persistence of hints and answers, sequential navigation, isolated restart, malformed/unavailable storage, original flashcards, mobile layout, no browser errors.');
}finally{if(browser)await browser.close();await new Promise(r=>server.close(r));}})().catch(e=>{console.error(e);process.exitCode=1;});

