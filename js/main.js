document.addEventListener("DOMContentLoaded", () => {

  // ---------- TEXT BRANDING ----------
  function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  setText("gymName", gymConfig.name);
  setText("gymName2", gymConfig.name);
  setText("gymNameFooter", gymConfig.name);

  const heroTagline = document.getElementById("heroTagline");
  if (heroTagline) {
    heroTagline.textContent = gymConfig.tagline + " • " + gymConfig.city;
  }

  // ---------- CALL ----------
  const callBtn = document.getElementById("callBtn");
  const phoneLink = document.getElementById("phoneLink");

  if (callBtn) {
    callBtn.href = "tel:" + gymConfig.phone;
  }

  if (phoneLink) {
    phoneLink.href = "tel:" + gymConfig.phone;
    phoneLink.textContent = gymConfig.phone; // FIXED (no extra +)
  }

  // ---------- WHATSAPP ----------
  const whatsappLink = document.getElementById("whatsappLink");

  if (whatsappLink) {
    whatsappLink.href =
      "https://wa.me/" +
      gymConfig.whatsapp +
      "?text=Hi%20I%20want%20to%20join%20your%20gym";
    whatsappLink.target = "_blank";
  }

  // ---------- LOCATION ----------
  const address = document.getElementById("gymAddress");

  if (address) {
    address.innerHTML =
      `<a href="${gymConfig.mapLink}" target="_blank">${gymConfig.addressText}</a>`;
  }

});
document.addEventListener("DOMContentLoaded", () => {

  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (!menuToggle || !navMenu) return;

  /* Toggle menu */
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    navMenu.classList.toggle("active");
  });

  /* Close menu when clicking a link */
  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });

  /* Click outside to close */
  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      navMenu.classList.remove("active");
    }
  });

  /* Active link highlight */
  const currentPage = window.location.pathname.split("/").pop();

  navMenu.querySelectorAll("a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active-link");
    }
  });

});

