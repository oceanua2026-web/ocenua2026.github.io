from pathlib import Path
p=Path('app.js');s=p.read_text(encoding='utf-8-sig')
helper='''function getNmtCardPresentation(card, session) {
  const response = getNmtSessionAnswer(session, card.number);
  if (card.type !== "single" || card.options?.length !== 4 || !session) return { card, response };
  const keys = card.options.map(option => option.key);
  let order = session.optionOrders?.[card.number];
  if (!Array.isArray(order) || order.length !== keys.length || new Set(order).size !== keys.length || !order.every(key => keys.includes(key))) {
    if (response) return { card, response }; // Preserve earlier answered cards.
    order = [...keys];
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    session.optionOrders = { ...(session.optionOrders || {}), [card.number]: order };
    const stats = getNmtStats();
    const saved = findNmtSession(stats, session.id);
    if (saved) { saved.optionOrders = session.optionOrders; saveNmtStats(stats); }
  }
  const displayKey = key => keys[order.indexOf(key)] || key;
  return {
    card: { ...card, options: order.map((key, i) => ({ ...card.options.find(option => option.key === key), key: keys[i] })), correctKey: displayKey(card.correctKey) },
    response: response ? { ...response, selectedKey: displayKey(response.selectedKey), correctKey: displayKey(response.correctKey) } : null
  };
}

'''
s=s.replace('function renderNmtCard(card, index, total, session) {','function renderNmtCard(card, index, total, session) {\n  const presentation = getNmtCardPresentation(card, session);\n  card = presentation.card;')
s=s.replace('function renderNmtCard(card, index, total, session) {',helper+'function renderNmtCard(card, index, total, session) {',1)
start=s.index('function renderNmtCard(card, index, total, session) {');end=s.index('function renderNmtCardMedia',start)
part=s[start:end].replace('const response = getNmtSessionAnswer(session, number);','const response = presentation.response;');s=s[:start]+part+s[end:]
s=s.replace('  const normalizedSelected = String(selectedKey || "");','''  const order = card.type === "single" ? session.optionOrders?.[card.number] : null;
  const keys = (card.options || []).map(option => option.key);
  const chosenIndex = keys.indexOf(String(selectedKey || ""));
  const normalizedSelected = String(order && chosenIndex >= 0 ? order[chosenIndex] : (selectedKey || ""));''')
s=s.replace('    selectedKey: normalizedSelected,','''    selectedKey: normalizedSelected,
    displaySelectedKey: String(selectedKey || ""),
    displayCorrectKey: order ? (keys[order.indexOf(card.correctKey)] || card.correctKey) : card.correctKey,''')
s=s.replace('escapeHtml(answer.selectedKey || "-")','escapeHtml(answer.displaySelectedKey || answer.selectedKey || "-")').replace('escapeHtml(answer.correctKey || "-")','escapeHtml(answer.displayCorrectKey || answer.correctKey || "-")')
p.write_text(s,encoding='utf-8')
