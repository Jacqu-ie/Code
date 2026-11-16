// Références aux contrôles et au panneau de navigation du header.
const menuButton = document.querySelector(".header-burger");
const navigation = document.querySelector(".header-navigation");
const menuBackdrop = document.querySelector(".header-menu-backdrop");

// Synchronise l'affichage de la sidebar, le voile et l'état accessible du bouton.
function setMenuOpen(isOpen) {
  navigation.classList.toggle("is-open", isOpen);
  menuBackdrop.classList.toggle("is-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  // aria-label indique aux lecteurs d'écran si le bouton ouvre ou ferme le menu.
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Fermer le menu" : "Ouvrir le menu",
  );
  document.body.classList.toggle("menu-open", isOpen);
}

// Le bouton burger bascule la sidebar.
menuButton.addEventListener("click", () => {
  setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
});

// Un clic sur le voile ferme la sidebar sans sélectionner de lien.
menuBackdrop.addEventListener("click", () => setMenuOpen(false));

// La navigation se referme après le choix d'une destination.
navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

// Échap ferme la sidebar et rend le focus au bouton qui l'a ouverte.
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuButton.getAttribute("aria-expanded") === "true"
  ) {
    setMenuOpen(false);
    menuButton.focus();
  }
});
