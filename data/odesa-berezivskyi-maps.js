(function () {
  const basePath = "assets/maps/odesa/berezivskyi-raion/";
  const wideAspect = 1448 / 1086;
  const compactAspect = 1402 / 1122;

  const schoolChats = {
    "chernivskyi-lyceum": {
      number: 1,
      name: "Чернівський ліцей",
      fullName: "Чернівський ліцей з дошкільним відділенням, початковою школою та гімназією Чернівської сільської ради Березівського району Одеської області",
      type: "Ліцей з дошкільним відділенням, початковою школою та гімназією",
      hromada: "Андрієво-Іванівська сільська територіальна громада",
      settlement: "с. Андрієво-Іванівка / с. Чернове",
      address: "Одеська область, Березівський район, Андрієво-Іванівська ТГ, с. Чернове, вул. Центральна, 27",
      postalAddress: "67021, Одеська область, Березівський район, с. Андрієво-Іванівка, вул. Центральна, 27",
      edrpou: "25042100",
      registryId: "14857",
      settlementCode: "UA51020010010041603",
      koatuu: "5123581001",
      ownership: "комунальна власність",
      localityType: "сільська місцевість",
      degree: "I-III",
      director: "Лебідь Тетяна Станіславівна",
      authorizedPerson: "Лебідь Тетяна Станіславівна",
      teachers: "26",
      studentCapacity: "400",
      students: "175",
      staff: "35",
      classes: "11",
      language: "українська",
      phone: "(95)2-61; 485792261",
      email: "aivanovo@ukr.net",
      website: "http://aivanovoukrnet.odessaedu.net",
      note: "В ІСУО заклад прив'язаний до с. Андрієво-Іванівка, в АІКОМ поштова адреса вказана як с. Чернове, вул. Центральна, 27.",
      sources: [
        { label: "АІКОМ, картка закладу", url: "https://aikom.iea.gov.ua/zzso/view?zzsoId=14857" },
        { label: "ІСУО, картка закладу", url: "https://od.isuo.org/schools/view/id/14857" },
        { label: "Дані ДОН Одеської ОДА, 2024", url: "https://osvita.od.gov.ua/wp-content/uploads/2024/02/dani-pro-zzso-40.pdf" }
      ]
    },
    "andriievo-oblasnyi-lyceum": {
      number: 2,
      name: "КЗ \"Андрієво-Іванівський обласний ліцей\"",
      fullName: "Комунальний заклад \"Андрієво-Іванівський обласний ліцей Одеської обласної ради\"",
      type: "Ліцей з початковою школою та гімназією",
      hromada: "Андрієво-Іванівська сільська територіальна громада",
      settlement: "с. Андрієво-Іванівка / с. Чернове",
      address: "Одеська область, Березівський район, Андрієво-Іванівська ТГ, с. Чернове, вул. Центральна, 49",
      postalAddress: "67021, Одеська область, Березівський район, с. Андрієво-Іванівка, вул. Центральна, 49",
      edrpou: "20992771",
      registryId: "22330",
      edboCode: "146508",
      settlementCode: "UA51020010010041603",
      koatuu: "5123581001",
      ownership: "комунальна власність",
      localityType: "сільська місцевість",
      degree: "I-III",
      director: "Інжестойков Віктор Іванович",
      authorizedPerson: "Блінова Ольга Миколаївна",
      teachers: "24",
      language: "українська",
      phone: "(04857)26609",
      email: "ingik67@gmail.com",
      website: "http://aii.odessaedu.net/",
      note: "Заклад обласного підпорядкування; в ІСУО населений пункт вказаний як Андрієво-Іванівка, в АІКОМ поштова адреса - с. Чернове.",
      sources: [
        { label: "АІКОМ, картка закладу", url: "https://aikom.iea.gov.ua/zzso/view?zzsoId=22330" },
        { label: "ІСУО, картка закладу", url: "https://od.isuo.org/schools/view/id/22330" },
        { label: "ЄДЕБО, картка закладу", url: "https://registry.edbo.gov.ua/institution/146508" }
      ]
    },
    "isaivska-gymnasium": {
      number: 3,
      name: "Ісаївська гімназія",
      fullName: "Ісаївська гімназія з дошкільним відділенням та початковою школою Чернівської сільської ради Березівського району Одеської області",
      type: "Гімназія з дошкільним відділенням та початковою школою",
      hromada: "Андрієво-Іванівська сільська територіальна громада",
      settlement: "с. Ісаєве",
      address: "Одеська область, Березівський район, с. Ісаєве, вул. Шкільна, 24",
      postalAddress: "67023, Одеська область, Березівський район, с. Ісаєве, вул. Шкільна, 24",
      edrpou: "24772109",
      registryId: "15489",
      settlementCode: "UA51020010050032851",
      koatuu: "5123581801",
      ownership: "комунальна власність",
      localityType: "сільська місцевість",
      degree: "I-II",
      director: "Нігуренко Микола Олексійович",
      authorizedPerson: "Чудак Людмила Георгіївна",
      studentCapacity: "192",
      students: "133",
      staff: "20",
      classes: "9",
      language: "українська",
      phone: "(90)2-21; 485792221",
      email: "isaevo2013@ukr.net",
      website: "http://nikdnzisaevo1-2st.odessaedu.net",
      note: "Відкрита сторінка ІСУО вказує бюджетування засновника: бюджет Андрієво-Іванівської сільської територіальної громади.",
      sources: [
        { label: "ІСУО, картка закладу", url: "https://od.isuo.org/schools/view/id/15489" },
        { label: "АІКОМ, список ЗЗСО ВО Чернівської СР", url: "https://aikom.iea.gov.ua/authority/zzso-list?authorityId=6303&sort=-full_name" },
        { label: "Дані ДОН Одеської ОДА, 2024", url: "https://osvita.od.gov.ua/wp-content/uploads/2024/02/dani-pro-zzso-40.pdf" }
      ]
    },
    "levadivska-gymnasium": {
      number: 4,
      name: "Левадівська гімназія ім. С.І. Олійника",
      fullName: "Левадівська гімназія з дошкільним відділенням та початковою школою імені С.І.Олійника Чернівської сільської ради Березівського району Одеської області",
      type: "Гімназія з дошкільним відділенням та початковою школою",
      hromada: "Андрієво-Іванівська сільська територіальна громада",
      settlement: "с. Левадівка",
      address: "Одеська область, Березівський район, с. Левадівка, вул. Центральна, 95-А",
      postalAddress: "67020, Одеська область, Березівський район, с. Левадівка, вул. Центральна, 95",
      edrpou: "24772090",
      registryId: "14855",
      settlementCode: "UA51020010070059523",
      koatuu: "5123582201",
      ownership: "комунальна власність",
      localityType: "сільська місцевість",
      director: "Рибалко Світлана Профирівна",
      authorizedPerson: "Пацалова Наталія Анатоліївна",
      studentCapacity: "250",
      students: "111",
      staff: "29",
      classes: "9",
      inclusiveClasses: "4",
      language: "українська",
      phone: "(096)2190578; 485792226",
      email: "levadivkaosvita@ukr.net",
      website: "http://nikdnzlevadiivka.odessaedu.net",
      note: "У картці ІСУО адреса подана як вул. Центральна, 95-А; у переліку ДОН Одеської ОДА 2024 - вул. Центральна, 95.",
      sources: [
        { label: "ІСУО, картка закладу", url: "https://od.isuo.org/schools/view/id/14855" },
        { label: "АІКОМ, список ЗЗСО ВО Чернівської СР", url: "https://aikom.iea.gov.ua/authority/zzso-list?authorityId=6303&sort=-full_name" },
        { label: "Дані ДОН Одеської ОДА, 2024", url: "https://osvita.od.gov.ua/wp-content/uploads/2024/02/dani-pro-zzso-40.pdf" }
      ]
    },
    "skosarivskyi-lyceum": {
      number: 5,
      name: "Скосарівський ліцей",
      fullName: "Скосарівський ліцей з дошкільним відділенням, початковою школою та гімназією Чернівської сільської ради Березівського району Одеської області",
      type: "Ліцей з дошкільним відділенням, початковою школою та гімназією",
      hromada: "Андрієво-Іванівська сільська територіальна громада",
      settlement: "с. Скосарівка",
      address: "Одеська область, Березівський район, с. Скосарівка, вул. Терлецького, 23-Б",
      postalAddress: "67024, Одеська область, Березівський район, с. Скосарівка, вул. Терлецького, 23-б",
      edrpou: "25042117",
      registryId: "14860",
      settlementCode: "UA51020010120065435",
      koatuu: "5123583901",
      ownership: "комунальна власність",
      localityType: "сільська місцевість",
      degree: "I-III",
      director: "Чеченін Сергій Олександрович",
      authorizedPerson: "Бейгуленко Олександра Миколаївна",
      studentCapacity: "306",
      students: "172",
      staff: "37",
      classes: "11",
      language: "українська",
      phone: "(04857)91290; 80485790297",
      email: "skosarivka@ukr.net",
      website: "http://nz.ua/school/wall?id=14860",
      note: "У переліку ДОН Одеської ОДА 2024 вказана т.в.о. директора Бейгуленко Олександра Миколаївна, в ІСУО директором зазначений Чеченін Сергій Олександрович.",
      sources: [
        { label: "ІСУО, картка закладу", url: "https://od.isuo.org/schools/view/id/14860" },
        { label: "АІКОМ, список ЗЗСО ВО Чернівської СР", url: "https://aikom.iea.gov.ua/authority/zzso-list?authorityId=6303&sort=-full_name" },
        { label: "Дані ДОН Одеської ОДА, 2024", url: "https://osvita.od.gov.ua/wp-content/uploads/2024/02/dani-pro-zzso-40.pdf" }
      ]
    }
  };

  const andriievoSchoolHotspots = [
    { kind: "school", schoolId: "chernivskyi-lyceum", label: "1. Чернівський ліцей", number: 1, x: 51.5, y: 42.0, width: 4.4, height: 5.8 },
    { kind: "school", schoolId: "andriievo-oblasnyi-lyceum", label: "2. КЗ \"Андрієво-Іванівський обласний ліцей\"", number: 2, x: 56.3, y: 42.2, width: 4.4, height: 5.8 },
    { kind: "school", schoolId: "isaivska-gymnasium", label: "3. Ісаївська гімназія", number: 3, x: 77.2, y: 28.6, width: 4.4, height: 5.8 },
    { kind: "school", schoolId: "levadivska-gymnasium", label: "4. Левадівська гімназія ім. С.І. Олійника", number: 4, x: 15.0, y: 47.2, width: 4.4, height: 5.8 },
    { kind: "school", schoolId: "skosarivskyi-lyceum", label: "5. Скосарівський ліцей", number: 5, x: 43.2, y: 82.6, width: 4.4, height: 5.8 }
  ];

  const hromadaMaps = [
    {
      id: "berezivskyi-ivanivska-hromada",
      name: "Іванівська селищна територіальна громада",
      image: "ivanivska-hromada.png",
      aspect: wideAspect,
      hotspot: { x: 68.7, y: 18.2, width: 16, height: 11 }
    },
    {
      id: "berezivskyi-andriievo-ivanivska-hromada",
      name: "Андрієво-Іванівська сільська територіальна громада",
      image: "andriievo-ivanivska-hromada.png",
      aspect: wideAspect,
      hotspot: { x: 82.2, y: 33.5, width: 22, height: 11 },
      schoolHotspots: andriievoSchoolHotspots
    },
    {
      id: "berezivskyi-berezivska-hromada",
      name: "Березівська міська територіальна громада",
      image: "berezivska-hromada.png",
      aspect: wideAspect,
      hotspot: { x: 48.1, y: 46.1, width: 17, height: 12 }
    },
    {
      id: "berezivskyi-velykobuyalytska-hromada",
      name: "Великобуялицька сільська територіальна громада",
      image: "velykobuyalytska-hromada.png",
      aspect: wideAspect,
      hotspot: { x: 55.4, y: 63.8, width: 19, height: 10 }
    },
    {
      id: "berezivskyi-znamyanska-hromada",
      name: "Знам’янська сільська територіальна громада",
      image: "znamyanska-hromada.png",
      aspect: wideAspect,
      hotspot: { x: 66.2, y: 46.0, width: 16, height: 11 }
    },
    {
      id: "berezivskyi-konoplianska-hromada",
      name: "Коноплянська сільська територіальна громада",
      image: "konoplianska-hromada.png",
      aspect: wideAspect,
      hotspot: { x: 25.0, y: 36.5, width: 17, height: 11 }
    },
    {
      id: "berezivskyi-kurisovska-hromada",
      name: "Курісовська сільська територіальна громада",
      image: "kurisovska-hromada.png",
      aspect: wideAspect,
      hotspot: { x: 41.5, y: 59.5, width: 15, height: 11 }
    },
    {
      id: "berezivskyi-mykolaivska-hromada",
      name: "Миколаївська селищна територіальна громада",
      image: "mykolaivska-hromada.png",
      aspect: wideAspect,
      hotspot: { x: 27.0, y: 53.5, width: 17, height: 12 }
    },
    {
      id: "berezivskyi-novokalchevska-hromada",
      name: "Новокальчевська сільська територіальна громада",
      image: "novokalchevska-hromada.png",
      aspect: wideAspect,
      hotspot: { x: 72.5, y: 60.4, width: 19, height: 11 }
    },
    {
      id: "berezivskyi-petrivirska-hromada",
      name: "Петровірівська сільська територіальна громада",
      image: "petrivirska-hromada.png",
      aspect: wideAspect,
      hotspot: { x: 56.5, y: 27.4, width: 17, height: 11 }
    },
    {
      id: "berezivskyi-raukhivska-hromada",
      name: "Раухівська селищна територіальна громада",
      image: "raukhivska-hromada.png",
      aspect: wideAspect,
      hotspot: { x: 59.5, y: 81.3, width: 16, height: 11 }
    },
    {
      id: "berezivskyi-rozkvitivska-hromada",
      name: "Розквітівська сільська територіальна громада",
      image: "rozkvitivska-hromada.png",
      aspect: wideAspect,
      hotspot: { x: 15.5, y: 28.7, width: 15, height: 12 }
    },
    {
      id: "berezivskyi-staromaiakivska-hromada",
      name: "Старомаяківська сільська територіальна громада",
      image: "staromaiakivska-hromada.png",
      aspect: compactAspect,
      hotspot: { x: 78.5, y: 74.0, width: 18, height: 11 }
    },
    {
      id: "berezivskyi-striukivska-hromada",
      name: "Стрюківська сільська територіальна громада",
      image: "striukivska-hromada.png",
      aspect: compactAspect,
      hotspot: { x: 37.0, y: 81.7, width: 16, height: 11 }
    },
    {
      id: "berezivskyi-chohodarivska-hromada",
      name: "Чогодарівська сільська територіальна громада",
      image: "chohodarivska-hromada.png",
      aspect: compactAspect,
      hotspot: { x: 18.4, y: 73.9, width: 18, height: 11 }
    },
    {
      id: "berezivskyi-shyriaivska-hromada",
      name: "Ширяївська селищна територіальна громада",
      image: "shyriaivska-hromada.png",
      aspect: compactAspect,
      hotspot: { x: 35.7, y: 20.0, width: 16, height: 11 }
    }
  ];

  const hromadaTargets = Object.fromEntries(
    hromadaMaps.map((map) => [map.name, map.id])
  );

  window.OCEANUA_EXTRA_VIEWS = {
    ...(window.OCEANUA_EXTRA_VIEWS || {}),
    "berezivskyi-raion": {
      title: "Березівський район",
      image: `${basePath}berezivskyi-raion.png`,
      alt: "Карта Березівського району",
      aspect: wideAspect,
      parent: "odesa-oblast",
      hotspots: hromadaMaps.map((map) => ({
        label: map.name,
        target: map.id,
        ...map.hotspot
      }))
    },
    ...Object.fromEntries(hromadaMaps.map((map) => [map.id, {
      title: map.name,
      image: `${basePath}${map.image}`,
      alt: `Карта ${map.name}`,
      aspect: map.aspect,
      parent: "berezivskyi-raion",
      hotspots: map.schoolHotspots || []
    }]))
  };

  window.OCEANUA_SCHOOL_CHATS = {
    ...(window.OCEANUA_SCHOOL_CHATS || {}),
    ...schoolChats
  };

  window.OCEANUA_EXTRA_HOTSPOTS = {
    ...(window.OCEANUA_EXTRA_HOTSPOTS || {}),
    "odesa-oblast": [
      ...((window.OCEANUA_EXTRA_HOTSPOTS || {})["odesa-oblast"] || []),
      {
        label: "Березівський район",
        target: "berezivskyi-raion",
        x: 51.5,
        y: 31.0,
        width: 26,
        height: 16
      }
    ]
  };

  const places = window.OCEANUA_PLACES || { oblasts: [] };
  const odesa = (places.oblasts || []).find((oblast) => oblast.name === "Одеська область");
  const berezivskyi = odesa?.raions?.find((raion) => raion.name === "Березівський район");
  const settlementMapTargets = {};
  const hromadaSettlementCodes = {};

  (berezivskyi?.hromadas || []).forEach((hromada) => {
    const target = hromadaTargets[hromada.name];
    if (!target) return;

    hromadaSettlementCodes[target] = [];
    (hromada.settlements || []).forEach((settlement) => {
      if (!settlement.code) return;
      settlementMapTargets[settlement.code] = target;
      hromadaSettlementCodes[target].push(settlement.code);
    });
  });

  const existingLinks = window.OCEANUA_MAP_LINKS || {};
  window.OCEANUA_MAP_LINKS = {
    ...existingLinks,
    nameMapTargets: {
      ...(existingLinks.nameMapTargets || {}),
      "Березівський район": "berezivskyi-raion",
      ...hromadaTargets
    },
    settlementMapTargets: {
      ...(existingLinks.settlementMapTargets || {}),
      ...settlementMapTargets
    },
    hromadaSettlementCodes: {
      ...(existingLinks.hromadaSettlementCodes || {}),
      ...hromadaSettlementCodes
    }
  };
})();
