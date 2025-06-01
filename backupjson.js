// If your app has a function like renderGallery(images), call it here
// renderGallery(images);

// Array of image objects
// const images = [
//   {
//     src: "./imgaes/concept/capsules/capsuls.png",
//     title: "ReStreet | קפסולות לדרי רחוב",
//     date: 'תשפ"ב | סמסטר אביב 2022',
//     location: "Hadar Neighborhood, Haifa",
//     exactLocation: { x: 32.8151, y: 34.9984 },
//     category: "concept",
//     objectPosition: "top",
//     description: `הנושא הנחקר | אוכלוסיית דרי הרחוב וצרכיהם הפיזיים, החברתיים והנפשיים.`,
//     description1: `קורס יישום טכנולוגי | קפסולות שינה עבור דרי הרחוב בשכונת הדר, חיפה.`,
//     extraParagraph: `דרי הרחוב מתמודדים עם מצוקה קיומית מתמשכת, כאשר הרחוב משמש להם בית בהיעדר אפשרויות אחרות. הפרויקט שלנו מציע מענה כוללני לשיפור תנאי חייהם בשני מישורים – הפיזי והחברתי. כאדריכלים לעתיד, אנו עוסקים בשאלה "מהו בית?" ומבינים שעבור דרי הרחוב, הרחוב הוא חלק בלתי נפרד מזהותם. לכן לא ניתן פשוט להוציא אותם מהמרחב העירוני או לנסות להפריד בינם לבין הרחוב. לפיכך, הפרויקט מציע יצירת מרחב רחוב חדשני ומכבד, שמותאם לצרכים שלהם ומשתלב בחזות העיר.

// לאחר מחקר מעמיק, בחרנו להתמקד בסמטה מוזנחת בשכונת הדר בחיפה, סמוך ל"יחידה לסיוע לדרי רחוב" ברחוב דבורה. מיקום זה מאפשר לנו להציע פתרון שמשלב את תמיכת הקהילה עם מרחב מותאם, ובכך לקדם סביבה נגישה ותומכת.

// `,
//     credits: "מנחים     אדר' אליעזר הירש ",
//     credits1: "סטודיו אדר' שגית וקנין בלפרמן",
//     credits2: "",
//     relatedImages: [
//       { src: "./imgaes/concept/capsules/capsuls.png", title: "הדמייה" },
//       { src: "./imgaes/concept/capsules/caps2.png", title: "העמדה" },
//       { src: "./imgaes/concept/capsules/caps4.png", title: " קפסולות א'" },
//       { src: "./imgaes/concept/capsules/caps5.png", title: "קפסולות ב" },
//       { src: "./imgaes/concept/capsules/caps6.png", title: "פרטי היישום" },
//       { src: "./imgaes/concept/capsules/caps3.png", title: "הדמייה" },
//     ],
//   },
//   {
//     src: "./imgaes/public/insideOut/cover.png",
//     title: "Inside-Out",
//     date: 'תשפ"ד | סמסטר אביב 2024',
//     location: "Eilat, Israel",
//     exactLocation: { x: 29.55805, y: 34.94821 },
//     category: ["public", "urban", "concept"],
//     objectPosition: "top",
//     description: `סטודיו מבנה מורכב | קמפוס חינוכי-חדשני-חברתי, אילת.`,
//     description1: `הנושא הנחקר | חדשנות, קהילה, מגורים, תנועה, חיפוש וגילוי.`,
//     extraParagraph: `כדי להשיג מרקם שיהווה תשתית להשגת עירוניות טובה, הפרויקט מנסה לחולל מהפך במרכז העיר אילת וללכדו ליחידה עירונית בעלת איכויות גבוהות בכל היבט. בנוסף, במיקום הייחודי של אילת המרוחקת מהמרכזים העירוניים הגדולים, קמפוס חינוכי, תרבותי וחברתי נושא עימו חשיבות רבה להתפתחות העירונית והחברתית. בנוסף, הוא יכול לספק גישה למשאבי אומנות מגוונים, סדנאות, קורסים ואירועי תרבות, המעצימים את הקהילה המקומית. כמו כן, המרכז יכול להוות פלטפורמה לפיתוח כישורים אומנותיים לחיזוק הקשרים החברתיים ולהעשרת חיי התרבות של אילת. הקמפוס תוכנן כך שמבחוץ אין אפשרות להבין מה מתרחש בפנים ולאחר החיפוש, מגלים חצר עירונית, אשר תחומה בפונקציות המגוונות שהמרכז מציע.

