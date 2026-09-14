/* ============================================
   MODULE / MENU MOBILE
   Abre/fecha menu, fecha ao clicar num link.
   ============================================ */

export function initMenuMobile() {
  const menu = document.getElementById("nav-menu");
  const toggle = document.getElementById("nav-toggle");
  const close = document.getElementById("nav-close");

  if (!menu || !toggle || !close) return;

  const open = () => {
    menu.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };

  const shut = () => {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  toggle.addEventListener("click", open);
  close.addEventListener("click", shut);

  // Fecha ao clicar num link
  menu.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", shut);
  });

  // Fecha com ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("is-open")) shut();
  });
}
