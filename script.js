// firebase

// navbar change on scroll
// carousel - moving images left to right

// about me section

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible"); // ❗ fades out when leaving view
      }
    });
  },
  {
    threshold: 0.2,
  }
);

document.querySelectorAll(".scroll-reveal").forEach((el) => {
  revealObserver.observe(el);
});

// scroll

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// head slider

(function () {
  const slides = document.querySelectorAll(".slider .slide");
  const prevBtn = document.querySelector(".nav-prev");
  const nextBtn = document.querySelector(".nav-next");
  const progressBar = document.querySelector(".progress-bar");
  let currentIndex = 0;
  const slideCount = slides.length;
  const intervalTime = 6000; // 6 seconds
  let timer;

  function resetProgress() {
    progressBar.style.transition = "none";
    progressBar.style.width = "0";
    // Force reflow
    progressBar.offsetWidth;
    progressBar.style.transition = `width ${intervalTime}ms linear`;
    progressBar.style.width = "100%";
  }

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
    resetProgress();
  }

  function goTo(index) {
    clearInterval(timer);
    currentIndex = (index + slideCount) % slideCount;
    showSlide(currentIndex);
    startTimer();
  }

  function nextSlide() {
    goTo(currentIndex + 1);
  }
  function prevSlide() {
    goTo(currentIndex - 1);
  }

  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  function startTimer() {
    resetProgress();
    timer = setInterval(nextSlide, intervalTime);
  }

  // Initialize
  showSlide(currentIndex);
  startTimer();
})();

