(() => {
  const storageKey = "oceanua-language";
  const strings = {
    "STEM · Екосистема Оазис": "STEM · Oasis Ecosystem",
    "Ілюстрація оазису: річка, гори, дерева та лінії висот": "Oasis illustration: river, mountains, trees, and elevation lines",
    "Ти порушив екосистему. Ґрета йде за тобою.": "You broke the ecosystem. Greta is coming for you!",
    "Прототип: Уед-Уарзазат, Марокко · притік 1:500": "Prototype: Oued Ouarzazate, Morocco · inflow scale 1:500",
    "Уед-Уарзазат — сезонна річка на півдні Марокко, поблизу міста Уарзазат; вона належить до басейну річки Драа. У навчальній моделі притік задано з коефіцієнтом масштабування 1:500 — це розрахунковий прототип, а не точне відтворення фактичного водного режиму річки.": "Oued Ouarzazate is a seasonal river in southern Morocco, near the city of Ouarzazate, in the Drâa River basin. In this learning model, inflow is scaled at 1:500. This is a calculated prototype, not an exact reproduction of the river's actual water regime.",
    "Тест": "Test",
    "Довідка": "Guide",
    "Натисніть «Підготовка симуляції», щоб отримати завдання": "Select “Prepare simulation” to get a task",
    "Річне моделювання росту саду": "Annual garden growth simulation",
    "Притік: —": "Inflow: —",
    "Притік: ": "Inflow: ",
    "дерев": "trees",
    "Підготовка симуляції": "Prepare simulation",
    "Закрити": "Close",
    "Підготувати нову симуляцію": "Prepare a new simulation",
    "Запустити симуляцію": "Run simulation",
    "Симуляція триває…": "Simulation running…",
    "Параметри завдання буде створено випадково": "Task parameters will be generated at random",
    "Поточні витрати: 0 кредитів · гребля 0 · труба й енергія 0 · саджанці 0 кредитів.": "Current cost: 0 credits · dam 0 · pipe and energy 0 · seedlings 0 credits.",
    "Балів із 12": "Score out of 12",
    "Дерев": "Trees",
    "Сад ·": "Garden ·",
    "Культура": "Crop",
    "Фінікова пальма": "Date palm",
    "Цитрус": "Citrus",
    "Олива": "Olive",
    "Інжир": "Fig",
    "Гранат": "Pomegranate",
    "Зизифус": "Jujube",
    "Фісташка справжня (Pistacia vera)": "True pistachio (Pistacia vera)",
    "Атласький кедр (Cedrus atlantica)": "Atlas cedar (Cedrus atlantica)",
    "Акація раддіана (Vachellia raddiana)": "Acacia raddiana (Vachellia raddiana)",
    "Тамариск (Tamarix spp.)": "Tamarisk (Tamarix spp.)",
    "Ялівець фінікійський (Juniperus phoenicea)": "Phoenicean juniper (Juniperus phoenicea)",
    "Фісташка атласька (Pistacia atlantica)": "Atlas pistachio (Pistacia atlantica)",
    "Крапельний полив на дерево:": "Drip irrigation per tree:",
    "Крок садіння:": "Planting spacing:",
    "Саджанці:": "Seedlings:",
    "Посаджено дерев на": "Trees planted on",
    "Введіть власний розрахунок посадки за площею саду та відстанню між деревами. У першому місяці враховується вся задана кількість; дерева понад місткість саду зникнуть із наступного місяця.": "Enter your own planting calculation using the garden area and spacing between trees. The full number you enter is counted in the first month; trees above the garden's capacity disappear starting in the next month.",
    "Ваш розрахунок": "Your calculation",
    "Параметри саду": "Garden parameters",
    "Площа саду, призначена випадково": "Garden area assigned at random",
    "Культура, призначена випадково": "Crop assigned at random",
    "Коефіцієнт притоку, призначений випадково": "Inflow multiplier assigned at random",
    "Кількість дерев за розрахунком учня": "Tree count calculated by the student",
    "Водосховище та магістральна труба": "Reservoir and main pipe",
    "Довжина від водоспаду до греблі": "Distance from waterfall to dam",
    "Це довжина затопленої ділянки русла від водоспаду до греблі. За незмінного поперечного перерізу місткість чаші зростає прямо пропорційно цій довжині.": "This is the length of the flooded river channel from the waterfall to the dam. With a constant cross-section, reservoir capacity increases in direct proportion to this length.",
    "Довжина водосховища вздовж русла": "Reservoir length along the river channel",
    "Вартість довжини:": "Length cost:",
    "Висота греблі": "Dam height",
    "Підказка про висоту греблі": "Help about dam height",
    "У спрощеній моделі висота греблі дорівнює радіусу півкруглого поперечного перерізу чаші. Об’єм зростає пропорційно квадрату висоти.": "In this simplified model, dam height is the radius of the reservoir's semicircular cross-section. Volume increases with the square of the height.",
    "Висота греблі в метрах": "Dam height in metres",
    "Вартість висоти:": "Height cost:",
    "Постійний скид у річку": "Constant river release",
    "Підказка про постійний скид": "Help about constant release",
    "Це об’єм води, який щомісяця залишається в річці нижче греблі. Учень може обрати й 0 м³/міс.; за нульового скиду вода нижче греблі не підтримується.": "This is the volume of water released each month downstream of the dam. A student may choose 0 m³/month; with zero release, no water is maintained downstream.",
    "Постійний місячний скид води в річку": "Constant monthly water release into the river",
    "Точне значення, м³/міс.": "Exact value, m³/month",
    "Точне значення постійного скиду": "Exact constant release value",
    "Вибирайте ціле число; стрілки ←/→ змінюють скид на 1 м³/міс. Дробова частина відкидається. Відхилення скиду до 1 000 м³/міс. не знижує оцінку. Перелив наведено в балансі води для довідки; він не впливає на оцінку.": "Choose a whole number; the ←/→ keys change the release by 1 m³/month. Fractions are discarded. A release within 1,000 m³/month of the target does not lower the score. Overflow is shown in the water balance for reference and does not affect the score.",
    "Підказка про довжину водосховища": "Help about reservoir length",
    "Діаметр труби": "Pipe diameter",
    "Внутрішній діаметр труби": "Pipe inner diameter",
    "Підказка про діаметр труби": "Help about pipe diameter",
    "Скористайтеся формулою з методики розрахунку: за витратою та допустимою швидкістю потоку визначте площу перерізу, а потім внутрішній діаметр труби.": "Use the formula in the calculation guide: find the cross-sectional area from the flow rate and permitted flow speed, then calculate the pipe's inner diameter.",
    "Внутрішній діаметр магістральної труби": "Main pipe inner diameter",
    "Межа шкали:": "Scale maximum:",
    "Вартість на 100 м:": "Cost per 100 m:",
    "Вартість:": "Cost:",
    "Насос та енергія": "Pump and energy",
    "Насос та енергія": "Pump and energy",
    "Режим залежить від ємності акумулятора": "Operating mode depends on battery capacity",
    "День і ніч тривають по 12 годин. З акумулятором насос може працювати вночі; фактична тривалість залежить від доступної енергії панелей і ємності акумулятора.": "Day and night each last 12 hours. With a battery, the pump can also run at night; actual operating time depends on available solar energy and battery capacity.",
    "Потужність насоса": "Pump power",
    "Підказка про потужність насоса": "Help about pump power",
    "Без акумулятора насос працює умовні 12 годин удень; з акумулятором може працювати також уночі. Максимум 4,8 кВт — удвічі більше за розрахункову потребу саду площею 10 га з найбільшим водоспоживанням.": "Without a battery, the pump operates for 12 hours during the day; with a battery, it can also run at night. The 4.8 kW maximum is twice the calculated need of a 10 ha garden with the highest water demand.",
    "Потужність насоса в кіловатах": "Pump power in kilowatts",
    "Потужність сонячних панелей": "Solar panel capacity",
    "Підказка про сонячні панелі": "Help about solar panels",
    "Потужність панелей вимірюється у кВт. Верхня межа приблизно у 2,3 раза перевищує максимальну потужність насоса; рекомендована потужність панелей — 2× потужності насоса.": "Panel capacity is measured in kW. The upper limit is about 2.3 times the maximum pump power; the recommended panel capacity is twice the pump power.",
    "Потужність сонячних панелей у кіловатах": "Solar panel capacity in kilowatts",
    "Ємність акумулятора": "Battery capacity",
    "Підказка про акумулятор": "Help about the battery",
    "Ємність вимірюється у кВт·год. Верхня межа дорівнює 15 годинам роботи насоса на максимальній потужності; рекомендована ємність — 12× потужності насоса.": "Capacity is measured in kWh. The upper limit equals 15 hours of pump operation at maximum power; the recommended capacity is 12 times the pump power.",
    "Ємність акумулятора в кіловат-годинах": "Battery capacity in kilowatt-hours",
    "Вартість потужності:": "Capacity cost:",
    "Вартість ємності:": "Battery cost:",
    "Підказка про кількість дерев": "Help about tree count",
    "Кредити за вибраними параметрами: 0": "Credits for selected parameters: 0",
    "Покрокова методика розрахунку": "Step-by-step calculation guide",
    "Закрити методику": "Close the guide",
    "Коефіцієнт опадів:": "Rainfall multiplier:",
    "від 1 до 2 випадково обирається під час підготовки даних; він однаково змінює кожен місячний притік. Множник у поточному завданні: ×": "A value from 1 to 2 is selected at random when the task is prepared; it scales every monthly inflow equally. Multiplier for this task: ×",
    "Порядок роботи:": "How to use the simulation:",
    "спочатку натисніть «Підготовка симуляції», щоб створити завдання. Потім розрахуйте всі параметри та внесіть значення у відповідні поля на екрані. Після цього натисніть «Запустити симуляцію».": "First select “Prepare simulation” to create a task. Calculate all parameters and enter them in the matching fields on the screen. Then select “Run simulation”.",
    "Для демонстрації та тесту:": "For a demonstration or test:",
    "Орієнтир для крапельного поливу:": "Drip irrigation reference:",
    "добові норми в моделі відповідають спекотному сезону. База для фінікової пальми — 265 л/дерево/добу, приблизно 0,33 від орієнтира 800 л за звичайного поливу. Норми нових видів оцінено пропорційно за відносними коефіцієнтами потреби у воді та відстанню між деревами. Це навчальні оцінки, а не готові агрономічні рекомендації.": "The daily rates in this model represent the hot season. The date palm baseline is 265 L/tree/day, about 0.33 of the 800 L reference for conventional irrigation. New species rates are estimated proportionally from relative water-demand coefficients and tree spacing. These are educational estimates, not ready-to-use agronomic recommendations.",
    "натисніть «Тест», а потім «Запустити симуляцію». Кнопка «Тест» щоразу завантажує той самий набір параметрів.": "Select “Test”, then “Run simulation”. The Test button always loads the same set of parameters.",
    "Розрахуйте посадку.": "Calculate the planting layout.",
    "За квадратної схеми:": "For a square planting grid:",
    "Nмісць = ⌊площа (га) × 10 000 ÷ крок²⌋": "Nslots = ⌊area (ha) × 10,000 ÷ spacing²⌋",
    "Наприклад, 10 га та крок пальми 10 м: 100 000 ÷ 100 = 1 000 пальм. Це гранична місткість саду; у полі «Посаджено дерев» укажіть власну кількість.": "For example, 10 ha with date palms spaced 10 m apart: 100,000 ÷ 100 = 1,000 trees. This is the garden's maximum capacity; enter your own number in “Trees planted”.",
    "Визначте потребу саду у воді.": "Calculate the garden's water demand.",
    "Wдень = N × л/дерево/добу ÷ 1 000": "Wday = N × L/tree/day ÷ 1,000",
    "Wмісяць = Wдень × 30; Wрік = Wмісяць × 12": "Wmonth = Wday × 30; Wyear = Wmonth × 12",
    "Це модель спекотного сезону: на цьому рівні опади та випаровування не віднімаються.": "This models a hot season; rainfall and evaporation are not subtracted at this level.",
    "Визначте притік і постійний скид.": "Calculate inflow and constant release.",
    "Площу, культуру та коефіцієнт опадів випадково задає кнопка підготовки. Кожен місячний притік дорівнює табличному профілю, помноженому на випадковий коефіцієнт. Мінімальний скид Rmin — найменший місячний притік. Для повного поливу та однакового запасу на початку кожного року розрахунковий постійний скид:": "The Prepare button assigns the garden area, crop, and rainfall multiplier at random. Each monthly inflow equals the table value multiplied by the random multiplier. The minimum release, Rmin, is the lowest monthly inflow. For full irrigation and the same storage at the start of each year, calculate the constant release as:",
    "R = (Σ притоків за 12 міс. − Wрік) ÷ 12": "R = (Σ inflows over 12 months − Wyear) ÷ 12",
    "Якщо R нижче Rmin, за такого обов’язкового скиду сад не можна повністю поливати.": "If R is below Rmin, the required release makes it impossible to fully irrigate the garden.",
    "Врахуйте екологічний резерв чаші.": "Allow for the reservoir's ecological reserve.",
    "Це недоторканний залишковий об’єм води, рекомендований для збереження водної екосистеми водосховища. Як навчальний орієнтир прийміть резерв, що дорівнює притоку річки за найпосушливіший місяць:": "This is the minimum water volume recommended to preserve the reservoir's aquatic ecosystem. For this learning model, use a reserve equal to the river's inflow in its driest month:",
    "Sекол = min(притікi)": "Seco = min(inflowᵢ)",
    "Це спрощене припущення, а не універсальна гідрологічна норма. З екологічного погляду чашу не слід спорожнювати повністю — залишайте цей запас води. Комп’ютерний орієнтир враховує резерв під час добору чаші. Симулятор не обмежує водозабір у проєкті учня: можна помилитися, а фактичний залишок води буде видно у звіті.": "This is a simplified assumption, not a universal hydrological standard. The reservoir should not be completely drained; keep this water reserve. The computer benchmark accounts for the reserve when sizing the reservoir. The simulation does not restrict student water use, so mistakes are possible; the actual remaining volume appears in the report.",
    "Розрахуйте сезонний запас води.": "Calculate seasonal water storage.",
    "Для кожного місяця обчисліть": "For each month, calculate",
    "Δi = притікi − R − Wмісяць; Pk = Δ1 + … + Δk": "Δi = inflowᵢ − R − Wmonth; Pk = Δ1 + … + Δk",
    "Потрібний запас на 1 січня з урахуванням екологічного резерву:": "Required storage on January 1, including the ecological reserve:",
    "Sсіч = Sекол + max(0, −min(P0…P12))": "SJan = Seco + max(0, −min(P0…P12))",
    "Необхідна місткість чаші без переливу:": "Required reservoir capacity without overflow:",
    "Cпотр = Sекол + max(P0…P12) − min(P0…P12)": "Cneeded = Seco + max(P0…P12) − min(P0…P12)",
    "Комп’ютер переносить Sсіч із залишку за грудень попереднього року.": "The computer benchmark carries SJan forward from the previous December's remaining storage.",
    "Доберіть довжину та висоту греблі.": "Choose the dam length and height.",
    "Для кожної висоти h від 1 до 10 м визначте потрібну довжину затопленого русла, щоб умістити розрахований сезонний запас. Крок довжини в симуляторі — 10 м. Спочатку дайте відповідь на запитання про формулу об’єму чаші:": "For each height h from 1 to 10 m, find the flooded channel length needed to hold the calculated seasonal storage. The simulation changes length in 10 m steps. First answer the question about the reservoir volume formula:",
    "Як розрахувати об’єм чаші з півкруглим перерізом і довжиною L?": "How do you calculate the volume of a reservoir with a semicircular cross-section and length L?",
    "Чотири варіанти формули об’єму чаші": "Four answer choices for the reservoir volume formula",
    "Якщо Lmin ≤ 2 000 м, перевірте вартість": "If Lmin ≤ 2,000 m, calculate the cost using",
    "Кгреблі = L × 1 + h × 100 кредитів": "Cdam = L × 1 + h × 100 credits",
    "Порівняйте варіанти: комп’ютер спочатку зберігає найбільший урожай, а серед варіантів з однаковим урожаєм обирає дешевшу греблю; за однакової вартості надає перевагу варіанту з меншою площею затоплення дерев. Якщо жодна чаша не вміщує Cпотр, режим без переливу неможливий у межах ігрової довжини.": "Compare the options: the computer first maximizes the harvest, then chooses the cheaper dam when harvests are equal. If costs are also equal, it prefers the option that floods fewer trees. If no reservoir can hold Cneeded, a no-overflow design is not possible within the simulation's maximum length.",
    "Розрахуйте насос і магістральну трубу.": "Calculate the pump and main pipe.",
    "У комп’ютерному варіанті насос працює 24 години на добу з акумулятором.": "In the computer benchmark, the pump runs 24 hours a day with a battery.",
    "Pнасоса ≈ Qнасоса × 0,0908 (кВт); 1 кВт ≈ 11 013 л/год": "Ppump ≈ Qpump × 0.0908 (kW); 1 kW ≈ 11,013 L/hour",
    "Wдень": "Wday",
    "— загальний об’єм води, потрібний саду за добу, у м³. Обчисліть його за кількістю дерев і добовою нормою на одне дерево:": "— the total water volume the garden needs each day, in m³. Calculate it from the number of trees and the daily water requirement per tree:",
    "Wдень = кількість дерев × л/дерево/добу ÷ 1 000": "Wday = number of trees × L/tree/day ÷ 1,000",
    "Для труби використовуйте Q у м³/с і швидкість v = 1,5 м/с. Щоб знайти Q, поділіть добовий об’єм Wдень на кількість годин роботи насоса за день, помножену на 3 600 секунд за годину:": "For the pipe, use Q in m³/s and a flow speed of v = 1.5 m/s. To find Q, divide the daily volume Wday by the pump's operating hours per day multiplied by 3,600 seconds per hour:",
    "Q = Wдень ÷ (години роботи насоса за день × 3 600)": "Q = Wday ÷ (pump operating hours per day × 3,600)",
    "Так добовий об’єм переводиться у витрату за секунду; з акумулятором насос може працювати 24 години, без нього — 12 годин удень. Формулу діаметра та докладне пояснення знайдете у картці:": "This converts the daily volume to a flow rate per second. With a battery, the pump can run for 24 hours; without one, it runs for 12 daytime hours. The pipe diameter formula and a detailed explanation are in the learning card:",
    "Як знайти внутрішній діаметр D труби за витратою Q і швидкістю потоку v?": "How do you find a pipe's inner diameter D from flow rate Q and flow speed v?",
    "Чотири варіанти формули діаметра труби": "Four answer choices for the pipe diameter formula",
    "Поперечний переріз чаші — півкруг радіуса h, тому його площа A = π × h² ÷ 2. Помножте площу на довжину водосховища L: V = A × L. Підставляйте h і L у метрах; об’єм отримаєте в м³.": "The reservoir cross-section is a semicircle with radius h, so its area is A = π × h² ÷ 2. Multiply the area by reservoir length L: V = A × L. Enter h and L in metres; the volume will be in m³.",
    "Витрата пов’язана з площею круглого перерізу формулою Q = A × v, де A = π × D² ÷ 4. Виразіть діаметр: D = √(4Q ÷ (π × v)) = 2 × √(Q ÷ (π × v)). Підставляйте Q у м³/с, v — у м/с: спочатку D отримаєте в метрах, потім помножте на 1 000, щоб отримати міліметри.": "Flow rate and circular cross-sectional area are related by Q = A × v, where A = π × D² ÷ 4. Rearrange for diameter: D = √(4Q ÷ (π × v)) = 2 × √(Q ÷ (π × v)). Use Q in m³/s and v in m/s: D is first calculated in metres, then multiply by 1,000 to convert it to millimetres.",
    "Спочатку насос забирає min(запас у чаші + місячний притік, межа обладнання), де межа обладнання — менше зі значень продуктивності насоса та пропускної здатності труби. Потім фактичний скид нижче греблі дорівнює min(залишок води після поливу, заданий скид). Частка потреби живих дерев, покрита поливом, визначає їхнє виживання; за нестачі води кількість дерев зменшується пропорційно, а подальша потреба рахується за тими, що вижили.": "The pump first draws the smaller of (reservoir storage + monthly inflow) and the equipment limit; the equipment limit is the lower of pump capacity and pipe capacity. The actual downstream release is then the smaller of the water remaining after irrigation and the selected release. The share of living trees' water demand met by irrigation determines their survival. If water is insufficient, the number of trees decreases proportionally, and later demand is recalculated for the survivors.",
    "Доберіть сонячні панелі й акумулятор.": "Choose solar panels and a battery.",
    "Укажіть потужність панелей і ємність акумулятора. День і ніч у моделі тривають по 12 годин; перевірте, як вибрані значення впливають на полив і результат річної симуляції.": "Enter the panel capacity and battery size. Day and night each last 12 hours in this model. See how your choices affect irrigation and the annual simulation result.",
    "Перевірте результат симуляції.": "Review the simulation results.",
    "Перегляньте щомісячний звіт, залишок води, кількість живих дерев та підсумкові бали. Запропоновану систему кредитів та оцінювання наведено наприкінці цього довідника.": "Review the monthly report, remaining water, living tree count, and final score. The proposed credit and scoring system appears at the end of this guide.",
    "Контрольний приклад:": "Worked example:",
    "10 га фінікових пальм із кроком 10 м — 1 000 дерев; крапельний полив — 265 м³/добу, 7 950 м³/місяць і 95 400 м³/рік. Варіант комп’ютера з екологічним резервом: гребля 560 м × 10 м, насос 1,1 кВт, труба 53 мм, панелі 2,2 кВт, акумулятор 13,5 кВт·год.": "10 ha of date palms spaced 10 m apart gives 1,000 trees. Drip irrigation uses 265 m³/day, 7,950 m³/month, and 95,400 m³/year. Computer benchmark with an ecological reserve: a 560 m × 10 m dam, 1.1 kW pump, 53 mm pipe, 2.2 kW solar panels, and a 13.5 kWh battery.",
    "Запропонована система кредитів та оцінювання": "Proposed credit and scoring system",
    "Стаття": "Item",
    "Умовна вартість": "Estimated cost",
    "Бали": "Points",
    "Довжина греблі": "Dam length",
    "100 кредитів за 100 м": "100 credits per 100 m",
    "Висота греблі": "Dam height",
    "100 кредитів за 1 м": "100 credits per 1 m",
    "враховується в економічному вирахуванні": "included in the economic deduction",
    "Достатня місткість греблі": "Adequate dam capacity",
    "Порівняння з об’ємом комп’ютерного орієнтира": "Compared with the computer benchmark volume",
    "Збереження дерев від затоплення": "Trees preserved from flooding",
    "Повний бал, якщо затоплено не більше, ніж у комп’ютерному орієнтирі": "Full point if no more trees are flooded than in the computer benchmark",
    "Насос": "Pump",
    "100 кредитів за 1 кВт": "100 credits per 1 kW",
    "до 0,75 за достатню подачу": "up to 0.75 for sufficient flow",
    "Магістральна труба, 100 м": "Main pipe, 100 m",
    "5 кредитів за 1 мм діаметра": "5 credits per 1 mm of diameter",
    "до 0,75 за достатній діаметр": "up to 0.75 for sufficient diameter",
    "Сонячні панелі": "Solar panels",
    "до 0,75 за достатню потужність": "up to 0.75 for sufficient capacity",
    "Акумулятор": "Battery",
    "10 кредитів за 1 кВт·год": "10 credits per 1 kWh",
    "кредитів (5 кредитів/мм).": "credits (5 credits/mm).",
    "кредитів · 1 кредит/м.": "credits · 1 credit/m.",
    "кредитів · 10 кредитів/кВт·год.": "credits · 10 credits/kWh.",
    "кредитів · 100 кредитів/кВт.": "credits · 100 credits/kW.",
    "кредитів · 100 кредитів/м.": "credits · 100 credits/m.",
    "до 0,75 за достатню ємність": "up to 0.75 for sufficient capacity",
    "Саджанці": "Seedlings",
    "1 кредит за дерево": "1 credit per tree",
    "включено до собівартості": "included in the unit cost",
    "Кількість вирощених дерев": "Number of trees grown",
    "6 × вирощені дерева ÷ комп’ютерний орієнтир; перевитрата кредитів не впливає на цей бал": "6 × trees grown ÷ computer benchmark; excess credits do not affect this score",
    "до 6": "up to 6",
    "Скид у річку": "River release",
    "Бали за збільшення скиду до безпечного максимуму": "Points for increasing release up to the safe maximum",
    "до 1": "up to 1",
    "Штраф за скид": "Release penalty",
    "Якщо постійний скид відрізняється від безпечного максимуму більш ніж на 1 000 м³/міс., знімається 1 бал": "A 1-point deduction applies if constant release differs from the safe maximum by more than 1,000 m³/month",
    "Базова сума": "Base score",
    "Урожай — 6, обладнання — 5, додатковий скид — 1": "Harvest — 6, equipment — 5, additional release — 1",
    "до 12": "up to 12",
    "Перевитрата кредитів": "Excess credits",
    "Кредити понад комп’ютерний орієнтир віднімаються після нарахування балів": "Credits above the computer benchmark are deducted after points are awarded",
    "штраф": "penalty",
    "Спочатку нараховуються бали за фактично вирощені дерева та достатню потужність обладнання. Потім перевитрата кредитів переводиться в еквівалент дерев і окремим штрафом віднімається від базової суми; вона не зменшує 6 балів за повний урожай. Фактична кількість живих дерев при цьому не змінюється. Гребля отримує до 1 бала за достатню місткість і до 1 бала за збереження дерев. За насос, трубу, панелі й акумулятор нараховується по 0,75 бала. Максимальний безпечний скид і залишок на початок січня розраховуються за повторюваним річним балансом. Якщо постійний скид відрізняється від безпечного максимуму більш ніж на 1 000 м³/міс., знімається 1 бал. Перелив наведено в щомісячному водному балансі для довідки; за нього не знімаються бали незалежно від об’єму.": "Points are first awarded for trees actually grown and adequate equipment capacity. Excess credits are then converted into an equivalent number of trees and deducted separately from the base score; this does not reduce the 6 points for a full harvest or change the actual number of surviving trees. The dam can earn up to 1 point for adequate capacity and up to 1 point for preserving trees. The pump, pipe, solar panels, and battery can each earn 0.75 points. The maximum safe release and January starting storage use a repeating annual water balance. A 1-point deduction applies if constant release differs from the safe maximum by more than 1,000 m³/month. Overflow is shown in the monthly water balance for reference and never reduces the score.",
    "Підсумок року": "Year summary",
    "Порівняння з комп’ютерним орієнтиром": "Compared with the computer benchmark",
    "Кредити проєкту": "Project credits",
    "Бали за категоріями": "Points by category",
    "Стаття витрат": "Cost item",
    "Проєкт учня": "Student project",
    "Комп’ютерний орієнтир": "Computer benchmark",
    "Різниця": "Difference",
    "Собівартість одного вирощеного дерева": "Unit cost per tree grown",
    "кредиту/дерево": "credits/tree",
    "Категорія": "Category",
    "Економічний штраф": "Economic penalty",
    "Скид": "Release",
    "Усього відрахувань": "Total deductions",
    "Підсумкова оцінка": "Final score",
    "Параметр": "Parameter",
    "Місяць": "Month",
    "Притік": "Inflow",
    "річки, м³": "river, m³",
    "Скид": "Release",
    "у річку, м³": "to river, m³",
    "Подача обладнання": "Equipment supply",
    "/ факт, м³": "/ actual, m³",
    "Залишок": "Storage",
    "у чаші, м³": "in reservoir, m³",
    "Дерева:": "Trees:",
    "початок → кінець": "start → end",
    "Втрати дерев, шт.": "Tree losses",
    "Брак": "Insufficient",
    "поливу": "irrigation",
    "Понад місткість": "Above garden",
    "саду": "capacity",
    "У заплаві": "In river floodplain",
    "Втрати через нестачу доступної води, потужності насоса чи енергії або пропускної здатності труби": "Losses caused by insufficient available water, pump or solar power, or pipe capacity",
    "Дерева, посаджені понад розрахункову місткість ділянки за вибраного кроку садіння": "Trees planted above the garden's calculated capacity for the selected spacing",
    "Втрати дерев у заплаві через пересихання русла або затоплення під час спорудження греблі": "Floodplain tree losses caused by a dry river channel or flooding during dam construction",
    "Посадка дерев на ": "Trees planted on ",
    "Максимальна місячна подача насоса": "Maximum monthly pump supply",
    "Місячна пропускна здатність труби": "Monthly pipe capacity",
    "Довжина водосховища": "Reservoir length",
    "Дерев у зоні затоплення греблею": "Trees in the dam's flooded area",
    "Об’єм чаші": "Reservoir volume",
    "Запас на початок січня з грудня минулого року": "Storage carried into January from the previous December",
    "чаша менша за розрахунковий залишок": "reservoir is smaller than the calculated carryover",
    "грудневий залишок орієнтира": "benchmark December carryover",
    "Залишок після грудня цього року": "Storage remaining after this December",
    "стійкого перенесення немає": "no stable carryover is possible",
    "перенесення на січень": "carried into January",
    "Робота насоса": "Pump operating time",
    "Внутрішній діаметр труби": "Pipe inner diameter",
    "мінімум ": "minimum ",
    "Потужність насоса / подача": "Pump power / flow",
    "Дерев наприкінці року": "Trees at year end",
    "Симуляцію використано · підготуйте нове випадкове завдання": "This simulation has been used · prepare a new random task",
    "Дані готові · очікує запуску · 12 місяців": "Data ready · waiting to start · 12 months",
    "Очікує запуску": "Waiting to start",
    "Підготуйте нове випадкове завдання перед наступною симуляцією.": "Prepare a new random task before the next simulation.",
    "Спочатку натисніть «Підготовка симуляції»": "First select “Prepare simulation”",
    "Не знайдено підготовлений комп’ютерний розрахунок. Натисніть «Підготовка симуляції» ще раз.": "No prepared computer calculation was found. Select “Prepare simulation” again.",
    "Введіть цілу кількість дерев": "Enter a whole number of trees",
    "Рік завершено · залишилося ": "Year complete · ",
    " дерев": " trees remaining",
    "Посаджено ": "Trees planted: ",
    " · наприкінці року залишилося ": " · remaining at year end: ",
    " · стійкого орієнтира без переливу не знайдено": " · no stable no-overflow benchmark was found",
    "Підготуйте дані": "Prepare the data",
    "Комп’ютерні дані тесту готові. ": "Computer test data ready. ",
    "Дані готові: ": "Data ready: ",
    " га · ": " ha · ",
    " · опади ×": " · rainfall ×",
    ". Залишок за грудень оптимального розрахунку, перенесений на 1 січня: ": ". Optimized December carryover, transferred to January 1: ",
    " м³.": " m³.",
    " Можна змінити параметри й натиснути «Запустити симуляцію».": " You can change the parameters and select “Run simulation”.",
    "Параметри завдання буде випадково підготовлено після натискання кнопки.": "Task parameters will be generated at random when you select the button.",
    "Поточні витрати: ": "Current cost: ",
    " кредитів · гребля ": " credits · dam ",
    " · труба й енергія ": " · pipe and energy ",
    " · саджанці ": " · seedlings ",
    "Насос: ": "Pump: ",
    " год/добу за доступної енергії": " h/day with available energy",
    "мало води": "low water",
    "насос/енергія": "pump/energy",
    "труба": "pipe",
    "суха річка": "dry river",
    "У чаші не вистачило води": "Not enough water in the reservoir",
    "Обмеження насоса або енергії": "Pump or energy limitation",
    "Труба обмежила подачу": "Pipe limited the water supply",
    "Під час спорудження греблі загинуло ": "During dam construction, ",
    " пойменних дерев": " floodplain trees died",
    "Через нульовий фактичний скид загинуло ": "With zero actual release, ",
    " дерев заплави": " river floodplain trees died",
    " · на початок ": " · starting with ",
    " дерев · 12 місяців": " trees · 12 months",
    " · посаджено ": " · planted: ",
    "Тест підготовлено · комп’ютерні параметри завантажено · очікує запуску": "Test ready · computer parameters loaded · waiting to start",
    "Не вдалося підготувати комп’ютерні параметри тесту.": "Could not prepare the computer test parameters.",
    "Січ": "Jan",
    "Лют": "Feb",
    "Бер": "Mar",
    "Кві": "Apr",
    "Тра": "May",
    "Чер": "Jun",
    "Лип": "Jul",
    "Сер": "Aug",
    "Вер": "Sep",
    "Жов": "Oct",
    "Лис": "Nov",
    "Гру": "Dec",
    "1 міс. · січ": "Month 1 · Jan",
    "Комп’ютерні дані тесту готові.": "Computer test data ready.",
    "Залишок після грудня попереднього року за оптимальним комп’ютерним розрахунком": "Storage carried over from the previous December in the optimized computer calculation",
    "Притік річки та кількість дерев за місяцями": "Monthly river inflow and tree count",
    "Перебіг симуляції": "Simulation progress",
    "Відкрити довідник і методику розрахунку": "Open the guide and calculation method",
    "Підготувати симуляцію з комп’ютерними параметрами тесту": "Prepare a simulation with the computer test parameters",
    "Підготувати комп’ютерні дані тесту; симуляція запускається окремою кнопкою": "Prepare computer test data; start the simulation with the separate button",
    "Висота": "Height",
    "Площа": "Area",
    "кредитів": "credits",
    "га": "ha",
    "дерев": "trees",
    "м": "m",
    "мм": "mm",
    "л/добу": "L/day",
    "кВт": "kW",
    "кВт·год": "kWh",
    "м³/міс.": "m³/month",
    "Множник у поточному завданні: ×": "Multiplier for this task: ×",
    "Оберіть": "Select",
    "Ти порушив екосистему. Ґрета йде за тобою.": "You broke the ecosystem. Greta is coming for you!"
  };
  const reverse = Object.fromEntries(Object.entries(strings).map(([uk, en]) => [en, uk]));
  const dynamicPatterns = [
    {
      uk: /^Притік: (.*)$/,
      en: /^Inflow: (.*)$/,
      toEn: (m) => `Inflow: ${m[1]}`,
      toUk: (m) => `Притік: ${m[1]}`
    },
    {
      uk: /^Чаша на 1 січ\.: (.*)$/,
      en: /^Reservoir on Jan 1: (.*)$/,
      toEn: (m) => `Reservoir on Jan 1: ${m[1]}`,
      toUk: (m) => `Чаша на 1 січ.: ${m[1]}`
    },
    {
      uk: /^(Дані готові: |Комп’ютерні дані тесту готові\. )(\d+) га · (.+) · опади ×([\d,.]+)\. Залишок за грудень оптимального розрахунку, перенесений на 1 січня: ([\d\s\u00a0,]+) м³\.( Можна змінити параметри й натиснути «Запустити симуляцію»\.)?$/,
      en: /^(Data ready: |Computer test data ready\. )(\d+) ha · (.+) · rainfall ×([\d.]+)\. Optimized December carryover, transferred to January 1: ([\d, ]+) m³\.( You can change the parameters and select “Run simulation”\.)?$/,
      toEn: (m) => `${m[1].startsWith("Комп’ютер") ? "Computer test data ready. " : "Data ready: "}${m[2]} ha · ${translateValue(m[3], "en")} · rainfall ×${m[4].replace(",", ".")}. Optimized December carryover, transferred to January 1: ${numberToEnglish(m[5])} m³.${m[6] ? " You can change the parameters and select “Run simulation”." : ""}`,
      toUk: (m) => `${m[1].startsWith("Computer") ? "Комп’ютерні дані тесту готові. " : "Дані готові: "}${m[2]} га · ${translateValue(m[3], "uk")} · опади ×${m[4].replace(".", ",")}. Залишок за грудень оптимального розрахунку, перенесений на 1 січня: ${numberToUkrainian(m[5])} м³.${m[6] ? " Можна змінити параметри й натиснути «Запустити симуляцію»." : ""}`
    },
    {
      uk: /^Поточні витрати: ([\d\s\u00a0,]+) кредитів · гребля ([\d\s\u00a0,]+) · труба й енергія ([\d\s\u00a0,]+) · саджанці ([\d\s\u00a0,]+) кредитів\.$/,
      en: /^Current cost: ([\d, ]+) credits · dam ([\d, ]+) · pipe and energy ([\d, ]+) · seedlings ([\d, ]+) credits\.$/,
      toEn: (m) => `Current cost: ${numberToEnglish(m[1])} credits · dam ${numberToEnglish(m[2])} · pipe and energy ${numberToEnglish(m[3])} · seedlings ${numberToEnglish(m[4])} credits.`,
      toUk: (m) => `Поточні витрати: ${numberToUkrainian(m[1])} кредитів · гребля ${numberToUkrainian(m[2])} · труба й енергія ${numberToUkrainian(m[3])} · саджанці ${numberToUkrainian(m[4])} кредитів.`
    },
    {
      uk: /^Насос: ([\d,.]+) год\/добу за доступної енергії$/,
      en: /^Pump: ([\d.]+) h\/day with available energy$/,
      toEn: (m) => `Pump: ${m[1].replace(",", ".")} h/day with available energy`,
      toUk: (m) => `Насос: ${m[1].replace(".", ",")} год/добу за доступної енергії`
    },
    {
      uk: /^Посаджено ([\d\s\u00a0,]+) · наприкінці року залишилося ([\d\s\u00a0,]+) дерев( · стійкого орієнтира без переливу не знайдено)?$/,
      en: /^Trees planted: ([\d, ]+) · remaining at year end: ([\d, ]+) trees( · no stable no-overflow benchmark was found)?$/,
      toEn: (m) => `Trees planted: ${numberToEnglish(m[1])} · remaining at year end: ${numberToEnglish(m[2])} trees${m[3] ? " · no stable no-overflow benchmark was found" : ""}`,
      toUk: (m) => `Посаджено ${numberToUkrainian(m[1])} · наприкінці року залишилося ${numberToUkrainian(m[2])} дерев${m[3] ? " · стійкого орієнтира без переливу не знайдено" : ""}`
    },
    {
      uk: /^Рік завершено · залишилося ([\d\s\u00a0,]+) дерев$/,
      en: /^Year complete · ([\d, ]+) trees remaining$/,
      toEn: (m) => `Year complete · ${numberToEnglish(m[1])} trees remaining`,
      toUk: (m) => `Рік завершено · залишилося ${numberToUkrainian(m[1])} дерев`
    },
    {
      uk: /^(.+) · на початок ([\d\s\u00a0,]+) дерев$/,
      en: /^(.+) · starting with ([\d, ]+) trees$/,
      toEn: (m) => `${translateValue(m[1], "en")} · starting with ${numberToEnglish(m[2])} trees`,
      toUk: (m) => `${translateValue(m[1], "uk")} · на початок ${numberToUkrainian(m[2])} дерев`
    },
    {
      uk: /^(.+) · посаджено ([\d\s\u00a0,]+) · на початок ([\d\s\u00a0,]+)$/,
      en: /^(.+) · planted: ([\d, ]+) · starting with ([\d, ]+)$/,
      toEn: (m) => `${translateValue(m[1], "en")} · planted: ${numberToEnglish(m[2])} · starting with ${numberToEnglish(m[3])}`,
      toUk: (m) => `${translateValue(m[1], "uk")} · посаджено ${numberToUkrainian(m[2])} · на початок ${numberToUkrainian(m[3])}`
    },
    {
      uk: /^Знайдено закладів: (\d+) із (\d+)$/,
      en: /^Institutions found: (\d+) of (\d+)$/,
      toEn: (m) => `Institutions found: ${m[1]} of ${m[2]}`,
      toUk: (m) => `Знайдено закладів: ${m[1]} із ${m[2]}`
    },
    {
      uk: /^Дані готові · на початок року ([\d\s\u00a0]+) дерев · 12 місяців$/,
      en: /^Data ready · ([\d, ]+) trees at start of year · 12 months$/,
      toEn: (m) => `Data ready · ${numberToEnglish(m[1])} trees at start of year · 12 months`,
      toUk: (m) => `Дані готові · на початок року ${numberToUkrainian(m[1])} дерев · 12 місяців`
    }
  ];

  function numberToEnglish(value) {
    const normalized = String(value).replace(/[\s\u00a0]/g, "").replace(/,(?=\d{3}(?:$|\.))/g, "").replace(",", ".");
    const number = Number(normalized);
    return Number.isFinite(number) ? new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(number) : String(value);
  }

  function numberToUkrainian(value) {
    const number = Number(String(value).replace(/[\s\u00a0,]/g, ""));
    return Number.isFinite(number) ? new Intl.NumberFormat("uk-UA", { maximumFractionDigits: 2 }).format(number) : String(value);
  }

  function translateValue(value, language) {
    const source = String(value ?? "");
    const trimmed = source.trim();
    if (!trimmed) return source;
    let translated = language === "en" ? strings[trimmed] : reverse[trimmed];
    if (!translated) {
      for (const rule of dynamicPatterns) {
        const match = trimmed.match(language === "en" ? rule.uk : rule.en);
        if (match) {
          translated = language === "en" ? rule.toEn(match) : rule.toUk(match);
          break;
        }
      }
    }
    if (!translated && language === "en") {
      const candidate = trimmed
        .replace(/^Правильно\. /, "Correct. ")
        .replace(/^Правильна відповідь: /, "Correct answer: ")
        .replace(/^перелив ([\d\s\u00a0,]+) м³$/, (_, n) => `overflow ${numberToEnglish(n)} m³`)
        .replace(/^Притік: /, "Inflow: ")
        .replace(/^Чаша на 1 січ\.: /, "Reservoir on Jan 1: ")
        .replace(/^Посаджено дерев на$/, "Trees planted on")
        .replace(/^(\d+) міс\. · січ$/, "Month $1 · Jan")
        .replace(/^(\d+) міс\.$/, "Month $1")
        .replace(/· Перевірено /, "· Checked ")
        .replace(/^([\d\s\u00a0]+(?:[,.]\d+)?) га$/, (_, n) => `${numberToEnglish(n)} ha`)
        .replace(/^([\d\s\u00a0]+(?:[,.]\d+)?) кВт·год$/, (_, n) => `${numberToEnglish(n)} kWh`)
        .replace(/^([\d\s\u00a0]+(?:[,.]\d+)?) кВт$/, (_, n) => `${numberToEnglish(n)} kW`)
        .replace(/^([\d\s\u00a0]+(?:[,.]\d+)?) м³\/міс\.$/, (_, n) => `${numberToEnglish(n)} m³/month`)
        .replace(/^([\d\s\u00a0]+(?:[,.]\d+)?) л\/добу$/, (_, n) => `${numberToEnglish(n)} L/day`)
        .replace(/^([\d\s\u00a0]+(?:[,.]\d+)?) м³$/, (_, n) => `${numberToEnglish(n)} m³`)
        .replace(/^([\d\s\u00a0]+(?:[,.]\d+)?) мм$/, (_, n) => `${numberToEnglish(n)} mm`)
        .replace(/^([\d\s\u00a0]+(?:[,.]\d+)?) м$/, (_, n) => `${numberToEnglish(n)} m`)
        .replace(/^×\s*([\d\s\u00a0]+),([\d])$/, (_, n, d) => `× ${numberToEnglish(n)}.${d}`)
        .replace(/(\d),(\d)(?=\s*(?:kW|kWh|L\/day|m³|mm|m\b))/, "$1.$2");
      const partialCandidate = candidate
        .replace(/м³/g, "m³")
        .replace(/ м\/с/g, " m/s")
        .replace(/ пойменних дерев/g, " floodplain trees")
        .replace(/ дерев заплави/g, " river floodplain trees");
      if (partialCandidate !== trimmed) translated = partialCandidate;
    }
    if (!translated && language === "uk") {
      const candidate = trimmed
        .replace(/^Correct\. /, "Правильно. ")
        .replace(/^Correct answer: /, "Правильна відповідь: ")
        .replace(/^overflow ([\d, ]+) m³$/, (_, n) => `перелив ${numberToUkrainian(n)} м³`)
        .replace(/^Inflow: /, "Притік: ")
        .replace(/^Reservoir on Jan 1: /, "Чаша на 1 січ.: ")
        .replace(/^([\d, ]+(?:\.\d+)?) ha$/, (_, n) => `${numberToUkrainian(n)} га`)
        .replace(/^([\d, ]+(?:\.\d+)?) kWh$/, (_, n) => `${numberToUkrainian(n)} кВт·год`)
        .replace(/^([\d, ]+(?:\.\d+)?) kW$/, (_, n) => `${numberToUkrainian(n)} кВт`)
        .replace(/^([\d, ]+(?:\.\d+)?) m³\/month$/, (_, n) => `${numberToUkrainian(n)} м³/міс.`)
        .replace(/^([\d, ]+(?:\.\d+)?) L\/day$/, (_, n) => `${numberToUkrainian(n)} л/добу`)
        .replace(/^([\d, ]+(?:\.\d+)?) m³$/, (_, n) => `${numberToUkrainian(n)} м³`)
        .replace(/^([\d, ]+(?:\.\d+)?) mm$/, (_, n) => `${numberToUkrainian(n)} мм`)
        .replace(/^([\d, ]+(?:\.\d+)?) m$/, (_, n) => `${numberToUkrainian(n)} м`)
        .replace(/^×\s*(\d)\.(\d)$/, "× $1,$2")
        .replace(/Checked/g, "Перевірено")
        .replace(/m³/g, "м³")
        .replace(/ m\/s/g, " м/с")
        .replace(/ floodplain trees/g, " пойменних дерев")
        .replace(/ river floodplain trees/g, " дерев заплави");
      if (candidate !== trimmed) translated = candidate;
    }
    let partial = translated || trimmed;
    const pairs = Object.entries(strings)
      .filter(([sourceText]) => sourceText.length >= 18)
      .map(([uk, en]) => language === "en" ? [uk, en] : [en, uk])
      .sort((a, b) => b[0].length - a[0].length);
    pairs.forEach(([sourceText, targetText]) => {
      if (partial.includes(sourceText)) partial = partial.split(sourceText).join(targetText);
    });
    if (partial !== (translated || trimmed)) translated = partial;
    if (!translated) return source;
    const start = source.indexOf(trimmed);
    return source.slice(0, start) + translated + source.slice(start + trimmed.length);
  }

  const attributes = ["aria-label", "title", "alt", "placeholder", "data-answer-label", "data-explanation"];

  function localizeNode(node, language) {
    if (node.nodeType === Node.TEXT_NODE) {
      const next = translateValue(node.nodeValue, language);
      if (next !== node.nodeValue) node.nodeValue = next;
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    for (const name of attributes) {
      if (!node.hasAttribute(name)) continue;
      const current = node.getAttribute(name);
      const next = translateValue(current, language);
      if (next !== current) node.setAttribute(name, next);
    }
    if (node.matches("option")) {
      const next = translateValue(node.textContent, language);
      if (next !== node.textContent) node.textContent = next;
    }
  }

  function localizeTree(node, language) {
    if (!node) return;
    if (node.nodeType === Node.TEXT_NODE) {
      localizeNode(node, language);
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) localizeNode(walker.currentNode, language);
    localizeNode(node, language);
    node.querySelectorAll("*").forEach((element) => localizeNode(element, language));
  }

  let language = "uk";
  try {
    language = localStorage.getItem(storageKey) === "en" ? "en" : "uk";
  } catch {}

  const root = document.getElementById("oasis-simulation");
  if (!root) return;
  function setLanguage(nextLanguage) {
    language = nextLanguage === "en" ? "en" : "uk";
    window.OCEANUA_OASIS_LANGUAGE = language;
    document.documentElement.lang = language;
    document.title = language === "en" ? "STEM · Oasis Ecosystem" : "STEM · Екосистема Оазис";
    root.dataset.language = language;
    window.OCEANUA_OASIS_REFRESH_LABELS?.();
    localizeTree(root, language);
  }

  if ("MutationObserver" in window) {
    new MutationObserver((records) => {
      records.forEach((record) => {
        if (record.type === "characterData") localizeNode(record.target, language);
        else if (record.type === "attributes") localizeNode(record.target, language);
        else record.addedNodes.forEach((node) => localizeTree(node, language));
      });
    }).observe(root, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: attributes });
  }
  window.addEventListener("message", (event) => {
    if (event.origin === window.location.origin && event.data?.type === "oceanua-language") setLanguage(event.data.language);
  });
  window.addEventListener("storage", (event) => {
    if (event.key === storageKey) setLanguage(event.newValue);
  });
  setLanguage(language);
})();
