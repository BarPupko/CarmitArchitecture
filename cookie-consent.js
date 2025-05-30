// cookie-consent.js

document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookie-banner");

  const consent = localStorage.getItem("cookie-consent");
  if (!consent && banner) {
    banner.style.display = "block";
  }

  window.acceptCookies = function () {
    localStorage.setItem("cookie-consent", "accepted");

    // Load Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-DJSP94B1B4");

    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-DJSP94B1B4";
    script.async = true;
    document.head.appendChild(script);

    fadeOutBanner();
  };

  window.rejectCookies = function () {
    localStorage.setItem("cookie-consent", "rejected");
    fadeOutBanner();
  };

  function fadeOutBanner() {
    if (!banner) return;
    banner.style.opacity = "0";
    setTimeout(() => {
      banner.style.display = "none";
    }, 500);
  }
});