// bubble active button clicked -.333333333//todo redundant code ????
document.querySelectorAll(".category-button").forEach((button) => {
  button.addEventListener("click", () => {
    // Remove 'active' class from all buttons
    document
      .querySelectorAll(".category-button")
      .forEach((btn) => btn.classList.remove("active"));

    // Add 'active' class to the clicked button
    button.classList.add("active");

    // Filter the gallery
    const selectedCategory = button.getAttribute("data-category");
    renderGallery(selectedCategory);
  });
});
//
// Array of image objects
const images = [
  {
    src: "./imgaes/concept/capsules/capsuls.png",
    title: "ReStreet | קפסולות לדרי רחוב",
    date: 'תשפ"ב | סמסטר אביב 2022',
    location: "Hadar Neighborhood, Haifa",
    exactLocation: { x: 32.8151, y: 34.9984 },
    category: "concept",
    objectPosition: "top",
    description: `הנושא הנחקר | אוכלוסיית דרי הרחוב וצרכיהם הפיזיים, החברתיים והנפשיים.`,
    description1: `קורס יישום טכנולוגי | קפסולות שינה עבור דרי הרחוב בשכונת הדר, חיפה.`,
    extraParagraph: `דרי הרחוב מתמודדים עם מצוקה קיומית מתמשכת, כאשר הרחוב משמש להם בית בהיעדר אפשרויות אחרות. הפרויקט שלנו מציע מענה כוללני לשיפור תנאי חייהם בשני מישורים – הפיזי והחברתי. כאדריכלים לעתיד, אנו עוסקים בשאלה "מהו בית?" ומבינים שעבור דרי הרחוב, הרחוב הוא חלק בלתי נפרד מזהותם. לכן לא ניתן פשוט להוציא אותם מהמרחב העירוני או לנסות להפריד בינם לבין הרחוב. לפיכך, הפרויקט מציע יצירת מרחב רחוב חדשני ומכבד, שמותאם לצרכים שלהם ומשתלב בחזות העיר.

לאחר מחקר מעמיק, בחרנו להתמקד בסמטה מוזנחת בשכונת הדר בחיפה, סמוך ל"יחידה לסיוע לדרי רחוב" ברחוב דבורה. מיקום זה מאפשר לנו להציע פתרון שמשלב את תמיכת הקהילה עם מרחב מותאם, ובכך לקדם סביבה נגישה ותומכת.

`,
    credits: "מנחים     אדר' אליעזר הירש | סטודיו     אדר' שגית וקנין בלפרמן",
    relatedImages: [
      { src: "./imgaes/concept/capsules/capsuls.png", title: "הדמייה" },
      { src: "./imgaes/concept/capsules/caps2.png", title: "העמדה" },
      { src: "./imgaes/concept/capsules/caps4.png", title: " קפסולות א'" },
      { src: "./imgaes/concept/capsules/caps5.png", title: "קפסולות ב" },
      { src: "./imgaes/concept/capsules/caps6.png", title: "פרטי היישום" },
      { src: "./imgaes/concept/capsules/caps3.png", title: "הדמייה" },
    ],
  },
  {
    src: "./imgaes/public/insideOut/cover.png",
    title: "Inside-Out",
    date: 'תשפ"ד | סמסטר אביב 2024',
    location: "Eilat, Israel",
    exactLocation: { x: 29.55805, y: 34.94821 },
    category: ["public", "urban", "concept"],
    objectPosition: "top",
    description: `סטודיו מבנה מורכב | קמפוס חינוכי-חדשני-חברתי, אילת.`,
    description1: `הנושא הנחקר | חדשנות, קהילה, מגורים, תנועה, חיפוש וגילוי.`,
    extraParagraph: `כדי להשיג מרקם שיהווה תשתית להשגת עירוניות טובה, הפרויקט מנסה לחולל מהפך במרכז העיר אילת וללכדו ליחידה עירונית בעלת איכויות גבוהות בכל היבט. בנוסף, במיקום הייחודי של אילת המרוחקת מהמרכזים העירוניים הגדולים, קמפוס חינוכי, תרבותי וחברתי נושא עימו חשיבות רבה להתפתחות העירונית והחברתית. בנוסף, הוא יכול לספק גישה למשאבי אומנות מגוונים, סדנאות, קורסים ואירועי תרבות, המעצימים את הקהילה המקומית. כמו כן, המרכז יכול להוות פלטפורמה לפיתוח כישורים אומנותיים לחיזוק הקשרים החברתיים ולהעשרת חיי התרבות של אילת. הקמפוס תוכנן כך שמבחוץ אין אפשרות להבין מה מתרחש בפנים ולאחר החיפוש, מגלים חצר עירונית, אשר תחומה בפונקציות המגוונות שהמרכז מציע. 

`,
    credits:
      "מנחים     אדר' גלי ליכטנוב וד''ר מרגלית | סטודיו     אדר' אורי רונן ,אדר' עמי שנער",
    relatedImages: [
      { src: "./imgaes/public/insideOut/cover.png", title: "הדמייה" },
      { src: "./imgaes/public/insideOut/Shetah.png", title: "ניתוח שטח" },
      {
        src: "./imgaes/public/insideOut/Involvment.png",
        title: "ניתוח אתר התערבות",
      },
      {
        src: "./imgaes/public/insideOut/Plans.png",
        title: "תוכניות וחזיתות",
      },
      {
        src: "./imgaes/public/insideOut/Plans2.png",
        title: "תוכניות וחזיתות",
      },
      { src: "./imgaes/public/insideOut/hatahim.png", title: "חתכים " },
    ],
  },
  {
    src: "./imgaes/Slides/bluerails.png",
    title: "מפגש רחוב",
    date: 'תשפ"ד | סמסטר אביב 2023',
    location: "Jerusalem, Israel",
    exactLocation: { x: 29.55805, y: 34.94821 },
    category: ["public", "residential", "urban", "concept"],
    objectPosition: "top",
    description: `קורס מורכבות באדריכלות | החייאת שוק תלפיות בתפר סירקין-יחיאל, חיפה.`,
    description1: `הנושא הנחקר | טיפולוגיות בנייה ומה שביניהם, החתך העירוני והחלל העירוני.`,
    extraParagraph: `הפרויקט עוסק בעיצוב עירוני מחדש בחלל נתון, בשוק תלפיות בעיר חיפה. אזור ההתערבות נמצא בחלקו ההיסטורי והצפוני של רובע הדר וההתמקדות היא בתפר סירקין-יחיאל. תפר זה הוא אחת הנקודות הרבות בהן נוצר מפגש בין המבנים המזוהים עם הסגנון הבינלאומי למבנים המזוהים עם הבנייה הערבית. הקווים המנחים הם לייצר חיבור בין שתי הטיפולוגיות השונות, המוזכרות לעיל, לחקור את החתך העירוני שנוצר ולהתמקד בעיקר בחלל העירוני שנוצר ביניהם. בנוסף, נעשה טיפול בחזיתות ובחיבור בין שכבות המבנה. המטרה המרכזית היא לייצר צריכה מוגברת של המרחב ולהנגישו לציבור הרחב.

`,
    credits: "מנחה     אדר' בלו פיינרו | תכנון משותף עם שיר קפלן",
    relatedImages: [
      { src: "./imgaes/public/MifgashRehov/Hadmaya.png", title: "הדמייה" },
      { src: "./imgaes/public/MifgashRehov/Nituah.png", title: "ניתוח שטח" },
      { src: "./imgaes/public/MifgashRehov/Nituah2.png", title: "ניתוח שטח" },
      {
        src: "./imgaes/public/MifgashRehov/MainObjectives.png",
        title: "נקודות נבחרות",
      },
      {
        src: "./imgaes/public/MifgashRehov/MainObjectives2.png",
        title: "נקודות נבחרות",
      },
      {
        src: "./imgaes/public/MifgashRehov/MainObjectives3.png",
        title: "נקודות נבחרות",
      },
      { src: "./imgaes/Slides/bluerails.png", title: "הדמייה" },
    ],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".gallery");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const closeBtn = document.querySelector(".close");

  // Keys to track each image separately in localStorage
  const imageKeys = [
    "img1",
    "img2",
    "img3",
    "img4",
    "img5",
    "img6",
    "img7",
    "img8",
    "img9",
    "img10",
    "img11",
    "img12",
    "img13",
    "img14",
    "img15",
  ];

  // Loop over each image and render it in the gallery
  gallery.innerHTML = ""; // ✅ Clear the gallery before rendering

  let currentZoomImages = [];
  let currentZoomIndex = 0;

  const zoomOverlay = document.getElementById("zoom-overlay");
  const zoomImage = document.getElementById("zoom-image");
  const zoomClose = document.getElementById("zoom-close");
  const zoomPrev = document.getElementById("zoom-prev");
  const zoomNext = document.getElementById("zoom-next");
  zoomClose.addEventListener("click", () => {
    zoomOverlay.classList.add("hidden");
    document.body.classList.remove("no-scroll");
  });

  zoomOverlay.addEventListener("click", (e) => {
    // Optional: click outside the image closes too
    if (e.target === zoomOverlay) {
      zoomOverlay.classList.add("hidden");
    }
  });

  images.forEach((img, index) => {
    const item = document.createElement("div");
    item.classList.add("gallery-item");

    const image = document.createElement("img");
    image.src = img.src;
    image.alt = img.title;
    image.classList.add("gallery-image");

    // Object position
    const isPortrait = image.naturalHeight > image.naturalWidth;
    image.classList.toggle("portrait", isPortrait);
    image.style.objectPosition = img.objectPosition || "center";

    // View counter
    const viewsKey = `img_${index}`;
    let storedViews = parseInt(localStorage.getItem(viewsKey)) || 0;
    const viewCounter = document.createElement("div");
    viewCounter.className = "views";
    viewCounter.textContent = `👁️ ${storedViews}`;

    // Image click logic
    item.addEventListener("click", () => {
      storedViews++;
      localStorage.setItem(viewsKey, storedViews);
      viewCounter.textContent = `👁️ ${storedViews}`;
      lightbox.classList.remove("hidden");
      document.body.classList.add("no-scroll");

      closeBtn.addEventListener("click", () => {
        lightbox.classList.add("hidden");
        document.body.classList.remove("no-scroll");
      });
      lightboxImg.src = img.src;

      // Description
      document.getElementById("lightbox-description").textContent =
        img.description || "";
      document.getElementById("lightbox-description1").textContent =
        img.description1 || "";

      // Map
      const lat = img.exactLocation.x;
      const lng = img.exactLocation.y;
      const staticMapUrl = `https://maps.locationiq.com/v3/staticmap?key=pk.069fe51b456f904e1abfc7ab645dd9bd&center=${lat},${lng}&zoom=13&size=300x150&markers=icon:small-red-cutout|${lat},${lng}`;
      const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
      document.getElementById("lightbox-map").innerHTML = `
        <a href="${googleMapsUrl}" target="_blank" style="display: inline-block; margin-bottom: 10px;">
          <img src="${staticMapUrl}" alt="Location Map" style="width: 100%; border-radius: 8px;">
        </a>
      `;
      document.getElementById("lightbox-title").textContent = img.title || "";
      document.getElementById("lightbox-date").textContent = img.date || "";
      document.getElementById("lightbox-description").textContent =
        img.description || "";
      document.getElementById("lightbox-description1").textContent =
        img.description1 || "";
      document.getElementById("lightbox-extra").textContent =
        img.extraParagraph || "";
      document.getElementById("lightbox-credits").textContent =
        img.credits || "";

      // Related images
      const galleryDiv = document.getElementById("lightbox-gallery");
      galleryDiv.innerHTML = "";
      (img.relatedImages || []).slice(0, 7).forEach((related) => {
        const thumbWrapper = document.createElement("div");

        const thumb = document.createElement("img");
        thumb.src = related.src;
        thumb.alt = related.title;

        let zoomTimeout;

        thumb.addEventListener("click", () => {
          // Find index of clicked image in relatedImages
          currentZoomImages = img.relatedImages;
          currentZoomIndex = index; // or set it based on thumb.src match

          // Set first image
          document.getElementById("zoom-image").src =
            currentZoomImages[currentZoomIndex].src;
          zoomOverlay.classList.remove("hidden");
          document.body.classList.add("no-scroll");

          document.getElementById("zoom-prev").addEventListener("click", () => {
            currentZoomIndex =
              (currentZoomIndex - 1 + currentZoomImages.length) %
              currentZoomImages.length;
            document.getElementById("zoom-image").src =
              currentZoomImages[currentZoomIndex].src;
          });

          document.getElementById("zoom-next").addEventListener("click", () => {
            currentZoomIndex =
              (currentZoomIndex + 1) % currentZoomImages.length;
            document.getElementById("zoom-image").src =
              currentZoomImages[currentZoomIndex].src;
          });

          zoomClose.addEventListener("click", () => {
            zoomOverlay.classList.add("hidden");
            document.body.classList.remove("no-scroll");
          });

          currentZoomImages = img.relatedImages;
          currentZoomIndex = currentZoomImages.findIndex(
            (related) => related.src === thumb.src
          );
          if (currentZoomIndex === -1) currentZoomIndex = 0;

          updateZoomImage();

          zoomOverlay.classList.remove("hidden");
          document.body.classList.add("no-scroll");
        });

        const title = document.createElement("div");
        title.className = "thumb-title";
        title.textContent = related.title;

        thumbWrapper.appendChild(thumb);
        thumbWrapper.appendChild(title);
        galleryDiv.appendChild(thumbWrapper);
      });
    });

    // Optional: caption
    const caption = document.createElement("div");
    caption.className = "caption";
    caption.textContent = img.title;

    item.appendChild(image);
    item.appendChild(caption);
    item.appendChild(viewCounter);
    gallery.appendChild(item);

    // Close with X button
    const closeBtn = document.querySelector(".close");
    closeBtn.addEventListener("click", () => {
      lightbox.classList.add("hidden");
    });
    zoomPrev.addEventListener("click", () => {
      currentZoomIndex =
        (currentZoomIndex - 1 + currentZoomImages.length) %
        currentZoomImages.length;
      updateZoomImage();
    });

    zoomNext.addEventListener("click", () => {
      currentZoomIndex = (currentZoomIndex + 1) % currentZoomImages.length;
      updateZoomImage();
    });

    zoomClose.addEventListener("click", () => {
      zoomOverlay.classList.add("hidden");
      document.body.classList.remove("no-scroll");
    });

    // Close by clicking outside content
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.classList.add("hidden");
      }
    });
  });
});
// Close lightbox
document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("lightbox").classList.add("hidden");
  document.body.classList.remove("no-scroll");
});

