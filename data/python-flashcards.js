(function () {
  const optionKeys = ["А", "Б", "В", "Г"];
  const sourceUrl = "https://docs.python.org/3/tutorial/";

  const makeCards = (subjectId, items) => items.map((item, index) => ({
    number: index + 1,
    externalId: `python-${subjectId}-${index + 1}`,
    type: "single",
    topic: item[0],
    questionHtml: `<p>${item[1]}</p>`,
    options: item[2].map((text, optionIndex) => ({
      key: optionKeys[optionIndex],
      text
    })),
    correctKey: optionKeys[item[3]]
  }));

  const decks = {
    python_basics: {
      label: "Python",
      variants: [
        {
          id: "python-basics",
          label: "Базовий тест Python",
          session: "20 флеш-карт",
          cards: [
            ["Виведення", "Яка команда виведе текст Hello на екран?", ["print(\"Hello\")", "show(\"Hello\")", "echo \"Hello\"", "write Hello"], 0],
            ["Змінні", "Який запис правильно створює змінну age зі значенням 15?", ["age = 15", "int age = 15", "age :=: 15", "set age 15"], 0],
            ["Типи даних", "Який тип має значення \"Python\"?", ["str", "int", "bool", "list"], 0],
            ["Числа", "Що поверне вираз 7 // 2?", ["3", "3.5", "4", "1"], 0],
            ["Булеві значення", "Яке булеве значення в Python записане правильно?", ["True", "true", "TRUE", "Yes"], 0],
            ["Списки", "Який запис створює список із трьох чисел?", ["[1, 2, 3]", "{1, 2, 3}", "(1; 2; 3)", "<1, 2, 3>"], 0],
            ["Індекси", "Який індекс має перший елемент списку в Python?", ["0", "1", "-1", "10"], 0],
            ["Довжина", "Яка функція повертає кількість елементів у списку?", ["len(items)", "count(items)", "size(items)", "length items"], 0],
            ["Словники", "Який запис створює словник?", ["{\"name\": \"Оля\"}", "[\"name\", \"Оля\"]", "(\"name\" = \"Оля\")", "\"name\": \"Оля\""], 0],
            ["Умови", "Яке ключове слово починає умову?", ["if", "when", "case", "check"], 0],
            ["Порівняння", "Який оператор перевіряє рівність двох значень?", ["==", "=", "!=", ">="], 0],
            ["Цикл for", "Що зробить цикл for i in range(3)?", ["пройде значення 0, 1, 2", "пройде значення 1, 2, 3", "створить три файли", "зупинить програму"], 0],
            ["Цикл while", "Коли виконується тіло циклу while?", ["поки умова істинна", "лише один раз", "коли умова хибна", "тільки після return"], 0],
            ["break", "Для чого використовують break у циклі?", ["щоб достроково вийти з циклу", "щоб створити змінну", "щоб імпортувати модуль", "щоб оголосити функцію"], 0],
            ["Функції", "Яке ключове слово оголошує функцію?", ["def", "func", "function", "method"], 0],
            ["return", "Що робить return у функції?", ["повертає результат і завершує виконання функції", "починає цикл", "створює список", "друкує текст завжди"], 0],
            ["Параметри", "Що таке параметр функції?", ["ім'я для значення, яке функція отримує під час виклику", "назва файлу Python", "помилка в коді", "тип циклу"], 0],
            ["Імпорт", "Який запис підключає модуль math?", ["import math", "include math", "using math", "load math()"], 0],
            ["Коментарі", "Який символ починає однорядковий коментар у Python?", ["#", "//", "--", "/*"], 0],
            ["Винятки", "Який блок обробляє помилку після try?", ["except", "catch", "error", "finally-only"], 0]
          ]
        }
      ]
    }
  };

  const subjects = Object.fromEntries(Object.entries(decks).map(([subjectId, deck]) => ([
    subjectId,
    {
      label: deck.label,
      sourceFolder: "data/flashcards",
      variants: deck.variants.map((variant) => ({
        ...variant,
        sourceUrl,
        cards: makeCards(subjectId, variant.cards)
      }))
    }
  ])));

  window.OCEANUA_NMT = window.OCEANUA_NMT || { years: {} };
  window.OCEANUA_NMT.years = window.OCEANUA_NMT.years || {};
  window.OCEANUA_NMT.years.python = {
    label: "Python",
    subjects
  };
}());
