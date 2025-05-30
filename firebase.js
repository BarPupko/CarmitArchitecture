
function acceptCookies() {
  document.getElementById("cookie-banner").style.display = "none";
  // Enable GA tracking
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
}
