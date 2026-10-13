from pathlib import Path
p=Path('tools/check-python-lessons.js');s=p.read_text(encoding='utf-8-sig')
s=s.replace('2 із 5','2 із 6').replace('1 із 5','1 із 6').replace("[null,1,0,1,2,1]","[null,1,0,1,2,1,0]").replace('questions,49','questions,61')
needle="if(id==='first-print'&&i===3){"
replacement="""if((id==='range'?i===6:Boolean(data.find(l=>l.id===id).steps[i]?.assemble))&&!(id==='first-print'&&i===3)){
 const task=id==='range'?await page.evaluate(()=>OCEANUA_PYTHON_ACTIVITIES.range.task):data.find(l=>l.id===id).steps[i];
 for(let j=0;j<task.assemble.length;j++)await page.locator(`[data-lesson-action=\"add-line\"][data-line-id=\"${j}\"]`).click();await page.locator('[data-lesson-action=\"check-order\"]').click();assert(await page.locator('[data-lesson-action=\"next\"]').isDisabled());await page.locator('[data-lesson-action=\"reset-order\"]').click();for(const j of task.correctOrder)await page.locator(`[data-lesson-action=\"add-line\"][data-line-id=\"${j}\"]`).click();await page.locator('[data-lesson-action=\"check-order\"]').click();assert.equal(await page.locator('.lesson-output pre').innerText(),task.assemblyOutput);questions++;
}else if(id==='first-print'&&i===3){"""
s=s.replace(needle,replacement);s=s.replace('12 lessons, 49 exercises','12 lessons, 61 exercises');p.write_text(s,encoding='utf-8')
p=Path('tools/check-python-stats.js');s=p.read_text(encoding='utf-8-sig').replace("'first-print':{step:5","'first-print':{step:6").replace('4:{firstTry:true}}','4:{firstTry:true},5:{firstTry:true}}').replace('4 / 49','5 / 61').replace('2 із 5','2 із 6');p.write_text(s,encoding='utf-8')
