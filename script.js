// firebase

// navbar change on scroll

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
    src: "./imgaes/interior/washington.jpg",
    title: "The Main Library",
    location: "Washington, D.C.",
    exactLocation: { x: 38.89243280246961, y: -77.00444342366481 },
    category: "interior",
    objectPosition: "top",
  },
  {
    src: "./imgaes/landscape/desert.png",
    title: "Desert and the sea",
    location: "Park Ha Amaqim",
    exactLocation: { x: 32.72370464226655, y: 35.11077493651688 },
    category: ["landscape", "concept"],
    objectPosition: "top",
  },
  {
    src: "./imgaes/slides/onethewater.png",
    title: "On the water",
    location: "Park Ha Amaqim",
    exactLocation: { x: 32.72370464226655, y: 35.11077493651688 },
    category: ["Graphics", "concept"],
    objectPosition: "top",
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

  images.forEach((img, index) => {
    const item = document.createElement("div");
    item.classList.add("gallery-item");

    const image = document.createElement("img");
    image.src = img.src;
    image.alt = img.title;
    const CameraInfo = document.createElement("div");
    CameraInfo.className = "CameraInfo";
    CameraInfo.innerHTML =
      '<i class="fa-solid fa-camera"></i> ' + "Click for Camera Info";
    console.log("before the function");
    // Apply position if defined
    image.style.objectPosition = img.objectPosition || "center";
    item.addEventListener("click", () => {
      storedViews++;
      localStorage.setItem(viewsKey, storedViews);
      viewCounter.textContent = `👁️ ${storedViews}`;

      lightboxImg.src = img.src;
      document.getElementById("lightbox-title").textContent = img.title;
      document.getElementById("lightbox-location").textContent = img.location; // you can remove this line if we only want inside the map

      //deal with horizontal and vertical images
      const isPortrait = lightboxImg.naturalHeight > lightboxImg.naturalWidth;
      lightboxImg.classList.toggle("portrait", isPortrait);

      // Extract EXIF data
      EXIF.getData(image, function () {
        const make = EXIF.getTag(this, "Make") || "Unknown Make";
        const model = EXIF.getTag(this, "Model") || "Unknown Model";
        const iso = EXIF.getTag(this, "ISOSpeedRatings") || "Unknown ISO";
        const exposure = EXIF.getTag(this, "ExposureTime");
        const fNumber = EXIF.getTag(this, "FNumber");

        const exposureStr = exposure
          ? `1/${Math.round(1 / exposure)}s`
          : "Unknown Exposure";
        const fNumberStr = fNumber ? `f/${fNumber}` : "Unknown Aperture";
        // Extract location data
        // Extract coordinates from exactLocation
        const lat = img.exactLocation.x;
        const lng = img.exactLocation.y;
        const locationIQKey = "pk.069fe51b456f904e1abfc7ab645dd9bd";

        // Static map image using LocationIQ
        const staticMapUrl = `https://maps.locationiq.com/v3/staticmap?key=${locationIQKey}&center=${lat},${lng}&zoom=13&size=300x150&markers=icon:small-red-cutout|${lat},${lng}`;

        // Optional: clickable Google Maps link
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

        document.getElementById("lightbox-exif").innerHTML = `
  <a href="${googleMapsUrl}" target="_blank" style="display: inline-block; margin-bottom: 10px;">
    <img src="${staticMapUrl}" alt="Location Map" style="width: 100%; border-radius: 8px;">
  </a>
  <p><strong>Camera:</strong> ${make} ${model}</p>
  <p><strong>ISO:</strong> ${iso}</p>
  <p><strong>Aperture:</strong> ${fNumberStr}</p>
  <p><strong>Shutter Speed:</strong> ${exposureStr}</p>
`;
      });

      lightbox.classList.remove("hidden");
    });
    console.log("after the function");

    const caption = document.createElement("div");
    caption.className = "caption";
    caption.textContent = img.title;

    const pin = document.createElement("div");
    pin.className = "pin";
    pin.innerHTML = '<i class="fa-solid fa-location-dot"></i> ' + img.location;

    const viewsKey = imageKeys[index];
    let storedViews = parseInt(localStorage.getItem(viewsKey)) || 0;

    const viewCounter = document.createElement("div");
    viewCounter.className = "views";
    viewCounter.textContent = `👁️ ${storedViews}`;

    //portrait and landscape images
    const isPortrait = img.naturalHeight > img.naturalWidth;
    image.classList.toggle("portrait", isPortrait);

    // Append all elements to the image block
    item.appendChild(image);
    item.appendChild(caption);
    item.appendChild(pin);
    item.appendChild(viewCounter);
    item.appendChild(CameraInfo);

    // When image is clicked
    item.addEventListener("click", () => {
      // Increase view count and store it
      localStorage.setItem(viewsKey, storedViews);
      viewCounter.textContent = `👁️ ${storedViews}`;

      // Show image in lightbox
      lightboxImg.src = img.src;
      lightbox.classList.remove("hidden");
    });

    // Add the item to the gallery
    gallery.appendChild(item);
  });

  // Close lightbox by clicking the "X"
  closeBtn.addEventListener("click", () => {
    lightbox.classList.add("hidden");
  });

  // Close lightbox by clicking the background (but not the image itself)
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.add("hidden");
    }
  });
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

// accessability
nl_pos = "tr";
nl_color = "yellow";
nl_dir = "./nagishli_v3.0_beta_rev170120200211/nagishli_v3_beta/";
nl_lang = "he";
