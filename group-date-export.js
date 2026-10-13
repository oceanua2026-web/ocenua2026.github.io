// Експорт статистики групи: група -> предмет -> параграф/урок -> дата.
// У CSV спільні дані (заклад, група, предмет, параграф, дата) йдуть у шапку,
// а нижче лише таблиця: № / ПІБ / Оцінка.
(function () {
  let importedLessonEvents = [];
  const eventKey = 'oceanua-python-lesson-events-v1';
  const PY_LESSONS_SUBJECT = 'Інтерактивні уроки Python';

  const day = value => {
    const d = new Date(value);
    if (!value || Number.isNaN(d.getTime())) return '';
    const parts = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Kyiv', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(d);
    return ['year', 'month', 'day'].map(k => parts.find(p => p.type === k).value).join('-');
  };
  const read = () => { try { const a = JSON.parse(localStorage.getItem(eventKey) || '[]'); return Array.isArray(a) ? a.filter(e => e && typeof e === 'object') : []; } catch { return []; } };
  const events = () => [...read(), ...importedLessonEvents].filter((e, i, a) => a.findIndex(x => JSON.stringify(x) === JSON.stringify(e)) === i);

  window.recordPythonLessonEvent = function (lessonId, step, kind, firstTry) {
    const p = getProfile(), list = read();
    list.push({ at: new Date().toISOString(), userKey: getStatsUserKey(), userName: p.name || 'Гість', schoolName: p.schoolName || '', schoolCode: p.schoolCode || '', placeName: p.placeName || p.city || '', placeCode: p.placeCode || '', grade: p.grade || '', groupName: p.groupName || '', lessonId, step, kind, firstTry: !!firstTry });
    try { localStorage.setItem(eventKey, JSON.stringify(list)); } catch {}
  };

  function sessions(scope) {
    return [...getNmtStats().sessions, ...importedGroupSessions]
      .filter(s => scope === 'python' ? isPythonStatsSession(s) : !isPythonStatsSession(s))
      .filter((s, i, a) => a.findIndex(x => x.id === s.id && x.userKey === s.userKey) === i);
  }

  const lessonTitle = id => (window.OCEANUA_PYTHON_BEGINNER_LESSONS || []).find(l => l.id === id)?.title || id;
  const lessonTotal = id => (window.OCEANUA_PYTHON_BEGINNER_LESSONS || []).find(l => l.id === id)?.steps.filter(s => s.correct !== undefined).length || 6;

  // Єдиний вигляд записів: одна «спроба» учня з предметом, параграфом і датою.
  function buildEntries(scope) {
    const out = [];
    for (const s of sessions(scope)) {
      const days = [...new Set((s.answers || []).map(a => day(a.answeredAt)).filter(Boolean))];
      if (!days.length) days.push(day(s.startedAt));
      for (const d of days) {
        const answers = (s.answers || []).filter(a => day(a.answeredAt) === d);
        out.push({
          kind: 'cards', day: d, at: s.updatedAt || s.startedAt || '',
          userKey: s.userKey, userName: s.userName, schoolName: s.schoolName || '', groupName: s.groupName || '', groupKey: getStatsGroupKey(s),
          subject: s.subjectLabel || '', variant: s.variantLabel || '',
          correct: answers.filter(a => a.isCorrect).length, wrong: answers.filter(a => !a.isCorrect).length, total: Number(s.total || 0)
        });
      }
    }
    if (scope === 'python') {
      const g = new Map();
      for (const e of events()) {
        const d = day(e.at); if (!d) continue;
        const k = JSON.stringify([e.userKey, getStatsGroupKey(e), e.lessonId, d]);
        if (!g.has(k)) g.set(k, { kind: 'lesson', day: d, at: e.at, userKey: e.userKey, userName: e.userName, schoolName: e.schoolName || '', groupName: e.groupName || '', groupKey: getStatsGroupKey(e), subject: PY_LESSONS_SUBJECT, variant: lessonTitle(e.lessonId), correct: 0, wrong: 0, total: lessonTotal(e.lessonId) });
        const r = g.get(k);
        if (e.kind === 'correct') r.correct++;
        if (e.kind === 'wrong') r.wrong++;
        if (e.at > r.at) r.at = e.at;
      }
      out.push(...g.values());
    }
    return out;
  }

  const grade12 = r => {
    const answered = r.correct + r.wrong, total = Math.max(r.total, answered);
    if (!answered || !total) return '';
    if (typeof calculateNmtGrade === 'function') { const v = calculateNmtGrade(r.correct, total, answered); if (v != null) return v; }
    return Math.max(1, Math.round(12 * r.correct / total));
  };

  const uniq = (list, key) => [...new Set(list.map(x => x[key]).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'uk', { numeric: true }));
  const opts = (values, placeholder) => `<option value="">${placeholder}</option>` + values.map(v => `<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`).join('');

  window.renderDatedGroupExport = function (scope) {
    const entries = buildEntries(scope), groups = new Map();
    entries.filter(e => e.schoolName && e.groupName).forEach(e => groups.set(e.groupKey, e));
    return `<section class="linked-panel dated-group-export" data-report-scope="${scope}"><h3>Файл статистики групи</h3>
<p>Виберіть групу, предмет, параграф (або урок) і дату — отримаєте файл лише за цей урок: у шапці загальна інформація, нижче тільки ПІБ та оцінка.</p>
<label class="field-label" for="datedReportImport">Додати файли учнів (JSON)</label><input class="text-field" id="datedReportImport" type="file" accept=".json" multiple>
<label class="field-label" for="datedReportGroup">1. Заклад і група</label><select class="text-field" id="datedReportGroup"><option value="">Усі групи</option>${[...groups].map(([key, e]) => `<option value="${escapeHtml(key)}">${escapeHtml(formatDetails([e.schoolName, e.groupName]))}</option>`).join('')}</select>
<label class="field-label" for="datedReportSubject">2. Предмет</label><select class="text-field" id="datedReportSubject"></select>
<label class="field-label" for="datedReportVariant">3. Параграф / урок / комплект</label><select class="text-field" id="datedReportVariant"></select>
<label class="field-label" for="datedReportPeriod">4. Період</label><select class="text-field" id="datedReportPeriod"><option value="day">Один день (один урок)</option><option value="all">За весь час</option></select>
<label class="field-label" for="datedReportDate">Дата (Europe/Kyiv)</label><input class="text-field" id="datedReportDate" type="date" value="${day(new Date().toISOString())}" required>
<label class="field-label" for="datedReportFormat">Формат</label><select class="text-field" id="datedReportFormat"><option value="csv">CSV — шапка + ПІБ і оцінка</option><option value="json">JSON — дані для передачі й імпорту</option></select>
<button class="ghost-action full-action" id="downloadDatedReport" type="button">Завантажити файл</button><p id="datedReportNotice" role="status"></p></section>`;
  };

  window.bindDatedGroupExport = function (scope) {
    const $ = id => document.getElementById(id);
    const group = $('datedReportGroup'), subject = $('datedReportSubject'), variant = $('datedReportVariant'), period = $('datedReportPeriod'), date = $('datedReportDate'), notice = $('datedReportNotice');
    const all = buildEntries(scope);

    function refreshLists() {
      const g = all.filter(e => !group.value || e.groupKey === group.value);
      const prevSubject = subject.value;
      subject.innerHTML = opts(uniq(g, 'subject'), 'Усі предмети');
      if ([...subject.options].some(o => o.value === prevSubject)) subject.value = prevSubject;
      refreshVariants();
    }
    function refreshVariants() {
      const g = all.filter(e => (!group.value || e.groupKey === group.value) && (!subject.value || e.subject === subject.value));
      const prev = variant.value;
      variant.innerHTML = opts(uniq(g, 'variant'), 'Усі параграфи / уроки');
      if ([...variant.options].some(o => o.value === prev)) variant.value = prev;
    }
    group.addEventListener('change', refreshLists);
    subject.addEventListener('change', refreshVariants);
    period.addEventListener('change', () => date.disabled = period.value === 'all');
    refreshLists();

    $('datedReportImport').addEventListener('change', async event => {
      let count = 0, failed = 0;
      for (const file of event.target.files) {
        try {
          const data = JSON.parse(await file.text());
          if (!Array.isArray(data.sessions) || data.sessions.some(s => !s || typeof s.id !== 'string' || !Array.isArray(s.answers))) throw Error();
          const le = data.lessonEvents || [];
          if (!Array.isArray(le) || le.some(e => !e || typeof e.lessonId !== 'string' || typeof e.userKey !== 'string' || !['correct', 'wrong', 'hint'].includes(e.kind) || !day(e.at))) throw Error();
          importedGroupSessions.push(...data.sessions); importedLessonEvents.push(...le); count++;
        } catch { failed++; }
      }
      if (scope === 'python') window.renderPythonLessons('stats'); else renderStatsSection();
      const n = document.getElementById('datedReportNotice'); if (n) n.textContent = `Додано файлів: ${count}. Не вдалося прочитати: ${failed}.`;
    });

    const quote = v => { let s = String(v ?? ''); if (/^[=+@-]/.test(s)) s = "'" + s; return '"' + s.replace(/"/g, '""') + '"'; };
    const slug = v => String(v || '').normalize('NFKD').replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '').slice(0, 25);
    const download = (blob, name) => { const url = URL.createObjectURL(blob), a = document.createElement('a'); a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000); };

    $('downloadDatedReport').addEventListener('click', () => {
      const allTime = period.value === 'all', chosen = date.value;
      if (!allTime && !date.checkValidity()) { date.reportValidity(); return; }
      const picked = all.filter(e => (!group.value || e.groupKey === group.value) && (!subject.value || e.subject === subject.value) && (!variant.value || e.variant === variant.value) && (allTime || e.day === chosen));
      if (!picked.length) { notice.textContent = 'За вибраними умовами результатів немає. Змініть предмет, параграф або дату.'; return; }
      const dateText = allTime ? 'увесь час' : chosen.split('-').reverse().join('.');

      if ($('datedReportFormat').value === 'json') {
        const keep = e => (!group.value || getStatsGroupKey(e) === group.value);
        const selSessions = sessions(scope).filter(keep).filter(s => (!subject.value || s.subjectLabel === subject.value) && (!variant.value || s.variantLabel === variant.value))
          .map(s => ({ ...s, answers: (s.answers || []).filter(a => allTime || day(a.answeredAt) === chosen) })).filter(s => allTime || s.answers.length);
        const lessonEvents = scope === 'python' ? events().filter(e => keep(e) && (!subject.value || subject.value === PY_LESSONS_SUBJECT) && (!variant.value || lessonTitle(e.lessonId) === variant.value) && (allTime || day(e.at) === chosen)) : [];
        const payload = { schemaVersion: 4, exportedAt: new Date().toISOString(), period: allTime ? 'all' : chosen, timeZone: 'Europe/Kyiv', sessions: selSessions, lessonEvents };
        download(new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' }), `oceanua-${scope}-${allTime ? 'all' : chosen}.json`);
        notice.textContent = 'Файл JSON завантажено.'; return;
      }

      // Для кожного учня беремо ОСТАННЮ спробу в межах предмета і параграфа (повторні спроби не складаємо).
      const latest = new Map();
      for (const e of picked) {
        const k = JSON.stringify([e.userKey, e.subject, e.variant]);
        const cur = latest.get(k);
        if (!cur) { latest.set(k, { ...e }); continue; }
        if (e.day === cur.day) { cur.correct += e.correct; cur.wrong += e.wrong; if (e.at > cur.at) cur.at = e.at; }
        else if (e.day > cur.day) latest.set(k, { ...e });
      }
      const rowsData = [...latest.values()].sort((a, b) => a.userName.localeCompare(b.userName, 'uk') || a.subject.localeCompare(b.subject, 'uk') || a.variant.localeCompare(b.variant, 'uk', { numeric: true }));
      const first = picked[0];
      const fixedSubject = subject.value, fixedVariant = variant.value;
      const schoolText = group.value ? first.schoolName : uniq(picked, 'schoolName').join(', ');
      const groupText = group.value ? first.groupName : uniq(picked, 'groupName').join(', ');

      const rows = [
        ['Заклад', schoolText], ['Клас / група', groupText],
        ['Предмет', fixedSubject || 'усі предмети'], ['Параграф / урок', fixedVariant || 'усі'],
        ['Дата', dateText], ['Учнів', new Set(rowsData.map(r => r.userKey)).size], []
      ];
      const head = ['№', 'ПІБ']; if (!fixedSubject) head.push('Предмет'); if (!fixedVariant) head.push('Параграф / урок'); head.push('Оцінка / 12');
      rows.push(head);
      rowsData.forEach((r, i) => { const row = [i + 1, r.userName]; if (!fixedSubject) row.push(r.subject); if (!fixedVariant) row.push(r.variant); row.push(grade12(r)); rows.push(row); });

      const name = ['oceanua', slug(groupText), slug(fixedSubject), slug(fixedVariant), allTime ? 'all' : chosen].filter(Boolean).join('_') + '.csv';
      download(new Blob(['\uFEFF' + rows.map(r => r.map(quote).join(';')).join('\r\n')], { type: 'text/csv;charset=utf-8' }), name);
      notice.textContent = `Файл завантажено. Учнів у списку: ${new Set(rowsData.map(r => r.userKey)).size}.`;
    });
  };
}());