document.getElementById("lightbox").addEventListener("click", (e) => {
  if (e.target.id === "lightbox") {
    document.getElementById("lightbox").classList.add("hidden");
    document.body.classList.remove("no-scroll");
  }
});

// Category filtering
document.addEventListener("DOMContentLoaded", () => {
  const categoryButtons = document.querySelectorAll(".category-button");
  const galleryItems = document.querySelectorAll(".gallery-item");
  console.log("clicked");
  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedCategory = button
        .getAttribute("data-category")
        .toLowerCase();

      galleryItems.forEach((item, index) => {
        const img = images[index];

        if (!img) {
          item.style.display = "none";
          return;
        }

        let itemCategories = img.category;

        // Ensure itemCategories is always an array
        if (!Array.isArray(itemCategories)) {
          itemCategories = [itemCategories];
        }

        // Lowercase all categories for comparison
        const lowerCaseCategories = itemCategories.map((cat) =>
          cat.toLowerCase()
        );

        if (
          selectedCategory === "all" ||
          lowerCaseCategories.includes(selectedCategory)
        ) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });

      // Highlight the active button
      categoryButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });
});
//hamburger menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    document.body.classList.toggle("no-scroll");

    const isOpen = navLinks.classList.contains("show");

    hamburger.innerHTML = isOpen ? "✖" : "☰";
    hamburger.style.backgroundColor = isOpen ? "#fff" : "transparent";
    hamburger.style.color = isOpen ? "#000" : "var(--text-color)";
  });
});
//
// Dark Theme
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("theme-toggle");

  console.log("Toggle button found:", toggleButton); // ✅ SHOULD LOG!

  if (!toggleButton) {
    console.error("Toggle button not found in DOM!");
    return;
  }

  const currentTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", currentTheme);

  toggleButton.innerHTML =
    currentTheme === "dark"
      ? '<i class="fa-solid fa-moon"></i>'
      : '<i class="fa-solid fa-sun"></i>';

  toggleButton.addEventListener("click", () => {
    console.log("Theme toggle clicked!"); // ✅ SHOULD LOG ON CLICK

    const theme = document.documentElement.getAttribute("data-theme");
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    toggleButton.innerHTML =
      newTheme === "dark"
        ? '<i class="fa-solid fa-moon"></i>'
        : '<i class="fa-solid fa-sun"></i>';
  });
});

const isPortrait = img.naturalHeight > img.naturalWidth;
image.classList.toggle("portrait", isPortrait);
if (!isPortrait) {
  image.style.objectPosition = img.objectPosition || "center";
}

//// progress bar
function updateZoomImage() {
  zoomImage.src = currentZoomImages[currentZoomIndex].src;
}
// accessability
nl_pos = "tr";
nl_color = "yellow";
nl_dir = "./nagishli_v3.0_beta_rev170120200211/nagishli_v3_beta/";
nl_lang = "he";
