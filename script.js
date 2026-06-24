const menuButton = document.querySelector(".menu-button");
const globalNav = document.querySelector(".global-nav");

if (menuButton && globalNav) {
  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    globalNav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };

  menuButton.addEventListener("click", () => {
    const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(willOpen));
    globalNav.classList.toggle("is-open", willOpen);
    document.body.classList.toggle("menu-open", willOpen);
  });

  globalNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

const tabButtons = document.querySelectorAll("[data-tab]");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.tab;

    tabButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    document.querySelectorAll(".tab-panel").forEach((panel) => {
      const isActive = panel.id === targetId;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
    });
  });
});

const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    const willOpen = button.getAttribute("aria-expanded") !== "true";

    button.setAttribute("aria-expanded", String(willOpen));
    if (answer) {
      answer.hidden = !willOpen;
    }
  });
});