document.addEventListener("DOMContentLoaded", function () {

  const splash = document.getElementById("splash");
  const app = document.getElementById("app");
  const pages = document.querySelectorAll(".page");
  const navItems = document.querySelectorAll(".nav-item");
  const cards = document.querySelectorAll(".card");

  const backBtn = document.getElementById("backBtn");
  const pageTitle = document.getElementById("pageTitle");

  function showPage(pageId, push = true) {

    pages.forEach(p => p.classList.add("hidden"));
    document.getElementById(pageId).classList.remove("hidden");

    pageTitle.innerText =
      pageId.charAt(0).toUpperCase() + pageId.slice(1);

    if (pageId === "home") {
      backBtn.classList.add("hidden");
    } else {
      backBtn.classList.remove("hidden");
    }

    navItems.forEach(btn => {
      btn.classList.remove("active");
      if (btn.dataset.page === pageId) {
        btn.classList.add("active");
      }
    });

    if (push) {
      history.pushState({ page: pageId }, "", "#" + pageId);
    }
  }

  // Splash
  setTimeout(() => {
    splash.style.display = "none";
    app.classList.remove("hidden");

    history.replaceState({ page: "home" }, "", "#home");
    showPage("home", false);
  }, 1200);

  // Bottom nav
  navItems.forEach(btn => {
    btn.addEventListener("click", function () {
      showPage(this.dataset.page);
    });
  });

  // Cards
  cards.forEach(card => {
    card.addEventListener("click", function () {
      showPage(this.dataset.page);
    });
  });

  // Back
  backBtn.addEventListener("click", function () {
    history.back();
  });

  // Browser back
  window.addEventListener("popstate", function (event) {
    if (event.state && event.state.page) {
      showPage(event.state.page, false);
    } else {
      showPage("home", false);
    }
  });

});
