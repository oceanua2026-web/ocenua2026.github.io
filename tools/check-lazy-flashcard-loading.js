const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const context = vm.createContext({window:{}});
vm.runInContext(fs.readFileSync(path.join(root,'data/grade-flashcards.js'),'utf8'),context);
const grades=context.window.OCEANUA_GRADE_FLASHCARDS.grades;
assert.equal(Object.keys(grades).length,11);
assert(!/<script[^>]+src="data\/flashcards\//.test(fs.readFileSync(path.join(root,'index.html'),'utf8')));
const runtime=vm.createContext({window:{}});
for(const [grade,config] of Object.entries(grades)) {
 const file=config.dataFile.split('?')[0];assert(fs.existsSync(path.join(root,file)));
 vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),runtime);
 if(['9','10','11'].includes(grade)) assert.equal(Object.keys(runtime.window.OCEANUA_NMT.years[`${grade} клас`].subjects).length,0);
}
assert.equal(grades['9'].subjects.length,18);
let count=0,excluded=0,authored=0,reviewed=0;
for(const config of grades['9'].subjects) {
 assert(config.dataFile);
 vm.runInContext(fs.readFileSync(path.join(root,config.dataFile.split('?')[0]),'utf8'),runtime);
 const subject=runtime.window.OCEANUA_NMT.years['9 клас'].subjects[config.id];assert(subject);assert.equal(subject.label,config.label);
 const ids=new Set();
 for(const variant of subject.variants) {
  assert(variant.cards.length);
  for(const card of variant.cards) {
   count++;assert(!ids.has(card.externalId));ids.add(card.externalId);
   assert.equal(card.type,'single');assert.equal(card.options.length,4);assert.equal(new Set(card.options.map(o=>o.text)).size,4);
   assert(card.options.some(o=>o.key===card.correctKey));assert(card.answerText);assert(card.questionHtml);
   if(card.reviewStatus==='needs_revision') excluded++;
   if(card.reviewStatus==='reviewed') {reviewed++;assert(card.reviewSource.pdfPages.length);assert.equal(card.explanationSource,'individual-content-review-v21');}
   if(card.explanationSource==='authored-paraphrase') authored++;
   for(const item of card.media || []) {assert(/^assets\/[a-z0-9/_-]+\.png$/i.test(item.image));assert(fs.existsSync(path.join(root,item.image)));}
  }
 }
}
assert.equal(count,3289);assert.equal(excluded,0);assert.equal(reviewed,452);
const oldReviewed=JSON.parse(fs.readFileSync(path.join(root,'data/flashcards/grade-9/content-review-report.json'),'utf8')).cards.map(entry=>entry.before);
const formerlyAuthored=JSON.parse(fs.readFileSync(path.join(root,'tools/missing-explanations.json'),'utf8'));
const reviewedIds=new Set(oldReviewed.map(c=>c.id));
assert.equal(authored,474-formerlyAuthored.filter(c=>reviewedIds.has(c.id)).length);
assert.equal(grades['10'].subjects.length,0);assert.equal(grades['11'].subjects.length,0);
const app=fs.readFileSync(path.join(root,'app.js'),'utf8');
const stats=vm.createContext({});
for(const name of ['calculateNmtGrade','updateNmtSessionScore','recomputeNmtSession','renderNmtGradeLabel']) {
 const source=app.match(new RegExp('function '+name+'\\([^]*?\\n}'))?.[0];assert(source,name);vm.runInContext(source,stats);
}
for(const [correct,total,answered,grade] of [[0,10,0,null],[0,10,3,1],[1,5,1,3],[2,3,3,8],[4,5,5,10],[5,5,5,12],[0,0,0,null],[1,7,1,2]]) assert.equal(stats.calculateNmtGrade(correct,total,answered),grade);
const session={total:3,answers:[{isCorrect:true},{isCorrect:false}],status:'in_progress'};
stats.recomputeNmtSession(session);assert.equal(session.grade12,4);assert.equal(session.wrongCount,1);assert.equal(session.unansweredCount,1);assert.equal(session.status,'in_progress');
session.answers.push({isCorrect:true});stats.recomputeNmtSession(session);assert.equal(session.grade12,8);assert.equal(session.status,'completed');assert(session.completedAt);
console.log('Passed: 18 separate packages, 3289 imported / 3289 active cards, 452 individually reviewed tests, media paths, empty grades 10–11 and 12-point scoring.');
