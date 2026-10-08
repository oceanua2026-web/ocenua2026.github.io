# OceanUA Instructions

Read `README.md` in this directory before editing this application. It is
the authoritative guide to the program structure and flashcard format.

- Keep application code, tools, data, and images inside OceanUA. The school
  folder is an import source only, not a runtime dependency.
- Use the user's latest prepared source edition. Grade 9 currently uses v21,
  superseding Work 4. Import prepared tests only; missing explanations must
  be authored as paraphrases, with content alignment checked beyond IDs.
  Import supplied test options and answer keys verbatim. Never generate
  distractors from unrelated Q&A when prepared tests exist. Do not create additional tests from source-only records unless the user
  requests that separately. Keep confirmed defective tests flagged and exclude
  them from scored decks until revision.
- Textbook flashcards require exactly four distinct answer options and one
  correct answer. Use `type: "single"`, a letter `correctKey`, and an
  expanded `answerText`. After any selection, highlight the correct option
  and show the expanded answer below. Preserve optional local images.
- Every application change, including flashcard data or images, must update
  the version and actual modification date/time in the "about" section of
  `app.js`, using Europe/Kyiv time. Follow README section 0 for formatting.
- Flashcard files are lazy-loaded from `dataFile` entries in
  `data/grade-flashcards.js`. Do not add grade scripts back to `index.html`.
  Update a changed card file's `dataFile` version, the catalog version in
  `index.html`, and the `app.js` version shown in About.
- Verify the affected behavior and update README when conventions change.
