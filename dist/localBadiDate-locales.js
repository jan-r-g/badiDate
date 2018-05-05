/**
 * @license BadiDate v2.0.0
 * (c) 2018 Jan Greis
 * licensed under MIT
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.window = global.window || {})));
}(this, (function (exports) { 'use strict';

  var month = {
    1: 'Bahá',
    2: 'Jalál',
    3: 'Jamál',
    4: '‘Aẓamat',
    5: 'Núr',
    6: 'Raḥmat',
    7: 'Kalimát',
    8: 'Kamál',
    9: 'Asmá’',
    10: '‘Izzat',
    11: 'Ma<u>sh</u>íyyat',
    12: '‘Ilm',
    13: 'Qudrat',
    14: 'Qawl',
    15: 'Masá’il',
    16: '<u>Sh</u>araf',
    17: 'Sulṭán',
    18: 'Mulk',
    19: '‘Alá’',
    20: 'Ayyám-i-Há'
  };

  var monthL = {
    1: 'Splendour',
    2: 'Glory',
    3: 'Beauty',
    4: 'Grandeur',
    5: 'Light',
    6: 'Mercy',
    7: 'Words',
    8: 'Perfection',
    9: 'Names',
    10: 'Might',
    11: 'Will',
    12: 'Knowledge',
    13: 'Power',
    14: 'Speech',
    15: 'Questions',
    16: 'Honour',
    17: 'Sovereignty',
    18: 'Dominion',
    19: 'Loftiness',
    20: 'Ayyám-i-Há'
  };

  var holyDay = {
    1: 'Naw-Rúz',
    2: 'First day of Riḍván',
    3: 'Ninth day of Riḍván',
    4: 'Twelfth day of Riḍván',
    5: 'Declaration of the Báb',
    6: 'Ascension of Bahá’u’lláh',
    7: 'Martyrdom of the Báb',
    8: 'Birth of the Báb',
    9: 'Birth of Bahá’u’lláh',
    10: 'Day of the Covenant',
    11: 'Ascension of ‘Abdu’l-Bahá'
  };

  // CAREFUL: Numbering corresponds to Badí' week, i.e. 1 is Jalál (-> Saturday)
  var weekday = {
    1: 'Jalál',
    2: 'Jamál',
    3: 'Kamál',
    4: 'Fiḍál',
    5: '‘Idál',
    6: 'Istijlál',
    7: 'Istiqlál'
  };

  var weekdayAbbr3 = {
    1: 'Jal',
    2: 'Jam',
    3: 'Kam',
    4: 'Fiḍ',
    5: '‘Idá',
    6: 'Isj',
    7: 'Isq'
  };

  var weekdayAbbr2 = {
    1: 'Jl',
    2: 'Jm',
    3: 'Ka',
    4: 'Fi',
    5: '‘Id',
    6: 'Ij',
    7: 'Iq'
  };

  var weekdayL = {
    1: 'Glory',
    2: 'Beauty',
    3: 'Perfection',
    4: 'Grace',
    5: 'Justice',
    6: 'Majesty',
    7: 'Independence'
  };

  var yearInVahid = {
    1: 'Alif',
    2: 'Bá’',
    3: 'Ab',
    4: 'Dál',
    5: 'Báb',
    6: 'Váv',
    7: 'Abad',
    8: 'Jád',
    9: 'Bahá',
    10: 'Ḥubb',
    11: 'Bahháj',
    12: 'Javáb',
    13: 'Aḥad',
    14: 'Vahháb',
    15: 'Vidád',
    16: 'Badí‘',
    17: 'Bahí',
    18: 'Abhá',
    19: 'Váḥid'
  };

  var BE = 'BE';
  var badiCalendar = 'Badí‘ Calendar';

  var en = /*#__PURE__*/Object.freeze({
    month: month,
    monthL: monthL,
    holyDay: holyDay,
    weekday: weekday,
    weekdayAbbr3: weekdayAbbr3,
    weekdayAbbr2: weekdayAbbr2,
    weekdayL: weekdayL,
    yearInVahid: yearInVahid,
    BE: BE,
    badiCalendar: badiCalendar
  });

  var month$1 = {
    1: 'البهاء',
    2: 'الجلال',
    3: 'الجمال',
    4: 'العظمة',
    5: 'النور',
    6: 'الرحمة',
    7: 'الكلمات',
    8: 'الكمال',
    9: 'الأسماء',
    10: 'العزّة',
    11: 'المشية',
    12: 'العلم',
    13: 'القدرة',
    14: 'القول',
    15: 'المسائل',
    16: 'الشرف',
    17: 'السلطان',
    18: 'الملك',
    19: 'العلاء',
    20: 'ايام الهاء'
  };

  var monthL$1 = {
    1: 'البهاء',
    2: 'الجلال',
    3: 'الجمال',
    4: 'العظمة',
    5: 'النور',
    6: 'الرحمة',
    7: 'الكلمات',
    8: 'الكمال',
    9: 'الأسماء',
    10: 'العزّة',
    11: 'المشية',
    12: 'العلم',
    13: 'القدرة',
    14: 'القول',
    15: 'المسائل',
    16: 'الشرف',
    17: 'السلطان',
    18: 'الملك',
    19: 'العلاء',
    20: 'ايام الهاء'
  };

  var holyDay$1 = {
    1: 'عيد النَّيروز',
    2: 'اليوم الأول من عيد الرِّضوان',
    3: 'اليوم التاسع من عيد الرِّضوان',
    4: 'اليوم الثاني عشر من عيد الرِّضوان',
    5: 'يوم إعلان دعوة حضرة الباب',
    6: 'يوم صعود حضرة بهاء الله',
    7: 'يوم استشهاد حضرة الباب',
    8: 'يوم ولادة حضرة الباب',
    9: 'يوم ولادة حضرة بهاء الله',
    10: 'يوم الميثاق',
    11: 'يوم صعود حضرة عبد البهاء'
  };

  var weekday$1 = {
    1: 'الجلال',
    2: 'الجمال',
    3: 'الكمال',
    4: 'الفضّال',
    5: 'العدّال',
    6: 'الأستجلال',
    7: 'الاستقلال'
  };

  var weekdayAbbr3$1 = {
    1: 'جلا',
    2: 'جما',
    3: 'كما',
    4: 'فضّا',
    5: 'عدّا',
    6: 'اسج',
    7: 'اسق'
  };

  var weekdayAbbr2$1 = {
    1: 'جل',
    2: 'جم',
    3: 'كم',
    4: 'فض',
    5: 'عد',
    6: 'اج',
    7: 'اق'
  };

  var weekdayL$1 = {
    1: 'الجلال',
    2: 'الجمال',
    3: 'الكمال',
    4: 'الفضّال',
    5: 'العدّال',
    6: 'الأستجلال',
    7: 'أستقلال'
  };

  var yearInVahid$1 = {
    1: 'ألف',
    2: 'باء',
    3: 'أب',
    4: 'دﺍﻝ',
    5: 'باب',
    6: 'وﺍو',
    7: 'أبد',
    8: 'جاد',
    9: 'بهاء',
    10: 'حب',
    11: 'بهاج',
    12: 'جواب',
    13: 'احد',
    14: 'وﻫﺎب',
    15: 'وداد',
    16: 'بدیع',
    17: 'بهي',
    18: 'ابهى',
    19: 'واحد'
  };

  var BE$1 = 'بديع';
  var badiCalendar$1 = 'تقويم بديع';

  var ar = /*#__PURE__*/Object.freeze({
    month: month$1,
    monthL: monthL$1,
    holyDay: holyDay$1,
    weekday: weekday$1,
    weekdayAbbr3: weekdayAbbr3$1,
    weekdayAbbr2: weekdayAbbr2$1,
    weekdayL: weekdayL$1,
    yearInVahid: yearInVahid$1,
    BE: BE$1,
    badiCalendar: badiCalendar$1
  });

  var monthL$2 = {
    1: 'Herrlichkeit',
    2: 'Ruhm',
    3: 'Schönheit',
    4: 'Größe',
    5: 'Licht',
    6: 'Barmherzigkeit',
    7: 'Worte',
    8: 'Vollkommenheit',
    9: 'Namen',
    10: 'Macht',
    11: 'Wille',
    12: 'Wissen',
    13: 'Kraft',
    14: 'Sprache',
    15: 'Fragen',
    16: 'Ehre',
    17: 'Souveränität',
    18: 'Herrschaft',
    19: 'Erhabenheit',
    20: 'Ayyám-i-Há'
  };

  var holyDay$2 = {
    1: 'Naw-Rúz',
    2: 'Erster Riḍván-Tag',
    3: 'Neunter Riḍván-Tag',
    4: 'Zwölfter Riḍván-Tag',
    5: 'Erklärung des Báb',
    6: 'Hinscheiden Bahá’u’lláhs',
    7: 'Märtyrertod des Báb',
    8: 'Geburt des Báb',
    9: 'Geburt Bahá’u’lláhs',
    10: 'Tag des Bundes',
    11: 'Hinscheiden ‘Abdu’l-Bahás'
  };

  var weekdayL$2 = {
    1: 'Ruhm',
    2: 'Schönheit',
    3: 'Vollkommenheit',
    4: 'Gnade',
    5: 'Gerechtigkeit',
    6: 'Majestät',
    7: 'Unabhängigkeit'
  };

  var BE$2 = 'B.E.';
  var badiCalendar$2 = 'Badí‘ Kalender';

  var de = /*#__PURE__*/Object.freeze({
    monthL: monthL$2,
    holyDay: holyDay$2,
    weekdayL: weekdayL$2,
    BE: BE$2,
    badiCalendar: badiCalendar$2
  });

  var monthL$3 = {
    1: 'Esplendor',
    2: 'Gloria',
    3: 'Belleza',
    4: 'Grandeza',
    5: 'Luz',
    6: 'Misericordia',
    7: 'Palabras',
    8: 'Perfección',
    9: 'Nombres',
    10: 'Fuerza',
    11: 'Voluntad',
    12: 'Conocimiento',
    13: 'Poder',
    14: 'Discurso',
    15: 'Preguntas',
    16: 'Honor',
    17: 'Soberanía',
    18: 'Dominio',
    19: 'Sublimidad',
    20: 'Ayyám-i-Há'
  };

  var holyDay$3 = {
    1: 'Naw-Rúz',
    2: 'Primer día de Riḍván',
    3: 'Noveno día de Riḍván',
    4: 'Duodécimo día de Riḍván',
    5: 'Declaración del Báb',
    6: 'Ascensión de Bahá’u’lláh',
    7: 'Martirio del Báb',
    8: 'Nacimiento del Báb',
    9: 'Nacimiento de Bahá’u’lláh',
    10: 'Día de la Alianza',
    11: 'Fallecimiento de ‘Abdu’l-Bahá'
  };

  var weekdayL$3 = {
    1: 'Gloria',
    2: 'Belleza',
    3: 'Perfección',
    4: 'Gracia',
    5: 'Justicia',
    6: 'Majestuosidad',
    7: 'Independencia'
  };

  var BE$3 = 'E.B.';
  var badiCalendar$3 = 'Calendario Badí‘';

  var es = /*#__PURE__*/Object.freeze({
    monthL: monthL$3,
    holyDay: holyDay$3,
    weekdayL: weekdayL$3,
    BE: BE$3,
    badiCalendar: badiCalendar$3
  });

  var month$2 = {
    1: 'البهاء',
    2: 'الجلال',
    3: 'الجمال',
    4: 'العظمة',
    5: 'النور',
    6: 'الرحمة',
    7: 'الكلمات',
    8: 'الكمال',
    9: 'الأسماء',
    10: 'العزّة',
    11: 'المشية',
    12: 'العلم',
    13: 'القدرة',
    14: 'القول',
    15: 'المسائل',
    16: 'الشرف',
    17: 'السلطان',
    18: 'الملك',
    19: 'العلاء',
    20: 'ايام الهاء'
  };

  var monthL$4 = {
    1: 'بهاء',
    2: 'جلال',
    3: 'جمال',
    4: 'عظمت',
    5: 'نور',
    6: 'رحمت',
    7: 'كلمات',
    8: 'كمال',
    9: 'أسماء',
    10: 'عزّت',
    11: 'مشيت',
    12: 'علم',
    13: 'قدرت',
    14: 'قول',
    15: 'مسائل',
    16: 'شرف',
    17: 'سلطان',
    18: 'ملك',
    19: 'علاء',
    20: 'ايام ها'
  };

  var holyDay$4 = {
    1: 'عید نوروز',
    2: 'روز اوّل عید رضوان',
    3: 'روز نهم عید رضوان',
    4: 'روز دوازدهم عید رضوان',
    5: 'بعثت حضرت باب',
    6: 'صعود حضرت بهاالله',
    7: 'شهادت حضرت اعلی',
    8: 'تولّد حضرت اعلی',
    9: 'تولّد حضرت بهالله',
    10: 'روز عهد و میثاق',
    11: 'صعود حضرت عبدالبها'
  };

  var weekday$2 = {
    1: 'یوم الجلال',
    2: 'یوم الجمال',
    3: 'یوم الكمال',
    4: 'یوم الفضّال',
    5: 'یوم العدّال',
    6: 'یوم الأستجلال',
    7: 'یوم الاستقلال'
  };

  var weekdayAbbr3$2 = {
    1: 'جلا',
    2: 'جما',
    3: 'كما',
    4: 'فضّا',
    5: 'عدّا',
    6: 'اسج',
    7: 'اسق'
  };

  var weekdayAbbr2$2 = {
    1: 'جل',
    2: 'جم',
    3: 'كم',
    4: 'فض',
    5: 'عد',
    6: 'اج',
    7: 'اق'
  };

  var weekdayL$4 = {
    1: 'جلال',
    2: 'جمال',
    3: 'كمال',
    4: 'فضّال',
    5: 'عدّال',
    6: 'استجلال',
    7: 'استقلال'
  };

  var yearInVahid$2 = {
    1: 'ألف',
    2: 'باء',
    3: 'أب',
    4: 'دﺍﻝ',
    5: 'باب',
    6: 'وﺍو',
    7: 'أبد',
    8: 'جاد',
    9: 'بهاء',
    10: 'حب',
    11: 'بهاج',
    12: 'جواب',
    13: 'احد',
    14: 'وﻫﺎب',
    15: 'وداد',
    16: 'بدیع',
    17: 'بهي',
    18: 'ابهى',
    19: 'واحد'
  };

  var BE$4 = 'بديع';
  var badiCalendar$4 = 'تقويم بديع';

  var fa = /*#__PURE__*/Object.freeze({
    month: month$2,
    monthL: monthL$4,
    holyDay: holyDay$4,
    weekday: weekday$2,
    weekdayAbbr3: weekdayAbbr3$2,
    weekdayAbbr2: weekdayAbbr2$2,
    weekdayL: weekdayL$4,
    yearInVahid: yearInVahid$2,
    BE: BE$4,
    badiCalendar: badiCalendar$4
  });

  var monthL$5 = {
    1: 'Splendeur',
    2: 'Gloire',
    3: 'Beauté',
    4: 'Grandeur',
    5: 'Lumière',
    6: 'Miséricorde',
    7: 'Paroles',
    8: 'Perfection',
    9: 'Noms',
    10: 'Puissance',
    11: 'Volonté',
    12: 'Connaissance',
    13: 'Pouvoir',
    14: 'Discours',
    15: 'Questions',
    16: 'Honneur',
    17: 'Souveraineté',
    18: 'Empire',
    19: 'Élévation',
    20: 'Ayyám-i-Há'
  };

  var holyDay$5 = {
    1: 'Naw-Rúz',
    2: 'Premier jour de Riḍván',
    3: 'Neuvième jour de Riḍván',
    4: 'Douzième jour de Riḍván',
    5: 'Déclaration du Báb',
    6: 'Ascension de Bahá’u’lláh',
    7: 'Martyre du Báb',
    8: 'Naissance du Báb',
    9: 'Naissance de Bahá’u’lláh',
    10: 'Jour de l’Alliance',
    11: 'Ascension de ‘Abdu’l-Bahá'
  };

  var weekdayL$5 = {
    1: 'Gloire',
    2: 'Beauté',
    3: 'Perfection',
    4: 'Grâce',
    5: 'Justice',
    6: 'Majesté',
    7: 'Indépendance'
  };

  var BE$5 = 'E.B.';
  var badiCalendar$5 = 'Calendrier Badí‘';

  var fr = /*#__PURE__*/Object.freeze({
    monthL: monthL$5,
    holyDay: holyDay$5,
    weekdayL: weekdayL$5,
    BE: BE$5,
    badiCalendar: badiCalendar$5
  });

  var monthL$6 = {
    1: 'Spožums',
    2: 'Slava',
    3: 'Skaistums',
    4: 'Dižums',
    5: 'Gaisma',
    6: 'Žēlastība',
    7: 'Vārdi',
    8: 'Pilnība',
    9: 'Nosaukumi',
    10: 'Varenība',
    11: 'Griba',
    12: 'Zināšanas',
    13: 'Vara',
    14: 'Runa',
    15: 'Jautājumi',
    16: 'Gods',
    17: 'Suverenitāte',
    18: 'Valdīšana',
    19: 'Cēlums',
    20: 'Ayyám-i-Há'
  };

  var holyDay$6 = {
    1: 'Naw-Rúz',
    2: 'Riḍván pirmā diena',
    3: 'Riḍván devītā diena',
    4: 'Riḍván divpadsmitā diena',
    5: 'Bába paziņojums',
    6: 'Bahá’u’lláh Debessbraukšana',
    7: 'Bába mocekļa nāve',
    8: 'Bába dzimšanas diena',
    9: 'Bahá’u’lláh dzimšanas diena',
    10: 'Derības diena',
    11: '‘Abdu’l-Bahá Debessbraukšana'
  };

  var weekdayL$6 = {
    1: 'Slava',
    2: 'Skaistums',
    3: 'Pilnība',
    4: 'Žēlastība',
    5: 'Taisnīgums',
    6: 'Majestātiskums',
    7: 'Neatkarība'
  };

  var BE$6 = 'B.Ē.';
  var badiCalendar$6 = 'Badí‘ kalendārs';

  var lv = /*#__PURE__*/Object.freeze({
    monthL: monthL$6,
    holyDay: holyDay$6,
    weekdayL: weekdayL$6,
    BE: BE$6,
    badiCalendar: badiCalendar$6
  });

  var monthL$7 = {
    1: 'Pracht',
    2: 'Heerlijkheid',
    3: 'Schoonheid',
    4: 'Grootheid',
    5: 'Licht',
    6: 'Barmhartigheid',
    7: 'Woorden',
    8: 'Volmaaktheid',
    9: 'Namen',
    10: 'Macht',
    11: 'Wil',
    12: 'Kennis',
    13: 'Kracht',
    14: 'Spraak',
    15: 'Vragen',
    16: 'Eer',
    17: 'Soevereiniteit',
    18: 'Heerschappij',
    19: 'Verhevenheid',
    20: 'Ayyám-i-Há'
  };

  var holyDay$7 = {
    1: 'Naw-Rúz',
    2: 'Eerste dag van Riḍván',
    3: 'Negende dag van Riḍván',
    4: 'Twaalfde dag van Riḍván',
    5: 'Verkondiging van de Báb',
    6: 'Heengaan van Bahá’u’lláh',
    7: 'Marteldood van de Báb',
    8: 'Geboortedag van de Báb',
    9: 'Geboortedag van Bahá’u’lláh',
    10: 'Dag van het Verbond',
    11: 'Heengaan van ‘Abdu’l-Bahá'
  };

  var weekdayL$7 = {
    1: 'Heerlijkheid',
    2: 'Schoonheid',
    3: 'Volmaaktheid',
    4: 'Genade',
    5: 'Gerechtigheid',
    6: 'Majesteit',
    7: 'Onafhankelijkheid'
  };

  var BE$7 = 'B.E.';
  var badiCalendar$7 = 'Badí‘-Kalender';

  var nl = /*#__PURE__*/Object.freeze({
    monthL: monthL$7,
    holyDay: holyDay$7,
    weekdayL: weekdayL$7,
    BE: BE$7,
    badiCalendar: badiCalendar$7
  });

  var monthL$8 = {
    1: 'Esplendor',
    2: 'Glória',
    3: 'Beleza',
    4: 'Grandeza',
    5: 'Luz',
    6: 'Miséricórdia',
    7: 'Palavras',
    8: 'Perfeição',
    9: 'Nomes',
    10: 'Potência',
    11: 'Vontade',
    12: 'Conhecimento',
    13: 'Poder',
    14: 'Discurso',
    15: 'Perguntas',
    16: 'Honra',
    17: 'Soberania',
    18: 'Domínio',
    19: 'Sublimidade',
    20: 'Ayyám-i-Há'
  };

  var holyDay$8 = {
    1: 'Naw-Rúz',
    2: '1º dia do Riḍván',
    3: '9º dia do Riḍván',
    4: '12º dia do Riḍván',
    5: 'Declaração do Báb',
    6: 'Ascensão de Bahá’u’lláh',
    7: 'Martírio do Báb',
    8: 'Aniversário do Báb',
    9: 'Aniversário de Bahá’u’lláh',
    10: 'Dia do Convênio',
    11: 'Ascensão de ‘Abdu’l-Bahá'
  };

  var weekdayL$8 = {
    1: 'Glória',
    2: 'Beleza',
    3: 'Perfeição',
    4: 'Graça',
    5: 'Justiça',
    6: 'Majestade',
    7: 'Independência'
  };

  var BE$8 = 'E.B.';
  var badiCalendar$8 = 'Calendário Badí‘';

  var pt = /*#__PURE__*/Object.freeze({
    monthL: monthL$8,
    holyDay: holyDay$8,
    weekdayL: weekdayL$8,
    BE: BE$8,
    badiCalendar: badiCalendar$8
  });

  var month$3 = {
    1: 'Бахā',
    2: 'Джалāл',
    3: 'Джамāл',
    4: '‘Аз̣амат',
    5: 'Нӯр',
    6: 'Рах̣мат',
    7: 'Калимāт',
    8: 'Камāл',
    9: 'Асмā’',
    10: '‘Иззат',
    11: 'Машӣййат',
    12: '‘Илм',
    13: 'К̣удрат',
    14: 'К̣аул',
    15: 'Масā’ил',
    16: 'Шараф',
    17: 'Султ̣ан',
    18: 'Мулк',
    19: '‘Алā’',
    20: 'Аййāм-и Хā'
  };

  var monthL$9 = {
    1: 'Великолепие',
    2: 'Слава',
    3: 'Красота',
    4: 'Величие',
    5: 'Свет',
    6: 'Милость',
    7: 'Слова',
    8: 'Совершенство',
    9: 'Имена',
    10: 'Мощь',
    11: 'Воля',
    12: 'Знание',
    13: 'Могущество',
    14: 'Речь',
    15: 'Вопросы',
    16: 'Честь',
    17: 'Владычество',
    18: 'Господство',
    19: 'Возвышенность',
    20: 'Аййāм-и Хā'
  };

  var holyDay$9 = {
    1: 'Нау-Рӯз',
    2: '1-й день Рид̣вāна',
    3: '9-й день Рид̣вāна',
    4: '12-й день Рид̣вāна',
    5: 'Возвещение Баба',
    6: 'Вознесение Бахауллы',
    7: 'Мученическая Баба',
    8: 'рождения Баба',
    9: 'рождения Бахауллы',
    10: 'День Завета',
    11: 'Вознесение Абдул-Баха'
  };

  var weekday$3 = {
    1: 'Джалāл',
    2: 'Джамāл',
    3: 'Камāл',
    4: 'Фид̣āл',
    5: '‘Идāл',
    6: 'Истиджлāл',
    7: 'Истик̣лāл'
  };

  var weekdayAbbr3$3 = {
    1: 'Джл',
    2: 'Джм',
    3: 'Кам',
    4: 'Фид̣',
    5: '‘Идā',
    6: 'Исд',
    7: 'Иск̣'
  };

  var weekdayAbbr2$3 = {
    1: 'Дл',
    2: 'Дм',
    3: 'Ка',
    4: 'Фи',
    5: '‘Ид',
    6: 'Ид',
    7: 'Ик̣'
  };

  var weekdayL$9 = {
    1: 'Слава',
    2: 'Красота',
    3: 'Совершенство',
    4: 'Благодать',
    5: 'Справедливость',
    6: 'Величие',
    7: 'Независимость'
  };

  var yearInVahid$3 = {
    1: 'Алиф',
    2: 'Бā’',
    3: 'Аб',
    4: 'Дāл',
    5: 'Бāб',
    6: 'Вāв',
    7: 'Абад',
    8: 'Джāд',
    9: 'Бахā',
    10: 'Х̣убб',
    11: 'Баххāдж',
    12: 'Джавāб',
    13: 'Ах̣ад',
    14: 'Ваххāб',
    15: 'Видāд',
    16: 'Бадӣ‘',
    17: 'Бахӣ',
    18: 'Абхā',
    19: 'Вāх̣ид'
  };

  var BE$9 = 'Э.Б.';
  var badiCalendar$9 = 'Календарь Бадӣ‘';

  var ru = /*#__PURE__*/Object.freeze({
    month: month$3,
    monthL: monthL$9,
    holyDay: holyDay$9,
    weekday: weekday$3,
    weekdayAbbr3: weekdayAbbr3$3,
    weekdayAbbr2: weekdayAbbr2$3,
    weekdayL: weekdayL$9,
    yearInVahid: yearInVahid$3,
    BE: BE$9,
    badiCalendar: badiCalendar$9
  });

  var monthL$10 = {
    1: 'Praktfullhet',
    2: 'Härlighet',
    3: 'Skönhet',
    4: 'Storhet',
    5: 'Ljus',
    6: 'Barmhärtighet',
    7: 'Ord',
    8: 'Fullkomlighet',
    9: 'Namn',
    10: 'Makt',
    11: 'Vilja',
    12: 'Kunskap',
    13: 'Kraft',
    14: 'Tal',
    15: 'Frågor',
    16: 'Ära',
    17: 'Överhöghet',
    18: 'Herravälde',
    19: 'Upphöjdhet',
    20: 'Ayyám-i-Há'
  };

  var holyDay$10 = {
    1: 'Naw-Rúz',
    2: 'Första Riḍván',
    3: 'Nionde Riḍván',
    4: 'Tolfte Riḍván',
    5: 'Bábs Deklaration',
    6: 'Bahá’u’lláhs Bortgång',
    7: 'Bábs Martyrskap',
    8: 'Bábs Födelse',
    9: 'Bahá’u’lláhs Födelse',
    10: 'Förbundets dag',
    11: '‘Abdu’l-Bahás Bortgång'
  };

  var weekdayL$10 = {
    1: 'Härlighet',
    2: 'Skönhet',
    3: 'Fullkomlighet',
    4: 'Nåd',
    5: 'Rättvisa',
    6: 'Majestät',
    7: 'Oberoende'
  };

  var BE$10 = 'B.E.';
  var badiCalendar$10 = 'Badí‘ kalendern';

  var sv = /*#__PURE__*/Object.freeze({
    monthL: monthL$10,
    holyDay: holyDay$10,
    weekdayL: weekdayL$10,
    BE: BE$10,
    badiCalendar: badiCalendar$10
  });

  var month$4 = {
    1: '巴哈',
    2: '贾拉勒',
    3: '贾迈勒',
    4: '阿泽迈特',
    5: '努尔',
    6: '拉赫迈特',
    7: '凯利马特',
    8: '卡迈勒',
    9: '艾斯玛',
    10: '伊扎特',
    11: '迈希耶特',
    12: '伊勒姆',
    13: '古德雷特',
    14: '高勒',
    15: '迈萨伊勒',
    16: '谢拉夫',
    17: '苏丹',
    18: '穆勒克',
    19: '阿拉',
    20: '阿亚米哈'
  };

  var monthL$11 = {
    1: '耀',
    2: '辉',
    3: '美',
    4: '宏',
    5: '光',
    6: '仁',
    7: '言',
    8: '完',
    9: '名',
    10: '能',
    11: '意',
    12: '知',
    13: '力',
    14: '语',
    15: '问',
    16: '尊',
    17: '权',
    18: '统',
    19: '崇',
    20: '哈之日'
  };

  var holyDay$11 = {
    1: '诺鲁孜节',
    2: '里兹万节第一日',
    3: '里兹万节第九日',
    4: '里兹万节第十二日',
    5: '巴孛宣示日',
    6: '巴哈欧拉升天日',
    7: '巴孛殉道日',
    8: '巴孛诞辰',
    9: '巴哈欧拉诞辰',
    10: '圣约日',
    11: '阿博都-巴哈升天日'
  };

  var weekday$4 = {
    1: '贾拉勒',
    2: '贾迈勒',
    3: '卡迈勒',
    4: '菲达勒',
    5: '伊达勒',
    6: '伊斯提杰拉勒',
    7: '伊斯提格拉勒'
  };

  var weekdayAbbr3$4 = {
    1: '贾拉勒',
    2: '贾迈勒',
    3: '卡迈勒',
    4: '菲达勒',
    5: '伊达勒',
    6: '伊斯杰',
    7: '伊斯格'
  };

  var weekdayAbbr2$4 = {
    1: '贾拉',
    2: '贾迈',
    3: '卡迈',
    4: '菲达',
    5: '伊达',
    6: '伊杰',
    7: '伊格'
  };

  var weekdayL$11 = {
    1: '辉日',
    2: '美日',
    3: '完日',
    4: '恩日',
    5: '正日',
    6: '威日',
    7: '独日'
  };

  var yearInVahid$4 = {
    1: '艾利夫',
    2: '巴',
    3: '艾卜',
    4: '达勒',
    5: '巴卜',
    6: '瓦乌',
    7: '阿巴德',
    8: '贾德',
    9: '巴哈',
    10: '胡卜',
    11: '巴哈杰',
    12: '贾瓦卜',
    13: '阿哈德',
    14: '瓦哈卜',
    15: '维达德',
    16: '巴迪',
    17: '巴希',
    18: '阿卜哈',
    19: '瓦希德'
  };

  var BE$11 = 'BE';
  var badiCalendar$11 = '巴迪历';

  var zh = /*#__PURE__*/Object.freeze({
    month: month$4,
    monthL: monthL$11,
    holyDay: holyDay$11,
    weekday: weekday$4,
    weekdayAbbr3: weekdayAbbr3$4,
    weekdayAbbr2: weekdayAbbr2$4,
    weekdayL: weekdayL$11,
    yearInVahid: yearInVahid$4,
    BE: BE$11,
    badiCalendar: badiCalendar$11
  });

  var monthL$12 = {
    1: 'Splendor',
    16: 'Honor'
  };

  var en_us = /*#__PURE__*/Object.freeze({
    monthL: monthL$12
  });

  /* eslint-disable dot-notation, line-comment-position, camelcase, sort-imports */

  var badiLocale = {};
  badiLocale['en'] = en;
  badiLocale['ar'] = ar;
  badiLocale['de'] = de;
  badiLocale['es'] = es;
  badiLocale['fa'] = fa;
  badiLocale['fr'] = fr;
  badiLocale['lv'] = lv;
  badiLocale['nl'] = nl;
  badiLocale['pt'] = pt;
  badiLocale['ru'] = ru;
  badiLocale['sv'] = sv;
  badiLocale['zh'] = zh;
  badiLocale['en-us'] = en_us;

  /**
   * Set default language for localization. If the language doesn't exist,
   * nothing is changed.
   * @param {string} language that should be set as default
   */
  var setDefaultLanguage = function setDefaultLanguage(language) {
    if (typeof badiLocale[language] === 'undefined') {
      // eslint-disable-next-line no-console
      console.log('Chosen language does not exist. Setting has not been changed');
    } else {
      badiLocale['default'] = badiLocale[language];
    }
  };

  var badiYears = ['l4da', 'k4ci', 'k5c7', 'l4d6', 'l4ce', 'k4c4', 'k5d4', 'l4cb', 'l4c1', 'k4cj', 'k5c8', 'l4d7', 'l4cf', 'k4c5', 'k4d5', 'k5ce', 'l4c2', 'k4d2', 'k4ca', 'k5da', 'l4ch', 'k4c6', 'k4d6', 'k5cf', 'l4c4', 'k4d4', 'k4cc', 'k5c1', 'l4cj', 'k4c8', 'k4d8', 'k5cg', 'l4c5', 'k4d5', 'k4ce', 'k5c3', 'l4d2', 'k4ca', 'k4d9', 'k5ci', 'l4c6', 'k4d6', 'k4cf', 'k4c4', 'k5d4', 'k4cb', 'k4bj', 'k4cj', 'k5c9', 'k4d8', 'k4cg', 'k4c6', 'k5d6', 'k4cd', 'k4c2', 'k4d2', 'k5ca', 'k4d9', 'k4ci', 'k4c7', 'k5d7', 'k4cf', 'k4c4', 'k4d4', 'k5cc', 'k4bj', 'k4cj', 'k4c9', 'k5d9', 'k4cg', 'k4c6', 'k4d5', 'k5cd', 'k4c2', 'k4d1', 'k4ca', 'k4da', 'j5cj', 'k4c7', 'k4d7', 'k4cf', 'j5c4', 'k4d3', 'k4cb', 'k4c1', 'k5d1', 'l4c9', 'l4d9', 'l4ch', 'k5c6', 'l4d5', 'l4cd', 'l4c2', 'k5d2', 'l4ca', 'l4da', 'l4cj', 'k5c8', 'l4d7', 'l4cf', 'l4c4', 'k5d4', 'l4cb', 'l4c1', 'l4d1', 'k5c9', 'l4d8', 'l4cg', 'l4c5', 'k4d5', 'k5ce', 'l4c2', 'l4d2', 'k4cb', 'k5db', 'l4ci', 'l4c7', 'k4d7', 'k5cf', 'l4c4', 'l4d4', 'k4cc', 'k5c2', 'l4d1', 'l4c9', 'k4d9', 'k5ch', 'l4c5', 'l4d5', 'k4ce', 'k5c3', 'l4d2', 'l4cb', 'k4da', 'k5ci', 'l4c6', 'l4d6', 'k4cf', 'k5c5', 'l4d4', 'l4cc', 'k4c1', 'k4d1', 'k5c9', 'l4d8', 'k4cg', 'k4c6', 'k5d6', 'l4ce', 'k4c3', 'k4d3', 'k5cb', 'l4da', 'k4ci', 'k4c7', 'k5d7', 'l4cf', 'k4c5', 'k4d5', 'k5cd', 'l4c1', 'k4cj', 'k4c9', 'k5d9', 'l4cg', 'k4c6', 'k4d6', 'k5ce', 'l4c3', 'k4d2', 'k4ca', 'k5bj', 'l4ci', 'k4c7', 'k4d7', 'k4cg', 'k5c5', 'k4d4', 'k4cc', 'k4c1', 'k5d1', 'k4c9', 'k4d9', 'k4ch', 'k5c7', 'l4d6', 'l4ce', 'l4c3', 'l5d3', 'l4ca', 'l4da', 'l4cj', 'l5c8', 'l4d7', 'l4cg', 'l4c5', 'l5d4', 'l4cb', 'l4c1', 'l4d1', 'l5ca', 'l4d9', 'l4ch', 'l4c6', 'l5d6', 'l4cd', 'l4c2', 'l4d2', 'l4cb', 'k5c1', 'l4cj', 'l4c8', 'l4d8', 'k5cg', 'l4c4', 'l4d4', 'l4cc', 'k5c2', 'l4d1', 'l4ca', 'l4da', 'k5ci', 'l4c6', 'l4d5', 'l4ce', 'k5c3', 'l4d2', 'l4cb', 'l4db', 'k5cj', 'l4c8', 'l4d7', 'l4cf', 'k5c5', 'l4d4', 'l4cc', 'l4c2', 'k5d2', 'l4c9', 'l4d9', 'l4ch', 'k4c6', 'k5d6', 'l4ce', 'l4c3', 'k4d3', 'k5cc', 'l4db', 'l4cj', 'k4c8', 'k5d8', 'l4cf', 'l4c4', 'k4d5', 'k5cd', 'l4c2', 'l4d2', 'k4ca', 'k5d9', 'l4cg', 'l4c6', 'k4d6', 'k5cf', 'l4c3', 'l4d3', 'k4cb', 'k5bj', 'l4ci', 'l4c7', 'k4d7', 'k5cg', 'l4c5', 'l4d5', 'k4cd', 'k4c2', 'k5d2', 'l4c9', 'k4d9', 'k4ch', 'k5c7', 'l4d6', 'k4cf', 'k4c4', 'k5d4', 'l4cb', 'l4bj', 'l4cj', 'l5c8', 'm4d7', 'l4cg', 'l4c5', 'l5d5', 'm4cc', 'l4c1', 'l4d1', 'l5ca', 'm4d9', 'l4ch', 'l4c7', 'l5d7', 'm4ce', 'l4c3', 'l4d3', 'l5cb', 'm4bi', 'l4ci', 'l4c8', 'l4d8', 'l5ch', 'l4c5', 'l4d5', 'l4cd', 'l5c2', 'l4d1', 'l4c9', 'l4da', 'l5ci', 'l4c7', 'l4d7', 'l4cf', 'l5c4', 'l4d2', 'l4cb', 'l4bj', 'l5d1', 'l4c8', 'l4d8', 'l4cg', 'l5c5', 'l4d4', 'l4cc', 'l4c2', 'l5d2', 'l4c9', 'l4da', 'l4ci'];

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  /**
   * A date in the Badí' calendar.
   */

  var BadiDate = function () {
    /**
     * Accepts a number of different sets of arguments for instantiation: JS Date
     * object, moment object, ISO 8601 date string, Badí' date string in the
     * format 'year-month-day' or 'year-holyDayNumber' and array in the format
     * [year, month, day] or [year, holyDayNumber] where holyDayNumber is a number
     * between 1 (Naw-Rúz) and 11 (Ascension of 'Abdu'l-Bahá).
     * @param {(Date|moment|string|Array)} date input date
     */
    function BadiDate(date) {
      classCallCheck(this, BadiDate);
      // eslint-disable-line complexity
      this._gregDate = 0;
      this._badiYear = 0;
      this._badiMonth = 0;
      this._badiDate = 0;
      this._nawRuz = 0;
      this._ayyamiHaLength = 0;
      this._yearTB = [];
      this._holyDay = false;
      this._valid = true;

      if (date instanceof Date) {
        this.gregDate = moment.utc([date.getFullYear(), date.getMonth(), date.getDate(), 12]);
      } else if (date instanceof moment) {
        this._gregDate = moment.utc([date.year(), date.month(), date.date(), 12]);
      } else if (typeof date === 'string') {
        var dateArray = this._parseBadiDateString(date);
        if (dateArray) {
          this._setFromBadiDate(dateArray);
          // Looks like the input was a Gregorian datestring
        } else {
          // Attempt to handle a malformed string which moment complains about but
          // Date makes a best guess at.
          var tempDate = new Date(date);
          this._gregDate = moment.utc([tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate(), 12]);
          // Check if it's before 1 BE or after 356 BE (which we can't handle)
          if (this._notInValidGregRange(this._gregDate)) {
            this._setInvalid();
          }
        }
      } else if (date.constructor === Array) {
        if (date.length !== 3 && date.length !== 2) {
          this._setInvalid();
        } else {
          this._setFromBadiDate(date);
        }
      }
      if (this._badiYear === 0) {
        // We haven't set the Badí' date yet
        this._setFromGregorianDate();
      }
      if (this._valid) {
        this._setHolyDay();
      }
    }

    /**
     * Formats the output as defined by the given format string
     * The following tokens are accepted:
     * d - day of month without leading zeroes
     * dd - day of month with leading zeroes
     * D - day of month as 3-letter (+ apostrophes) abbreviation of translit.
     * DD - full day of month transliteration
     * DDL - full day of month translation
     * DD+ - full day of month transliteration (translation)
     * m, mm, M, MM, MML, MM+ - same as days
     * ww - day of week, two letter abbreviation (Jl, Jm, Ka, Fi, 'Id, Ij, Iq)
     * W - day of week, 3 letter abbreviation (Jal, Jam, Kam, Fiḍ, 'Idá, Isj, Isq)
     * WW - day of week, full name
     * WWL - day of week, full name translation
     * yv - year in vahid without leading zeroes
     * yyv - year in vahid with leading zeroes
     * YV - year in vahid full transliteration
     * v - vahid without leading zeroes
     * vv - vahid with leading zeroes
     * k - Kull-i-Shay without leading zeroes
     * kk - Kull-i-Shay with leading zeroes
     * y - year without leading zeroes
     * yy - 3 digit year with leading zeroes
     * Anything in between {} will be printed as is.
     * @param {string} formatString gives the output format (see reference above)
     * @param {string} language output language (subject to fallbacks)
     * @returns {string} date formatted according to inputs
     */


    createClass(BadiDate, [{
      key: 'format',
      value: function format(formatString, language) {
        // eslint-disable-line complexity
        if (!this.isValid()) {
          return 'Not a valid date';
        }
        var formatTokens = [['DDL', 'DD+', 'MML', 'MM+', 'WWL', 'yyv'], ['dd', 'DD', 'mm', 'MM', 'ww', 'WW', 'yv', 'YV', 'vv', 'kk', 'yy', 'BE'], ['d', 'D', 'm', 'M', 'W', 'v', 'k', 'y']];
        if (typeof language === 'undefined' || typeof badiLocale[language] === 'undefined') {
          // eslint-disable-next-line dot-notation
          if (typeof badiLocale['default'] === 'undefined') {
            language = 'en';
          } else {
            language = 'default';
          }
        }
        if (typeof formatString === 'undefined') {
          formatString = 'd MM+ y BE';
        } else if (typeof formatString !== 'string') {
          return 'Invalid formatting string.';
        }
        var returnString = '';
        var length = formatString.length;
        for (var i = 0; i < length; i++) {
          // Text wrapped in {} is output as-is. A '{' without a matching '}'
          // results in invalid input
          if (formatString.charAt(i) === '{' && i < length - 1) {
            for (var j = i + 1; j <= length; j++) {
              if (j === length) {
                return 'Invalid formatting string.';
              }
              if (formatString.charAt(j) === '}') {
                i = j;
                break;
              }
              returnString += formatString.charAt(j);
            }
          } else {
            var next1 = formatString.charAt(i);
            var next2 = next1 + formatString.charAt(i + 1);
            var next3 = next2 + formatString.charAt(i + 2);
            // First check for match to 3-symbol token, then 2, then 1
            // (Tokens are not uniquely decodable)
            if (formatTokens[0].indexOf(next3) > -1) {
              returnString += this._getFormatItem(next3, language);
              i += 2;
            } else if (formatTokens[1].indexOf(next2) > -1) {
              returnString += this._getFormatItem(next2, language);
              i += 1;
            } else if (formatTokens[2].indexOf(next1) > -1) {
              returnString += this._getFormatItem(next1, language);
            } else {
              returnString += next1;
            }
          }
        }
        return returnString;
      }

      /**
       * Retrieve the appropriate output for a given formatting token and language.
       * @param {string} token identifying the date component for output
       * @param {string} language output language
       * @returns {string} localized output string in desired language (or fallback)
       */

    }, {
      key: '_getFormatItem',
      value: function _getFormatItem(token, language) {
        // eslint-disable-line complexity
        // ES6 is a bit funny with the scope of let in a switch
        var day = void 0,
            month = void 0,
            monthL = void 0;
        switch (token) {
          // Single character tokens
          case 'd':
            return String(this._badiDay);
          case 'D':
            day = this._formatItemFallback(language, 'month', this._badiDay);
            if (day.substring(4, 5) === '’' && day.substring(0, 1) === '‘') {
              return day.substring(0, 5);
            } else if (day.substring(0, 1) === '‘') {
              return day.replace(/<(?:.|\n)*?>/gm, '').substring(0, 4);
            }
            return day.replace(/<(?:.|\n)*?>/gm, '').substring(0, 3);
          case 'm':
            return String(this._badiMonth);
          case 'M':
            month = this._formatItemFallback(language, 'month', this._badiMonth);
            if (month.substring(4, 5) === '’' && month.substring(0, 1) === '‘') {
              return month.substring(0, 5);
            } else if (month.substring(0, 1) === '‘') {
              return month.replace(/<(?:.|\n)*?>/gm, '').substring(0, 4);
            }
            return month.replace(/<(?:.|\n)*?>/gm, '').substring(0, 3);
          case 'W':
            return this._formatItemFallback(language, 'weekdayAbbbr3', (this._gregDate.isoWeekday() + 1) % 7 + 1);
          case 'y':
            return String(this._badiYear);
          case 'v':
            return String(Math.floor((this._badiYear - 1) / 19) % 19 + 1);
          case 'k':
            return String(Math.floor((this._badiYear - 1) / 361) + 1);
          // Two character tokens
          case 'dd':
            return ('0' + String(this._badiDay)).slice(-2);
          case 'DD':
            return this._formatItemFallback(language, 'month', this._badiDay);
          case 'mm':
            return ('0' + String(this._badiMonth)).slice(-2);
          case 'MM':
            return this._formatItemFallback(language, 'month', this._badiMonth);
          case 'ww':
            return this._formatItemFallback(language, 'weekdayAbbr2', (this._gregDate.isoWeekday() + 1) % 7 + 1);
          case 'WW':
            return this._formatItemFallback(language, 'weekday', (this._gregDate.isoWeekday() + 1) % 7 + 1);
          case 'yy':
            return ('00' + String(this._badiYear)).slice(-3);
          case 'yv':
            return String((this._badiYear - 1) % 19 + 1);
          case 'YV':
            return this._formatItemFallback(language, 'yearInVahid', (this._badiYear - 1) % 19 + 1);
          case 'vv':
            return ('0' + String((Math.floor((this._badiYear - 1) / 19) + 2) % 19 - 1)).slice(-2);
          case 'kk':
            return ('0' + String(Math.floor((this._badiYear - 1) / 361) + 1)).slice(-2);
          case 'BE':
            return this._formatItemFallback(language, 'BE');
          // Three character tokens
          case 'DDL':
            return this._formatItemFallback(language, 'monthL', this._badiDay);
          case 'DD+':
            return this._formatItemFallback(language, 'month', this._badiDay) + ' (' + this._formatItemFallback(language, 'monthL', this._badiDay) + ')';
          case 'MML':
            return this._formatItemFallback(language, 'monthL', this._badiMonth);
          case 'MM+':
            month = this._formatItemFallback(language, 'month', this._badiMonth);
            monthL = this._formatItemFallback(language, 'monthL', this._badiMonth);
            if (month === monthL) {
              return month;
            }
            return month + ' (' + monthL + ')';
          case 'WWL':
            return this._formatItemFallback(language, 'weekdayL', (this._gregDate.isoWeekday() + 1) % 7 + 1);
          case 'yyv':
            return ('0' + String((this._badiYear - 1) % 19 + 1)).slice(-2);
          default:
            return '';
        }
      }

      /**
       * Determine the next language in the fallback order:
       * regional variant -> primary language -> default language -> English
       * @param {string} languageCode of the language for which fallback is needed
       * @returns {string} next item in fallback order
       */

    }, {
      key: '_languageFallback',
      value: function _languageFallback(languageCode) {
        if (languageCode.indexOf('-') > -1) {
          return languageCode.split('-')[0];
          // eslint-disable-next-line no-negated-condition
        } else if (languageCode !== 'default') {
          return 'default';
        }
        return 'en';
      }

      /**
       * Retrieve element from localization with fallback
       * @param {string} language output language (subject to fallbacks)
       * @param {string} category group of localization elements (e.g. 'holyDay')
       *                 or label for single items such as 'BE'
       * @param {int} index of desired item in category, always 1-indexed
       * @returns {string} localized output string
       */

    }, {
      key: '_formatItemFallback',
      value: function _formatItemFallback(language, category, index) {
        if (typeof index === 'undefined') {
          while (typeof badiLocale[language] === 'undefined' || typeof badiLocale[language][category] === 'undefined') {
            language = this._languageFallback(language);
          }
          return badiLocale[language][category];
        }
        while (typeof badiLocale[language] === 'undefined' || typeof badiLocale[language][category] === 'undefined' || typeof badiLocale[language][category][index] === 'undefined') {
          language = this._languageFallback(language);
        }
        return badiLocale[language][category][index];
      }

      /**
       * Check whether a string supplied to the constructor describes a valid Badí'
       * date, either as year-month-day or year-holyDay and if yes, return an array
       * of date components.
       * @param {string} dateString Badí' date in string format
       * @returns {(array|false)} array consisting of the Badí' date components
       *                          (either [year, month, day] or
       *                          [year, holyDayNumber]) or false
       */

    }, {
      key: '_parseBadiDateString',
      value: function _parseBadiDateString(dateString) {
        // eslint-disable-line complexity
        var dateComponents = dateString.split('-');
        // Are all components numerical
        for (var i = 0; i < dateComponents.length; i++) {
          if (!/^\d+$/.test(dateComponents[i])) {
            return false;
          }
          dateComponents[i] = parseInt(dateComponents[i], 10);
        }
        // If only two numbers are supplied, the second designates a Holy Day and
        // must be between 1 and 11
        if (dateComponents.length !== 3) {
          if (dateComponents.length === 2 && dateComponents[1] > 0 && dateComponents[1] < 12) {
            return dateComponents;
          }
          return false;
        }
        // Are the month and day numbers in sensible ranges?
        // We call Ayyám-i-Há month 20
        if (dateComponents[1] > 20 || dateComponents[1] < 1) {
          return false;
        }
        if (dateComponents[2] > 19 || dateComponents[2] < 1) {
          return false;
        }
        return dateComponents;
      }

      /**
       * Check whether a moment object is within the valid range of dates.
       * @param {moment} datetime date to be checked
       * @returns {bool} whether the provided datetime is within the valid range
       */

    }, {
      key: '_notInValidGregRange',
      value: function _notInValidGregRange(datetime) {
        if (datetime.isBefore(moment.utc('1844-03-21')) || datetime.isAfter(moment.utc('2351-03-20'))) {
          return true;
        }
        return false;
      }

      /**
       * Generate date from input corresponding to a Gregorian date.
       */

    }, {
      key: '_setFromGregorianDate',
      value: function _setFromGregorianDate() {
        if (this._notInValidGregRange(this._gregDate)) {
          this._setInvalid();
          return;
        }
        var gregYear = this._gregDate.year();
        if (this._gregDate.isBefore(moment.utc('2015-03-21'))) {
          // Old implementation for day before Naw-Rúz 172
          if (this._gregDate.isBefore(gregYear + '-03-21')) {
            this._nawRuz = moment.utc((gregYear - 1).toString() + '-03-21');
            this._badiYear = gregYear - 1844;
          } else {
            this._nawRuz = moment.utc(gregYear.toString() + '-03-21');
            this._badiYear = gregYear - 1843;
          }
          this._setOldAyyamiHaLength();
          this._yearTB = [12, 5, 13, 9];
        } else {
          // New implementation
          this._badiYear = gregYear - 1843;
          this._setBadiYearInfo(true);
        }
        // Now need to set Badí' month and date from the gregorian date
        this._setBadiMonthDay();
      }

      /**
       * Set Badí' month and day from Gregorian date
       */

    }, {
      key: '_setBadiMonthDay',
      value: function _setBadiMonthDay() {
        var dayOfBadiYear = this._dayOfYear(this._gregDate);
        if (dayOfBadiYear < 343) {
          this._badiMonth = Math.floor((dayOfBadiYear - 1) / 19 + 1);
          this._badiDay = (dayOfBadiYear - 1) % 19 + 1;
        } else if (dayOfBadiYear < 343 + this._ayyamiHaLength) {
          this._badiMonth = 20;
          this._badiDay = dayOfBadiYear - 342;
        } else {
          this._badiMonth = 19;
          this._badiDay = dayOfBadiYear - (342 + this._ayyamiHaLength);
        }
      }

      /**
       * Generate date from input that supplied the Badí' year and either Badí'
       * month and day or a Holy Day number.
       * @param {array} dateArray Badí' date either given in the form
       *                          [year, month, day] or [year, holyDayNumber]
       */

    }, {
      key: '_setFromBadiDate',
      value: function _setFromBadiDate(dateArray) {
        // eslint-disable-line complexity
        this._badiYear = parseInt(dateArray[0], 10);
        // Are we in the valid range?
        if (this._badiYear < 1 || this._badiYear > 507) {
          this._setInvalid();
          return;
        } else if (this._badiYear < 172) {
          // Old implementation for dates before Naw-Rúz 172
          this._nawRuz = moment.utc([1843 + this._badiYear, 2, 21]);
          this._setOldAyyamiHaLength();
          this._yearTB = [12, 5, 13, 9];
        } else {
          // New implementation
          this._setBadiYearInfo();
        }
        // If all three components exist, we have a year, month, and day
        // eslint-disable-next-line no-negated-condition
        if (typeof dateArray[2] !== 'undefined') {
          this._badiMonth = parseInt(dateArray[1], 10);
          this._badiDay = parseInt(dateArray[2], 10);
          if (this._badiMonth === 20 && this._badiDay > this._ayyamiHaLength) {
            // If only off by one day, we'll bubble up so that 5th Ayyám-i-Há in a
            // year with only 4 days of Ayyám-i-Há can be salvaged
            if (this._badiDay - this._ayyamiHaLength === 1) {
              this._badiMonth = 19;
              this._badiDay = 1;
            } else {
              this._setInvalid();
            }
          }
          // Otherwise input designated a Holy Day
        } else {
          var holyDayNum = parseInt(dateArray[1], 10);
          switch (holyDayNum) {
            case 1:
              // Naw-Rúz
              this._badiMonth = 1;
              this._badiDay = 1;
              break;
            case 2:
              // First Day of Ridván
              this._badiMonth = 2;
              this._badiDay = 13;
              break;
            case 3:
              // Ninth Day of Ridván
              this._badiMonth = 3;
              this._badiDay = 2;
              break;
            case 4:
              // Twelfth Day of Ridván
              this._badiMonth = 3;
              this._badiDay = 5;
              break;
            case 5:
              // Declaration of the Báb
              this._badiMonth = 4;
              this._badiDay = 8;
              if (this._badiYear < 172) {
                // Date was different in old implementation
                this._badiDay = 7;
              }
              break;
            case 6:
              // Ascension of Bahá'u'lláh
              this._badiMonth = 4;
              this._badiDay = 13;
              break;
            case 7:
              // Martyrdom of the Báb
              this._badiMonth = 6;
              this._badiDay = 17;
              if (this._badiYear < 172) {
                // Date was different in old implementation
                this._badiDay = 16;
              }
              break;
            case 8:
              // Birth of the Báb
              this._badiMonth = this._yearTB[0];
              this._badiDay = this._yearTB[1];
              break;
            case 9:
              // Birth of Bahá'u'lláh
              this._badiMonth = this._yearTB[2];
              this._badiDay = this._yearTB[3];
              break;
            case 10:
              // Day of the Covenant
              this._badiMonth = 14;
              this._badiDay = 4;
              break;
            case 11:
              // Ascension of 'Abdu'l-Bahá
              this._badiMonth = 14;
              this._badiDay = 6;
              break;
            default:
              this._setInvalid();
              return;
          }
        }
        // Finally we set the Gregorian date for this Badí' date
        var dayOfGregYear = this._nawRuz.diff(moment.utc([this._badiYear + 1843]), 'days') + this._dayOfYear([this._badiYear, this._badiMonth, this._badiDay]);
        this._gregDate = moment.utc([this._badiYear + 1843]);
        // Bubbles up to next year if necessary
        this._gregDate.dayOfYear(dayOfGregYear);
        this._gregDate.hour(12);
      }

      /**
       * Set the length of Ayyám-i-Há for dates before the new implementation.
       */

    }, {
      key: '_setOldAyyamiHaLength',
      value: function _setOldAyyamiHaLength() {
        if (moment([this._nawRuz.year() + 1]).isLeapYear()) {
          this._ayyamiHaLength = 5;
        } else {
          this._ayyamiHaLength = 4;
        }
      }

      /**
       * Set year parameters for the given year.
       * @param {bool} fromGregDate whether we are generating the date object from
       *                            a Gregorian date
       */

    }, {
      key: '_setBadiYearInfo',
      value: function _setBadiYearInfo(fromGregDate) {
        var yearData = this._extractBadiYearInfo();
        if (fromGregDate === true && this._gregDate.isBefore(moment.utc(yearData.NR))) {
          this._badiYear -= 1;
          yearData = this._extractBadiYearInfo();
        }
        this._nawRuz = moment.utc(yearData.NR);
        this._ayyamiHaLength = yearData.aHL;
        this._yearTB = yearData.TB;
      }

      /**
       * Unpack the info for the Badí' year from the base36 encoded version.
       * @returns {object} Object containing the date of Naw-Rúz, the length of
       *                   Ayyám-i-Há, and an array containing month, day, month,
       *                   day of the Twin Holy Days
       */

    }, {
      key: '_extractBadiYearInfo',
      value: function _extractBadiYearInfo() {
        var yearData = {};
        // Check whether data needs to be unpacked or exists in the verbose version
        if (badiYears[0] === 'l4da') {
          var components = badiYears[this._badiYear - 172].split('');
          yearData.NR = String(this._badiYear - 172 + 2015) + '-03-' + String(parseInt(components[0], 36));
          yearData.aHL = parseInt(components[1], 36);
          var TB1 = [parseInt(components[2], 36), parseInt(components[3], 36)];
          var TB2 = TB1[1] < 19 ? [TB1[0], TB1[1] + 1] : [TB1[0] + 1, 1];
          yearData.TB = [TB1[0], TB1[1], TB2[0], TB2[1]];
        } else {
          yearData = badiYears[this._badiYear];
        }
        return yearData;
      }

      /**
       * Get the days since Naw-Rúz (NR itself is '1') of the Badí' or Gregorian
       * date provided.
       * @param {(array|moment)} date Badí' date in the form [year, month, day]
       *                         or moment
       * @returns {int} 1-indexed number of the day in the Badí' year
       */

    }, {
      key: '_dayOfYear',
      value: function _dayOfYear(date) {
        var numDays = 0;
        if (date.constructor === Array) {
          // We have a Badí' date
          if (date[1] < 19) {
            numDays = 19 * (date[1] - 1) + date[2];
          } else if (date[1] === 20) {
            numDays = 342 + date[2];
          } else if (date[1] === 19) {
            numDays = 342 + this._ayyamiHaLength + date[2];
          }
        } else {
          numDays = date.diff(this._nawRuz, 'days') + 1;
        }
        return numDays;
      }

      /**
       * Set the member variables to invalid values.
       */

    }, {
      key: '_setInvalid',
      value: function _setInvalid() {
        this._gregDate = moment.utc('0000-00-00');
        this._badiYear = -1;
        this._badiMonth = -1;
        this._badiDay = -1;
        this._ayyamiHaLength = -1;
        this._nawRuz = moment.utc('0000-00-00');
        this._valid = false;
      }

      /**
       * If the date is a Holy Day, assign it
       */

    }, {
      key: '_setHolyDay',
      value: function _setHolyDay() {
        // eslint-disable-line complexity
        // First the dates that haven't changed with the new implementation
        if (this._badiMonth === 1 && this._badiDay === 1) {
          // Naw-Rúz
          this._holyDay = 1;
        } else if (this._badiMonth === 2 && this._badiDay === 13) {
          // First Day of Ridván
          this._holyDay = 2;
        } else if (this._badiMonth === 3 && this._badiDay === 2) {
          // Ninth Day of Ridván
          this._holyDay = 3;
        } else if (this._badiMonth === 3 && this._badiDay === 5) {
          // Twelfth Day of Ridván
          this._holyDay = 4;
        } else if (this._badiMonth === 4 && this._badiDay === 13) {
          // Ascension of Bahá'u'lláh
          this._holyDay = 6;
        } else if (this._badiMonth === 14 && this._badiDay === 4) {
          // Day of the Covenant
          this._holyDay = 10;
        } else if (this._badiMonth === 14 && this._badiDay === 6) {
          // Ascension of 'Abdu'l-Bahá
          this._holyDay = 11;
        }
        // Twin birthdays are set in the instance at this point regardless of
        // implementation
        if (this._badiMonth === this._yearTB[0] && this._badiDay === this._yearTB[1]) {
          // Birth of the Báb
          this._holyDay = 8;
        } else if (this._badiMonth === this._yearTB[2] && this._badiDay === this._yearTB[3]) {
          // Birth of Bahá'u'lláh
          this._holyDay = 9;
        }
        // Finally the two dates that have changed by one day
        if (this._badiYear < 172) {
          if (this._badiMonth === 4 && this._badiDay === 7) {
            // Declaration of the Báb
            this._holyDay = 5;
          } else if (this._badiMonth === 6 && this._badiDay === 16) {
            // Martyrdom of the Báb
            this._holyDay = 7;
          }
        } else if (this._badiMonth === 4 && this._badiDay === 8) {
          // Declaration of the Báb
          this._holyDay = 5;
        } else if (this._badiMonth === 6 && this._badiDay === 17) {
          // Martyrdom of the Báb
          this._holyDay = 7;
        }
      }

      /**
       * Get the name of the Holy Day (if any) in the given language (using
       * localization fallbacks as necessary).
       * @param {string} language Optional language for the return string
       *                 (subject to language fallback)
       * @returns {(string|false)} Name of the Holy Day in the given (or fallback)
       *                           language, or false.
       */

    }, {
      key: 'holyDay',
      value: function holyDay(language) {
        if (!this._holyDay) {
          return false;
        }
        return this._formatItemFallback(language, 'holyDay', this._holyDay);
      }

      /**
       * Check whether this is a valid date (i.e. created from valid input).
       * @returns {bool} whether this is a valid date.
       */

    }, {
      key: 'isValid',
      value: function isValid() {
        return this._valid;
      }

      /**
       * Get the Badí' day as a number.
       * @returns {int} number of the day in the Badí' month (between 1 and 19)
       */

    }, {
      key: 'badiDay',
      value: function badiDay() {
        return this._badiDay;
      }

      /**
       * Get the Badí' month as a number.
       * @returns {int} number of the Badí' month (between 1 and 20 where 20 is
       *                Ayyám-i-Há
       */

    }, {
      key: 'badiMonth',
      value: function badiMonth() {
        return this._badiMonth;
      }

      /**
       * Get the Badí' year.
       * @returns {int} number of the Badí' year.
       */

    }, {
      key: 'badiYear',
      value: function badiYear() {
        return this._badiYear;
      }

      /**
       * Get number of the Badí' weekday between 1 (Jalál ~> Saturday) and
       * 7 (Istiqlál ~> Friday).
       * @returns {int} number of Badí' weekday
       */

    }, {
      key: 'badiWeekday',
      value: function badiWeekday() {
        return (this._gregDate.isoWeekday() + 1) % 7 + 1;
      }

      /**
       * Get number of the year in the Váḥid the current date is in.
       * @returns {int} number of year in Váḥid (between 1 and 19)
       */

    }, {
      key: 'yearInVahid',
      value: function yearInVahid() {
        return (this._badiYear - 1) % 19 + 1;
      }

      /**
       * Get number of the Váḥid (19 year period) the current date is in.
       * @returns {int} number of Váḥid (between 1 and 19)
       */

    }, {
      key: 'vahid',
      value: function vahid() {
        return Math.floor((this._badiYear - 1) / 19) % 19 + 1;
      }

      /**
       * Get number of the Kull-i-Shay' (361 year period) the current date is in.
       * @returns {int} number of Kull-i-Shay' (1 for most supported dates)
       */

    }, {
      key: 'kullIShay',
      value: function kullIShay() {
        return Math.floor((this._badiYear - 1) / 361) + 1;
      }

      /**
       * Get the Gregorian date on whose sunset the Badí' date ends.
       * @returns {moment} Gregorian date, with time set to 12:00:00
       */

    }, {
      key: 'gregorianDate',
      value: function gregorianDate() {
        return this._gregDate;
      }

      /**
       * Get the length of Ayyám-i-Há for the year this date is in.
       * @returns {int} Number of days of Ayyám-i-Há
       */

    }, {
      key: 'ayyamiHaLength',
      value: function ayyamiHaLength() {
        return this._ayyamiHaLength;
      }

      /**
       * Get the number (between 1 and 11) of the Holy Day.
       * @returns {(int|false)} number of Holy Day or false if none.
       */

    }, {
      key: 'holyDayNumber',
      value: function holyDayNumber() {
        return this._holyDay;
      }
    }]);
    return BadiDate;
  }();

  /**
   * Sets option (defaultLanguage) for the
   * module.
   * @param {object} options Options to be set.
   */


  var badiDateOptions = function badiDateOptions(options) {
    if (typeof options.defaultLanguage === 'string') {
      setDefaultLanguage(options.defaultLanguage);
    }
  };

  /* eslint-disable max-len, complexity */
  var clockLocations = {
    Canada: [[[-63.29333, 60], [-138.9386, 60], [-139.1889, 60.08888], [-139.0681, 60.35222], [-139.6767, 60.34055], [-139.9794, 60.18777], [-140.45081, 60.30972], [-140.52139, 60.22221], [-140.9955, 60.30721], [-140.99686, 61.8948], [-141.00005, 65.84028], [-141.00206, 68.42821], [-141.00296, 69.58786], [-141.00477, 69.58884], [-140.99813, 70.12335], [-124.80692, 77.04204], [-117.95462, 78.95431], [-99.46935, 82.3539], [-75.0348, 84.79736], [-59.3117, 83.84122], [-60.98493, 82.07503], [-69.57686, 80.21588], [-71.1173, 79.6183], [-74.13178, 79.24647], [-73.93259, 78.5692], [-75.69878, 77.78571], [-77.43842, 77.49355], [-77.55793, 76.52414], [-78.54063, 76.17887], [-79.31085, 74.25332], [-75.79174, 73.25735], [-73.13581, 72.0489], [-69.1652, 71.09276], [-66.31007, 69.91087], [-66.05776, 68.70243], [-60.73262, 66.89639], [-62.3129, 65.07708], [-63.60102, 64.69197], [-64.19861, 60.84087], [-63.29333, 60.00012]]],
    Finland: [[[31.5848296, 62.9070356], [31.4390606, 62.785375], [31.3454013, 62.64032620000001], [31.2218346, 62.49829550000001], [31.138311, 62.4420838], [30.720412, 62.20890580000002], [30.6564061, 62.2085877], [30.602068, 62.14134890000001], [30.4231749, 62.02237140000001], [30.3061104, 61.964546], [30.1556605, 61.8579888], [30.0752371, 61.8183646], [30.0387281, 61.76500110000001], [29.8185491, 61.6549278], [29.74029919999999, 61.5737044], [29.5030724, 61.461338900000015], [29.3304371, 61.3526198], [29.2330501, 61.268169], [29.0298879, 61.191815300000016], [28.9583837, 61.1514492], [28.818984, 61.1216471], [28.7136921, 61.0443349], [28.6578963, 60.95109439999999], [28.5246697, 60.9571371], [28.1354613, 60.7408695], [27.873414, 60.604559], [27.7736111, 60.53333330000002], [27.725, 60.3913889], [27.4550934, 60.223534], [27.2938862, 60.2003975], [26.8756332, 60.200342100000015], [26.6110136, 60.161753200000014], [26.2947105, 60.0465237], [26.0173046, 59.97679690000001], [25.1693516, 59.9434386], [24.2815873, 59.79155570000002], [23.4566746, 59.67247360000001], [22.9224144, 59.6384411], [22.6345729, 59.6079549], [22.3965563, 59.5130947], [21.4475658, 59.4772985], [20.7608658, 59.5324815], [20.3839584, 59.4576178], [20.2843364, 59.4660819], [19.083209799999988, 60.19169020000001], [19.2202109, 60.61151010000001], [20.0251664, 60.72755450000001], [20.7714495, 61.12690790000001], [20.903203, 61.6462488], [20.1658123, 63.1648577], [20.4010006, 63.3318822], [20.8175143, 63.5011379], [21.4628083, 63.6552312], [21.8845783, 63.70121190000001], [22.9611467, 64.2200974], [23.835799, 64.66547409999997], [24.1545056, 65.29247769999998], [24.131900100000014, 65.5153846], [24.1776819, 65.6603564], [24.1318042, 65.7716089], [24.152978, 65.862572], [24.0536762, 65.95152940000006], [24.0491701, 65.99502970000003], [23.9394784, 66.07568309999998], [23.9170552, 66.16186640000002], [23.7313763, 66.19408560000002], [23.6489848, 66.30377249999997], [23.6880374, 66.3815611], [23.650965700000015, 66.4557476], [23.8605347, 66.5595503], [23.86853209999999, 66.6568254], [23.9078441, 66.72140390000003], [23.880337, 66.76350940000003], [23.99566289999999, 66.822049], [23.8525565, 66.9573479], [23.677678, 67.0620298], [23.5545444, 67.16789390000002], [23.596079, 67.20820560000003], [23.5637833, 67.2606725], [23.7311639, 67.28763560000003], [23.7172209, 67.38530669999997], [23.7639366, 67.42772120000002], [23.408239899999984, 67.46939490000003], [23.4059159, 67.50091320000003], [23.5452477, 67.5838871], [23.492249099999984, 67.6652745], [23.47871239999999, 67.8419848], [23.5171915, 67.88433529999998], [23.6407972, 67.9151784], [23.6525654, 67.9589433], [23.3937061, 68.0452571], [23.3077618, 68.14837649999997], [23.1656349, 68.13315060000002], [23.152641, 68.2333806], [23.0702517, 68.29970360000003], [22.9181313, 68.3335115], [22.8028778, 68.39328420000002], [22.3437523, 68.45688960000003], [22.2960914, 68.4840408], [22.045040799999988, 68.479329], [21.8898693, 68.5844051], [21.7010887, 68.59686950000003], [21.6061629, 68.6678769], [21.4298688, 68.691352], [21.39042, 68.76478960000003], [20.9988391, 68.89612380000003], [20.8441913, 68.93656440000004], [20.9116456, 68.96882420000003], [20.775042799999987, 69.0326073], [20.5523258, 69.0600767], [20.7173208, 69.1197912], [21.057543, 69.03628970000003], [21.1086742, 69.1039291], [20.9875741, 69.19192740000003], [21.0961691, 69.260912], [21.2788202, 69.3118841], [21.6270859, 69.27658829999997], [22.1757622, 68.95632440000003], [22.1918678, 68.9187737], [22.3407806, 68.82722570000003], [22.3745217, 68.71666660000004], [22.5353893, 68.74451260000004], [22.800824, 68.68754809999997], [23.0459522, 68.6893436], [23.1675822, 68.6285189], [23.4406356, 68.6921635], [23.6735202, 68.70552140000002], [23.7753915, 68.81885129999998], [23.983330799999987, 68.82714340000003], [24.0755916, 68.7799668], [24.30226, 68.71735020000003], [24.6083879, 68.6819016], [24.9170187, 68.60529109999997], [25.1193208, 68.6428308], [25.1212144, 68.7458351], [25.1573697, 68.80006390000003], [25.2931271, 68.8600372], [25.47250939999999, 68.90329120000003], [25.6543285, 68.90577049999997], [25.745596499999987, 69.03984729999998], [25.742717799999987, 69.14430209999998], [25.6939225, 69.1957144], [25.7410164, 69.31839509999998], [25.8462009, 69.3929115], [25.8084981, 69.4259367], [25.8768225, 69.5261298], [25.9760403, 69.610225], [25.8925512, 69.66539549999997], [26.0071395, 69.7228555], [26.1255598, 69.7345401], [26.3835888, 69.8541585], [26.4653759, 69.93980490000003], [26.6834067, 69.96301920000003], [26.8407548, 69.9603025], [27.0316081, 69.9107924], [27.3049484, 69.95762760000004], [27.43070959999999, 70.0194461], [27.5206048, 70.02243659999996], [27.614207, 70.074151], [27.9593778, 70.0921111], [27.9842853, 70.0139707], [28.160713, 69.92099370000003], [28.3452694, 69.88083179999997], [28.4042254, 69.818425], [29.1339095, 69.69534039999996], [29.1705369, 69.6390414], [29.3364956, 69.47832269999998], [29.2193395, 69.39763620000002], [28.831539, 69.2243617], [28.80543, 69.1111558], [28.929451, 69.0519407], [28.4953735, 68.9300403], [28.468076, 68.8855137], [28.66118, 68.8864737], [28.8014499, 68.8693665], [28.7072131, 68.732555], [28.4341202, 68.53979460000002], [28.6478382, 68.19591340000002], [29.3271337, 68.0745162], [29.6593888, 67.80297219999996], [30.0173409, 67.67356889999996], [29.9305102, 67.5228214], [29.8567823, 67.48926540000004], [29.6361151, 67.332861], [29.522709499999987, 67.3099172], [29.48660609999999, 67.26011490000003], [29.0732544, 66.99615390000004], [29.0331239, 66.92547219999996], [29.0607529, 66.85269279999997], [29.3507185, 66.6439171], [29.4726751, 66.5434478], [29.6969469, 66.277347], [29.9239353, 66.1262486], [29.997268, 65.97889249999997], [30.0647878, 65.90105890000002], [30.138463, 65.66868749999998], [30.0170916, 65.6965272], [29.722432799999986, 65.637045], [29.8637508, 65.5604702], [29.7331208, 65.472637], [29.7467636, 65.347391], [29.6018471, 65.2599435], [29.893525, 65.19295509999998], [29.8193446, 65.1444587], [29.896916, 65.1051579], [29.7328054, 65.09129760000003], [29.6255535, 65.06020520000003], [29.5993537, 64.99509809999998], [29.6470353, 64.8674467], [29.739663, 64.7897553], [30.0430007, 64.7928625], [30.0416232, 64.74110840000003], [30.1365729, 64.6488835], [29.9894058, 64.58761530000002], [29.9869609, 64.5338998], [30.0583348, 64.4508749], [30.0448933, 64.4020122], [30.482439699999983, 64.2623385], [30.466399899999985, 64.2044319], [30.5534271, 64.1322443], [30.5280169, 64.0488769], [30.320039, 63.9082685], [30.260416, 63.82200320000001], [29.9718903, 63.7571676], [30.24571609999999, 63.60696830000001], [30.385620199999988, 63.54577980000001], [30.4841978, 63.4670887], [30.789711, 63.4050884], [30.9330443, 63.3559208], [30.9798739, 63.3078177], [31.1483116, 63.26151890000002], [31.2416464, 63.2166421], [31.2658547, 63.1154671], [31.46252279999998, 63.02421930000001], [31.5848296, 62.9070356]]],
    // Greenland: [[[-57.44887, 82.28507], [-60.15022, 82.05782], [-61.87928, 81.82771], [-62.2191, 81.7294], [-63.42448, 81.28486], [-65.32658, 80.98138], [-66.57577, 80.83605], [-67.38791, 80.54753], [-67.66468, 80.1436], [-68.73755, 79.10919], [-72.47765, 78.62618], [-72.96065, 78.36972], [-73.1359, 78.13036], [-72.78968, 77.34387], [-73.38382, 76.66424], [-72.79822, 76.5702], [-69.80615, 76.29664], [-68.45971, 75.97179], [-66.32252, 75.80508], [-64.89914, 75.80081], [-63.13809, 76.04018], [-62.31741, 75.9034], [-60.47087, 75.78371], [-60.19731, 75.62983], [-58.94919, 75.49305], [-58.81241, 74.92883], [-58.38497, 74.89464], [-58.21399, 74.63817], [-57.47879, 74.17654], [-57.15394, 73.47554], [-55.83743, 71.40673], [-55.23901, 70.48346], [-55.10223, 69.40632], [-53.87121, 68.825], [-54.21316, 66.80748], [-53.75152, 65.52517], [-52.5034, 63.43926], [-47.39122, 59.6265], [-42.68939, 59.38714], [-41.16771, 61.50723], [-30.05428, 67.67946], [-26.83993, 68.124], [-21.04386, 70.27829], [-21.24903, 72.74034], [-16.78656, 74.91174], [-16.39331, 77.2541], [-17.64144, 78.51933], [-16.82075, 79.78455], [-11.02468, 81.34043], [-11.93085, 82.02433], [-19.48798, 82.45177], [-19.71024, 83.01599], [-27.19898, 83.85377], [-39.64602, 83.80248], [-50.82784, 82.9476], [-57.44887, 82.28507]]],
    Iceland: [[[-25.0, 63.0], [-12.8, 63.0], [-12.8, 66.8], [-25.0, 66.8]]],
    Norway: [[[30.79367, 69.78758], [30.89032, 69.73729], [30.95448, 69.63243], [30.93257, 69.55989], [30.81756, 69.52877], [30.51593, 69.54042], [30.41768, 69.58992], [30.23373, 69.65016], [30.13777, 69.64353], [30.18838, 69.56846], [30.12305, 69.51749], [30.11721, 69.46989], [30.00876, 69.41591], [29.85802, 69.42374], [29.7244, 69.38965], [29.56938, 69.31756], [29.39594, 69.32384], [29.28845, 69.29618], [29.31313, 69.23752], [29.24224, 69.11306], [29.05666, 69.01528], [28.85456, 69.07664], [28.80541, 69.11116], [28.83152, 69.22436], [29.21932, 69.39764], [29.33647, 69.47832], [29.17052, 69.63904], [29.13389, 69.69534], [28.40421, 69.81842], [28.33046, 69.84919], [28.34506, 69.8808], [28.1607, 69.92099], [27.98428, 70.01397], [27.94828, 70.09187], [27.79768, 70.07731], [27.61245, 70.07456], [27.52598, 70.02346], [27.42855, 70.01921], [27.27471, 69.97591], [27.29177, 69.95225], [27.03749, 69.91039], [26.89776, 69.93245], [26.85129, 69.96013], [26.71807, 69.94499], [26.67869, 69.96477], [26.46435, 69.93939], [26.38594, 69.85535], [26.24129, 69.81453], [26.13562, 69.73861], [26.01418, 69.72334], [25.89149, 69.6655], [25.97672, 69.61067], [25.93749, 69.57253], [25.83994, 69.54298], [25.87704, 69.5222], [25.80934, 69.42639], [25.8461, 69.39325], [25.75938, 69.34038], [25.74753, 69.28679], [25.70204, 69.25366], [25.69302, 69.19674], [25.74351, 69.13879], [25.72429, 69.0796], [25.77744, 69.01828], [25.71241, 68.98063], [25.65423, 68.90587], [25.60033, 68.88487], [25.48119, 68.90507], [25.2677, 68.85099], [25.15713, 68.79989], [25.11152, 68.70252], [25.11924, 68.6428], [24.91692, 68.60525], [24.85717, 68.56221], [24.78342, 68.63623], [24.60839, 68.6819], [24.30226, 68.71735], [24.07559, 68.77997], [23.98333, 68.82714], [23.87146, 68.83652], [23.77539, 68.81885], [23.73106, 68.75075], [23.67352, 68.70552], [23.44064, 68.69216], [23.16758, 68.62852], [23.04595, 68.68934], [22.80082, 68.68755], [22.53539, 68.74451], [22.37452, 68.71667], [22.34078, 68.82723], [22.19187, 68.91877], [22.17576, 68.95632], [21.98361, 69.07289], [21.8464, 69.14416], [21.62709, 69.27659], [21.27882, 69.31188], [21.09617, 69.26091], [21.00331, 69.22234], [20.98758, 69.19193], [21.05563, 69.12209], [21.10868, 69.10393], [21.05754, 69.03629], [20.71732, 69.11979], [20.55233, 69.06008], [20.06005, 69.04576], [20.30659, 68.92618], [20.33587, 68.80231], [20.20284, 68.66592], [20.05225, 68.59107], [19.9375, 68.55794], [20.02589, 68.53081], [20.22654, 68.49081], [19.97796, 68.38816], [19.9214, 68.35601], [18.9838, 68.51696], [18.62122, 68.50696], [18.40569, 68.58188], [18.12592, 68.53652], [18.10109, 68.40605], [18.15135, 68.19879], [17.89976, 67.96937], [17.66475, 68.03838], [17.28152, 68.11881], [17.18051, 68.05046], [16.73812, 67.91421], [16.55628, 67.64719], [16.40757, 67.53403], [16.158, 67.51916], [16.08983, 67.43528], [16.4041, 67.20497], [16.38776, 67.04546], [16.19402, 66.98259], [16.03876, 66.91245], [15.99364, 66.87323], [15.62137, 66.59434], [15.37723, 66.4843], [15.48473, 66.28246], [15.03568, 66.15356], [14.51629, 66.13258], [14.58441, 65.90134], [14.62548, 65.81181], [14.54147, 65.70075], [14.49877, 65.5213], [14.50683, 65.30973], [14.3788, 65.24762], [14.32598, 65.11892], [14.12989, 64.97856], [13.70547, 64.63996], [13.65426, 64.58034], [13.89118, 64.50713], [14.08523, 64.47825], [14.11387, 64.46248], [14.15711, 64.19505], [13.96752, 64.00797], [13.7154, 64.04629], [13.21111, 64.09537], [12.92672, 64.05795], [12.68356, 63.97422], [12.48023, 63.81876], [12.33057, 63.71507], [12.29946, 63.67198], [12.14977, 63.59395], [12.21288, 63.47859], [12.08407, 63.35558], [11.97458, 63.26923], [12.21823, 63.00033], [12.07469, 62.90254], [12.13638, 62.74792], [12.05614, 62.61192], [12.29937, 62.26749], [12.13766, 61.72382], [12.41961, 61.56298], [12.56932, 61.56875], [12.87085, 61.3565], [12.83383, 61.25846], [12.79035, 61.19705], [12.70703, 61.14327], [12.68258, 61.06122], [12.61251, 61.04683], [12.44761, 61.05073], [12.22399, 61.01308], [12.33279, 60.89017], [12.33448, 60.85236], [12.39537, 60.73389], [12.51102, 60.64246], [12.51578, 60.60015], [12.60688, 60.51274], [12.60605, 60.40593], [12.49879, 60.32365], [12.54191, 60.19338], [12.50064, 60.09908], [12.44856, 60.03917], [12.34114, 59.96567], [12.23104, 59.92759], [12.17429, 59.88981], [12.05346, 59.88594], [11.98518, 59.90072], [11.84045, 59.84174], [11.92597, 59.794], [11.93988, 59.69458], [11.88922, 59.69321], [11.85571, 59.64829], [11.72056, 59.62549], [11.69113, 59.58955], [11.75993, 59.45818], [11.77987, 59.38646], [11.81625, 59.34474], [11.82979, 59.24223], [11.78393, 59.20838], [11.77539, 59.08659], [11.71051, 59.03368], [11.68908, 58.95685], [11.59063, 58.89072], [11.45623, 58.89021], [11.45853, 58.99597], [11.34184, 59.12041], [11.20498, 59.08311], [11.17718, 59.09736], [11.1, 59], [11.0203, 58.97], [9.67858, 58.87844], [8.51901, 58.15871], [7.92368, 57.95878], [6.62638, 57.9188], [5.34686, 58.63409], [4.70265, 59.35382], [4.57381, 61.1576], [4.78262, 62.0506], [5.46681, 62.55263], [6.79965, 62.99691], [8.29243, 63.77884], [9.92293, 64.11205], [10.71819, 65.0095], [11.4246, 65.12057], [11.79779, 65.84919], [11.95329, 67.64852], [13.20171, 68.29717], [14.5701, 68.89694], [16.08064, 69.41675], [17.91552, 69.8166], [19.1906, 70.36306], [19.81259, 70.33196], [20.19467, 70.19424], [21.78519, 70.50523], [21.89626, 70.73182], [23.70892, 70.96284], [23.91773, 71.1139], [24.46864, 71.07391], [24.71744, 71.21608], [25.89478, 71.26051], [26.77445, 71.08724], [27.79185, 71.22052], [28.65819, 71.06503], [30.03102, 70.78069], [31.23946, 70.43859], [31.19482, 70.34084], [30.79367, 69.78758]], [[4.2, 80.84], [-11.5, 70.1], [19.2, 73.5], [39.2, 81.4]]],
    Sweden: [[[15.4538561, 66.34534869999999], [15.3772302, 66.4843117], [15.625833, 66.605833], [15.80794, 66.735271], [16.0387632, 66.9124213], [16.195223, 66.982232], [16.3877, 67.0455], [16.4040109, 67.2049795], [16.09015, 67.435232], [16.1566, 67.519458], [16.407797, 67.533978], [16.555733, 67.647289], [16.7381292, 67.91418620000002], [17.180003, 68.050508], [17.2818957, 68.1188101], [17.6648128, 68.0384733], [17.8998048, 67.9693359], [18.1514126, 68.198755], [18.1010915, 68.406043], [18.1258499, 68.5364954], [18.4056102, 68.5818554], [18.6211478, 68.5069382], [18.9836971, 68.5169473], [19.921397, 68.3560137], [19.9778586, 68.3881535], [20.2264196, 68.4908071], [19.9375039, 68.5579418], [20.0521233, 68.5910515], [20.2027029, 68.6659076], [20.3358646, 68.8023404], [20.3064282, 68.9261735], [20.0600472, 69.0457578], [20.5486422, 69.05996990000001], [20.7750428, 69.0326073], [20.9137291, 68.9603927], [20.8441913, 68.93656440000002], [20.9156942, 68.8971424], [20.9967921, 68.896741], [21.2340165, 68.8140862], [21.3194271, 68.7592708], [21.3893348, 68.76495460000002], [21.4298688, 68.691352], [21.5651505, 68.6752534], [21.7013706, 68.6305605], [21.7016655, 68.5963461], [21.8898693, 68.5844051], [21.9919125, 68.5339794], [22.0182391, 68.495951], [22.1528153, 68.4701805], [22.2945732, 68.4838241], [22.4661749, 68.4413001], [22.6482126, 68.41604160000001], [22.7362404, 68.3852018], [22.8041064, 68.39294], [22.9181313, 68.3335115], [23.0702517, 68.29970360000002], [23.1528179, 68.2310713], [23.1415318, 68.1543005], [23.2783645, 68.15733889999998], [23.3216014, 68.1347101], [23.3966203, 68.044179], [23.5310194, 68.0067455], [23.6632301, 67.94218640000001], [23.6407972, 67.9151784], [23.5098377, 67.87994509999999], [23.4739757, 67.81714420000002], [23.4946531, 67.7903019], [23.493057, 67.6641861], [23.5588847, 67.6192741], [23.5450496, 67.5829545], [23.4081036, 67.50173829999999], [23.4104738, 67.46759370000002], [23.5365192, 67.4599963], [23.7632859, 67.4262029], [23.7179667, 67.384843], [23.7750768, 67.3393805], [23.7311639, 67.28763560000002], [23.5834506, 67.269308], [23.5535126, 67.2468025], [23.5958386, 67.2071971], [23.5569385, 67.16578719999998], [23.6536532, 67.1042345], [23.6739708, 67.0650834], [23.8564714, 66.9558968], [23.8640579, 66.9221303], [23.9330592, 66.8845665], [23.9945079, 66.82348849999998], [23.9782068, 66.78409040000001], [23.8797209, 66.7620511], [23.9078441, 66.72140390000001], [23.8685321, 66.6568254], [23.8846737, 66.61277119999998], [23.8605347, 66.5595503], [23.7853219, 66.5333886], [23.6509657, 66.4557476], [23.6880374, 66.3815611], [23.6489848, 66.3037725], [23.7263744, 66.1968556], [23.9159179, 66.1621612], [23.936749, 66.0794759], [24.0374327, 66.0090364], [24.0421963, 65.9633925], [24.152978, 65.862572], [24.1318042, 65.7716089], [24.1721721, 65.72528229999999], [24.1776819, 65.6603564], [24.1319001, 65.5153846], [24.1444599, 65.3956667], [23.1299456, 65.2854532], [21.8250561, 64.8363612], [22.0872366, 64.43431070000001], [21.5096176, 64.04121570000002], [21.4570471, 63.7528427], [20.20662871333013, 63.274568586669865], [19.4322896, 63.0737152], [18.2961641, 62.4173632], [17.7755886, 61.1718712], [17.8981165, 60.9377595], [17.7095869, 60.7102649], [17.3865202, 60.6893467], [17.3489744, 60.5862714], [17.3024177, 60.508762], [17.29774, 60.4647038], [17.2565412, 60.4243351], [17.1955585, 60.4105852], [17.1986283, 60.3077815], [17.0585097, 60.2727725], [16.908878, 60.281498], [16.9048859, 60.2394077], [16.7046001, 60.1950497], [16.6294785, 60.2384924], [16.6154023, 60.2786235], [16.5166127, 60.3554293], [16.3927146, 60.3794045], [16.2589904, 60.4931441], [16.1947891, 60.5354328], [16.13651, 60.6103267], [16.2382972, 60.6230491], [16.3769218, 60.7434488], [16.386117, 60.7868], [16.2552139, 60.8636119], [16.1310092, 60.9920575], [15.9216155, 61.00763], [15.7619207, 61.0496869], [15.6803816, 61.11321], [15.6573361, 61.2154788], [15.4760187, 61.3149858], [15.3370007, 61.4016369], [15.20475, 61.503826], [15.1531933, 61.5956892], [14.8564014, 61.7835491], [14.7971, 61.798451], [14.6666465, 61.8918775], [14.5296202, 61.783626], [14.4997464, 61.62599], [14.3947754, 61.5637652], [14.3364964, 61.59913920000001], [14.1822587, 61.6175455], [13.9769516, 61.6213397], [13.8902353, 61.6525473], [13.6131488, 61.6726273], [13.564749, 61.656455], [13.5066718, 61.6929666], [13.5145384, 61.7377738], [13.4160916, 61.8280592], [13.2092287, 61.9365972], [13.0799221, 62.0376119], [13.0423631, 62.0182008], [12.9513736, 62.1334555], [12.9026405, 62.1418727], [12.8059683, 62.2205277], [12.6078489, 62.214806], [12.299389, 62.2659814], [12.056144, 62.6119191], [12.1363845, 62.7479169], [12.074689, 62.9025463], [12.218233, 63.0003345], [11.9745822, 63.2692252], [12.0840901, 63.3555796], [12.2128783, 63.4785906], [12.1497625, 63.593946], [12.2975812, 63.6732169], [12.3399662, 63.7269855], [12.4797773, 63.8196667], [12.6860556, 63.9738931], [12.9268369, 64.05783829999999], [13.2109436, 64.0951725], [13.7151219, 64.045304], [13.981667, 64.013056], [14.1579301, 64.1860759], [14.120556, 64.452778], [14.086006, 64.47814109999999], [13.8924406, 64.507004], [13.6540802, 64.579929], [13.7050997, 64.6396655], [14.1081927, 64.96225790000001], [14.3257603, 65.1190618], [14.3790211, 65.24804960000002], [14.5056577, 65.3099238], [14.4967711, 65.5174317], [14.5295213, 65.682227], [14.6240045, 65.81419090000001], [14.584253, 65.9013501], [14.5162846, 66.132567], [15.035653, 66.1535649], [15.4847146, 66.282458], [15.4538561, 66.34534869999999]]],
    USA: [[[-130.01989, 55.9153], [-130.17038, 55.77749], [-130.13861, 55.55335], [-129.99201, 55.28955], [-130.25933, 54.99635], [-130.66666, 54.71444], [-131.17048, 54.72103], [-132.10046, 54.6269], [-132.86477, 54.63066], [-133.60649, 54.72479], [-134.93933, 56.02375], [-136.80681, 57.75192], [-137.09296, 58.25079], [-139.07716, 59.1017], [-141.32115, 59.76436], [-143.47102, 59.81707], [-146.37014, 59.17701], [-149.21654, 59.54598], [-152.0253, 57.0535], [-155.80544, 55.02035], [-159.93198, 54.32757], [-173.1399, 51.33056], [-179.49537, 50.84863], [-179.28453, 52.29443], [-171.78447, 63.95114], [-169.94709, 63.91437], [-169.09903, 65.86662], [-168.1474, 65.7885], [-164.9772, 66.85025], [-167.15342, 68.37135], [-166.29498, 69.12437], [-161.71663, 70.74335], [-156.23466, 71.55661], [-143.75716, 70.6304], [-141.58847, 70.26895], [-141.56335, 69.73575], [-141.39798, 69.64277], [-141.00304, 69.64616], [-141.00189, 60.6745], [-141.00157, 60.30507], [-140.52034, 60.21906], [-140.44797, 60.30796], [-139.97408, 60.18451], [-139.68007, 60.33572], [-139.05208, 60.35373], [-139.17702, 60.08286], [-138.70578, 59.90624], [-138.60921, 59.76], [-137.60744, 59.24348], [-137.45151, 58.90854], [-136.82468, 59.1598], [-136.58199, 59.16554], [-136.19525, 59.63881], [-135.9476, 59.66343], [-135.47958, 59.7981], [-135.02888, 59.56364], [-135.10063, 59.42776], [-134.95978, 59.28104], [-134.7007, 59.2489], [-134.48273, 59.13097], [-134.258, 58.86087], [-133.84105, 58.72985], [-133.37997, 58.43181], [-133.45987, 58.38848], [-133.17195, 58.15383], [-132.55389, 57.4967], [-132.2478, 57.21112], [-132.36871, 57.09167], [-132.0448, 57.0451], [-132.12311, 56.8739], [-131.87311, 56.80627], [-131.83539, 56.59912], [-131.5813, 56.6123], [-131.08698, 56.40613], [-130.7818, 56.36713], [-130.4682, 56.24329], [-130.42548, 56.14172], [-130.10541, 56.12268], [-130.01989, 55.9153]], [[179.9, 52.2], [172.0, 53.3], [172.0, 52.4], [179.9, 51.0]]]
  };
  /* eslint-enable max-len */

  var usingClockLocations = true;

  /**
   * Toggle the use of clock locations on or off
   * @param {bool} useCL whether clock locations should be used.
   */
  var useClockLocations = function useClockLocations(useCL) {
    usingClockLocations = useCL;
  };

  /**
   * Determine whether a point lies within a polygon.
   * All coordinates are given as [longitude, latitude].
   * @param {array} coords Coordinates of the point
   * @param {array} polygon given by an array of pairs of x and y coordinates
   * @returns {bool} whether the point given by coords is inside the polygon
   */
  var inPolygon = function inPolygon(coords, polygon) {
    var x = coords[0];
    var y = coords[1];
    var inside = false;
    for (var i = 0, j = polygon.length - 1; i < polygon.length; i++) {
      var xi = polygon[i][0];
      var yi = polygon[i][1];
      var xj = polygon[j][0];
      var yj = polygon[j][1];
      // Check that a) the segment crosses the y coordinate of the point
      //            b) at least one of the two vertices is left of the point
      //            c) at the y coordinate of the point, the segment is left of it
      if (yi < y !== yj < y && (xi <= x || xj <= x) && xi + (y - yi) * (xj - xi) / (yj - yi) < x) {
        inside = !inside;
      }
      j = i;
    }
    return inside;
  };

  /**
   * Determine whether coordinates are within a region where fixed times are used
   * as "sunrise" and "sunset" using polygons. The name of a country being
   * returned doesn't just mean that the coordinates are within that country, but
   * that they are within the region of that country where such a rule applies.
   * @param {number} latitude of the point to be checked
   * @param {number} longitude of the point to be checked
   * @returns {(string|false)} the appropriate region or false
   */
  var clockLocationFromPolygons = function clockLocationFromPolygons(latitude, longitude) {
    if (!usingClockLocations) {
      return false;
    }
    // First exclude as large an area as possible from having to check polygons
    if (latitude < 51.0) {
      return false;
    }
    if (latitude < 57.0 && longitude > -129.0 && longitude < 172.0) {
      return false;
    }
    // Make a list of plausible areas based on longitude, then only check those
    var countries = [];
    var labels = [];
    if (longitude < -129.9 || longitude > 172.4) {
      countries.push(clockLocations.USA);
      labels.push('USA');
    }
    if (longitude > -141.1 && longitude < -61.1) {
      countries.push(clockLocations.Canada);
      labels.push('Canada');
    }
    // Greenland doesn't currently have a rule for this
    // if (longitude > -73.1 && longitude < -11.3) {
    //   countries.push(clockLocations.Greenland);
    //   labels.push('Greenland');
    // }
    if (longitude > -25.0 && longitude < -12.8) {
      countries.push(clockLocations.Iceland);
      labels.push('Iceland');
    }
    if (longitude > -9.2 && longitude < 33.6) {
      countries.push(clockLocations.Norway);
      labels.push('Norway');
    }
    if (longitude > 10.9 && longitude < 24.2) {
      countries.push(clockLocations.Sweden);
      labels.push('Sweden');
    }
    if (longitude > 19.1 && longitude < 31.6) {
      countries.push(clockLocations.Finland);
      labels.push('Finland');
    }
    // Russia currently doesn't have a rule for this
    // if (longitude > 27.3 || longitude < -169.6) {
    //  countries.push(clockLocations.Russia);
    //  labels.push('Russia');
    // }
    for (var i = 0; i < countries.length; i++) {
      for (var j = 0; j < countries[i].length; j++) {
        if (inPolygon([longitude, latitude], countries[i][j])) {
          return labels[i];
        }
      }
    }
    return false;
  };

  /* eslint-disable complexity */

  /**
   * Wrapper class for Badí' date which takes care of all the location dependent
   * things: times for start, end, sunrise, and solar noon of the date as well as
   * the times for Holy Day commemorations.
   */

  var LocalBadiDate =
  /**
   * Creates a Badí' date with location dependent information.
   * @param {(Date|moment|string|Array)} date input date, same formats as for
   *   badiDate are accepted. For a moment object, the time (before or after
   *   sunset) is taken into consideration, otherwise only the date.
   * @param {number} latitude of target location
   * @param {number} longitude of target location
   * @param {string} timezoneId as per IANA time zone database
   */
  function LocalBadiDate(date, latitude, longitude, timezoneId) {
    classCallCheck(this, LocalBadiDate);

    // If a moment object is being passed, we use date and time, not just the
    // date. For a JS Date object, we can't assume it's in the correct timezone,
    // so in that case we use the date information only.
    if (date instanceof moment) {
      var sunset = MeeusSunMoon.sunset(date, latitude, longitude);
      if (date.isAfter(sunset)) {
        date.add(1, 'day');
      }
    }
    this.badiDate = new BadiDate(date);
    var gregDate = moment.tz(this.badiDate.gregorianDate().format('YYYY-MM-DDTHH:mm:ss'), timezoneId);
    var clockLocation = clockLocationFromPolygons(latitude, longitude);
    if (!clockLocation || clockLocation === 'Finland' && this.badiDate.badiMonth() === 19) {
      this.end = MeeusSunMoon.sunset(gregDate, latitude, longitude);
      this.solarNoon = MeeusSunMoon.solarNoon(gregDate, longitude);
      this.sunrise = MeeusSunMoon.sunrise(gregDate, latitude, longitude);
      this.start = MeeusSunMoon.sunset(gregDate.subtract(1, 'day'), latitude, longitude);
      // add() and subtract() mutate the object, so we have to undo it
      gregDate.add(1, 'day');
    } else {
      // First we set times to 18:00, 06:00, 12:00, 18:00, modifications are
      // then made depending on the region.
      this.end = moment.tz(gregDate.format('YYYY-MM-DDT') + '18:00:00', timezoneId);
      this.solarNoon = moment.tz(gregDate.format('YYYY-MM-DDT') + '12:00:00', timezoneId);
      this.sunrise = moment.tz(gregDate.format('YYYY-MM-DDT') + '06:00:00', timezoneId);
      this.start = moment.tz(gregDate.subtract(1, 'day').format('YYYY-MM-DDT') + '18:00:00', timezoneId);
      // add() and subtract() mutate the object, so we have to undo it
      gregDate.add(1, 'day');
      if (clockLocation === 'Canada') {
        this.sunrise.add(30, 'minutes');
      } else if (clockLocation === 'Iceland') {
        this.solarNoon.add(1, 'hour');
      } else if (clockLocation === 'Finland' || clockLocation === 'USA') {
        if (this.end.isDST()) {
          this.end.add(1, 'hour');
          this.solarNoon.add(1, 'hour');
          this.sunrise.add(1, 'hour');
        }
        if (this.start.isDST()) {
          this.start.add(1, 'hour');
        }
      }
    }
    this.holyDayCommemoration = false;
    switch (this.badiDate.holyDayNumber()) {
      case 2:
        // First Day of Ridvan: 15:00 local standard time
        this.holyDayCommemoration = gregDate;
        this.holyDayCommemoration.hour(gregDate.isDST() ? 16 : 15);
        break;
      case 5:
        // Declaration of the Báb: 2 hours 11 minutes after sunset
        this.holyDayCommemoration = moment.tz(this.start, timezoneId);
        this.holyDayCommemoration.add(131, 'minutes');
        break;
      case 6:
        // Ascension of Bahá'u'lláh: 03:00 local standard time
        this.holyDayCommemoration = gregDate;
        this.holyDayCommemoration.hour(gregDate.isDST() ? 4 : 3);
        break;
      case 7:
        // Martyrdom of the Báb: solar noon
        this.holyDayCommemoration = this.solarNoon;
        break;
      case 11:
        // Ascension of 'Abdu'l-Bahá: 01:00 local standard time
        this.holyDayCommemoration = gregDate;
        this.holyDayCommemoration.hour(gregDate.isDST() ? 2 : 1);
        break;
      // skip default
    }
  };

  /**
   * Sets options (defaultLanguage, useClockLocations) for the
   * module.
   * @param {object} options Options to be set.
   */


  var badiDateOptions$1 = function badiDateOptions$$1(options) {
    if (typeof options.defaultLanguage === 'string') {
      badiDateOptions({ defaultLanguage: options.defaultLanguage });
    }
    if (typeof options.useClockLocations === 'boolean') {
      useClockLocations(options.useClockLocations);
    }
  };

  MeeusSunMoon.options({ returnTimeForPNMS: true, roundToNearestMinute: true });

  exports.BadiDate = BadiDate;
  exports.LocalBadiDate = LocalBadiDate;
  exports.badiDateOptions = badiDateOptions$1;

  Object.defineProperty(exports, '__esModule', { value: true });

})));