// `,
//     credits: "מנחה סטודיו:     ד''ר גלי ליכטרוב  ",
//     credits1: "מנחה סטודיו:     ד''ר דנה מרגלית  ",
//     credits2: "מנחה סטודיו:  אדר' עמי שנער",
//     credits3: " מנחה סטודיו: אדר' אורי רונן",
//     relatedImages: [
//       { src: "./imgaes/public/insideOut/cover.png", title: "הדמייה" },
//       { src: "./imgaes/public/insideOut/Shetah.png", title: "ניתוח שטח" },
//       {
//         src: "./imgaes/public/insideOut/Involvment.png",
//         title: "ניתוח אתר התערבות",
//       },
//       {
//         src: "./imgaes/public/insideOut/Plans.png",
//         title: "תוכניות וחזיתות",
//       },
//       {
//         src: "./imgaes/public/insideOut/Plans2.png",
//         title: "תוכניות וחזיתות",
//       },
//       { src: "./imgaes/public/insideOut/hatahim.png", title: "חתכים " },
//     ],
//   },
//   {
//     src: "./imgaes/Slides/bluerails.png",
//     title: "מפגש רחוב",
//     date: 'תשפ"ד | סמסטר אביב 2023',
//     location: "Jerusalem, Israel",
//     exactLocation: { x: 31.7683, y: 35.2137 }, // Jerusalem coordinates
//     category: ["public", "residential", "urban", "concept"],
//     objectPosition: "top",
//     description: `קורס מורכבות באדריכלות | החייאת שוק תלפיות בתפר סירקין-יחיאל, חיפה.`,
//     description1: `הנושא הנחקר | טיפולוגיות בנייה ומה שביניהם, החתך העירוני והחלל העירוני.`,
//     extraParagraph: `הפרויקט עוסק בעיצוב עירוני מחדש בחלל נתון, בשוק תלפיות בעיר חיפה. אזור ההתערבות נמצא בחלקו ההיסטורי והצפוני של רובע הדר וההתמקדות היא בתפר סירקין-יחיאל. תפר זה הוא אחת הנקודות הרבות בהן נוצר מפגש בין המבנים המזוהים עם הסגנון הבינלאומי למבנים המזוהים עם הבנייה הערבית. הקווים המנחים הם לייצר חיבור בין שתי הטיפולוגיות השונות, המוזכרות לעיל, לחקור את החתך העירוני שנוצר ולהתמקד בעיקר בחלל העירוני שנוצר ביניהם. בנוסף, נעשה טיפול בחזיתות ובחיבור בין שכבות המבנה. המטרה המרכזית היא לייצר צריכה מוגברת של המרחב ולהנגישו לציבור הרחב.

// `,
//     credits: "אומן בלו פיינרו",
//     relatedImages: [
//       { src: "./imgaes/public/MifgashRehov/Hadmaya.png", title: "הדמייה" },
//       { src: "./imgaes/public/MifgashRehov/Nituah.png", title: "ניתוח שטח" },
//       { src: "./imgaes/public/MifgashRehov/Nituah2.png", title: "ניתוח שטח" },
//       {
//         src: "./imgaes/public/MifgashRehov/MainObjectives.png",
//         title: "נקודות נבחרות",
//       },
//       {
//         src: "./imgaes/public/MifgashRehov/MainObjectives2.png",
//         title: "נקודות נבחרות",
//       },
//       {
//         src: "./imgaes/public/MifgashRehov/MainObjectives3.png",
//         title: "נקודות נבחרות",
//       },
//       { src: "./imgaes/Slides/bluerails.png", title: "הדמייה" },
//     ],
//   },
//   {
//     src: "./imgaes/residential/LVLUP/cover2.png",
//     title: "LEVEL UP",
//     date: 'תשפ"ד | סמסטר חורף 2024',
//     location: "Jerusalem, Israel",
//     exactLocation: { x: 31.7683, y: 35.2137 }, // Jerusalem coordinates
//     category: ["public", "residential", "urban", "concept"],
//     objectPosition: "top",
//     description: `סטודיו מחקרי במגזר החרדי | התחדשות עירונית בשכונת שמואל הנביא, ירושלים. `,
//     description1: `הנושא הנחקר | מבנים רב תכליתיים לחברה החרדית על מגוון צרכיה והעדפותיה.`,
//     extraParagraph: `המגזר החרדי בישראל נתון בשנים האחרונות בהתפתחות והתרחבות בכמה מישורים: הדמוגרפי, הציבורי, הפוליטי והתרבותי. הפרויקט עוסק בניסיון לתת מענה לאתגרים בדיור לציבור החרדי באמצעות עירוב שימושים ורב תכליתיות, הכוללים הגדרה גמישה של שימושים בתוכניות וצמצום השימוש במשאבי הקרקע. בנוסף, הפרויקט מייצר היררכיה בצירים ובמעברים וגם כיכרות עירוניות, שישמשו כמקום מפגש עבור האוכלוסייה. כמו כן, הפרויקט מתמקד בקונספט "משרת-משורת" והוא חוקר את היחסים ביניהם ואת תפקידם. קיים ניסיון להבין את המשחקיות של סטרוקטורה גרידית ומילואה במגוון דירות, המהוות "פלאג-אין".

// `,
//     credits: "מנחה ארכיטקטורה: פרופסור ברוך ברוך ז''ל",
//     credits1: "סטודיו:     ד''ר הדס שדר",
//     credits2: "מנחת מחקר:     ד''ר הדס שדר",
//     credits3: "מנחה מחקר:     ד''ר איתן מכטר",
//     relatedImages: [
//       { src: "./imgaes/residential/LVLUP/Muza1.png", title: "מצב מוצע" },
//       { src: "./imgaes/residential/LVLUP/Plans3.png", title: "תוכניות" },
//       {
//         src: "./imgaes/residential/LVLUP/Hazitot2.png",
//         title: "חתכי רחוב וחזיתות",
//       },
//       {
//         src: "./imgaes/residential/LVLUP/Apartments.png",
//         title: "קטלוג דירות1",
//       },
//       {
//         src: "./imgaes/residential/LVLUP/Apartments2.png",
//         title: "קטלוג דירות2",
//       },
//       { src: "./imgaes/residential/LVLUP/cover.png", title: "הדמייה" },
//       { src: "./imgaes/residential/LVLUP/cover2.png", title: "הדמייה" },
//       { src: "./imgaes/residential/LVLUP/example1.png", title: "הדמייה" },
//       { src: "./imgaes/residential/LVLUP/example2.png", title: "הדמייה" },
//       { src: "./imgaes/residential/LVLUP/example3.png", title: "הדמייה" },
//     ],
//   },
// ];
