const fs=require('node:fs'),path=require('node:path'),http=require('node:http'),assert=require('node:assert/strict');
const {chromium}=require('C:/Users/User/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const root=path.resolve(__dirname,'..');
const server=http.createServer((req,res)=>{const p=new URL(req.url,'http://localhost').pathname;const file=path.resolve(root,'.'+(p==='/'?'/index.html':decodeURIComponent(p)));if(!file.startsWith(root+path.sep)){res.writeHead(403);return res.end();}fs.readFile(file,(e,d)=>{if(e){res.writeHead(404);return res.end();}res.setHeader('Content-Type',file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':file.endsWith('.html')?'text/html':'application/octet-stream');res.end(d);});});
(async()=>{await new Promise(r=>server.listen(0,'127.0.0.1',r));let browser;try{
 browser=await chromium.launch({channel:'msedge',headless:true});const page=await browser.newPage({viewport:{width:1400,height:1000}});const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto(`http://127.0.0.1:${server.address().port}`);
 const configs=await page.evaluate(()=>OCEANUA_PYTHON_ACTIVITIES);assert.equal(Object.keys(configs).length,12);
 for(const [id,extra] of Object.entries(configs)){
  await page.evaluate(()=>{openMenu('python');window.renderPythonLessons('course');});assert.equal(await page.locator('.lesson-row[data-lesson-id]').count(),12);await page.locator(`[data-lesson-id="${id}"]`).click();
  for(let i=1;i<extra.scene.frames.length;i++)await page.locator('[data-lesson-action="walk-next"]').click();
  assert.equal(await page.locator('.lesson-watch>div').nth(1).locator('pre').innerText(),extra.scene.frames.at(-1).output);assert.equal(await page.locator('.lesson-trace-line.is-current').count(),1);assert(await page.locator('[data-lesson-action="walk-next"]').isDisabled());
  const bonus=id==='range'?6:5;
  await page.evaluate(({id,bonus})=>{const key='oceanua-python-beginner-course-v1',all=JSON.parse(localStorage.getItem(key)||'{}');all[id]={step:bonus,answers:Object.fromEntries(Array.from({length:bonus-1},(_,i)=>[i+1,{firstTry:true}])),mistakes:0,hints:[],selected:null};localStorage.setItem(key,JSON.stringify(all));},{id,bonus});
  await page.reload();await page.evaluate(()=>{openMenu('python');window.renderPythonLessons('course');});await page.locator(`[data-lesson-id="${id}"]`).click();assert(await page.locator('.lesson-assembly').isVisible());
  for(let i=0;i<extra.task.assemble.length;i++)await page.locator(`[data-lesson-action="add-line"][data-line-id="${i}"]`).click();await page.locator('[data-lesson-action="check-order"]').click();assert(await page.locator('[data-lesson-action="next"]').isDisabled());
  await page.reload();await page.evaluate(()=>{openMenu('python');window.renderPythonLessons('course');});await page.locator(`[data-lesson-id="${id}"]`).click();assert.equal(await page.locator('[data-lesson-action="remove-line"]').count(),extra.task.assemble.length);
  await page.locator('[data-lesson-action="reset-order"]').click();for(const i of extra.task.correctOrder)await page.locator(`[data-lesson-action="add-line"][data-line-id="${i}"]`).click();await page.locator('[data-lesson-action="check-order"]').click();assert.equal(await page.locator('.lesson-output pre').innerText(),extra.task.assemblyOutput);assert(!(await page.locator('[data-lesson-action="next"]').isDisabled()));
  if(id==='final-practice'){await page.setViewportSize({width:390,height:844});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await page.screenshot({path:path.join(root,'tools/python-all-activities-mobile.png')});}
  await page.locator('[data-lesson-action="next"]').click();assert(await page.locator('.lesson-summary').isVisible());
 }
 await page.evaluate(()=>window.renderPythonLessons('stats'));assert((await page.locator('.lesson-card').first().innerText()).includes('61 / 133'));assert((await page.locator('.lesson-card').first().innerText()).includes('12 / 36'));assert.deepEqual(errors,[]);console.log('Passed: all 12 scenes, all 12 assembly missions, old progress preserved, wrong/correct branches, persistence, expected outputs, 61 tasks in separate statistics, mobile layout.');
}finally{if(browser)await browser.close();await new Promise(r=>server.close(r));}})().catch(e=>{console.error(e);process.exitCode=1;});
