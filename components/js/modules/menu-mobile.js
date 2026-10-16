/* ============================================
   MODULE / MENU MOBILE
   Abre/fecha menu, fecha ao clicar num link.
   ============================================ */

export function initMenuMobile() {
  const menu = document.getElementById("nav-menu");
  const toggle = document.getElementById("nav-toggle");
  const close = document.getElementById("nav-close");
  const backdrop = document.querySelector("[data-nav-backdrop]");

  if (!menu || !toggle || !close || !backdrop) return;

  const mobile = window.matchMedia("(max-width: 1100px)");
  let previousOverflow = "";

  const setOpen = (isOpen, restoreFocus = false) => {
    if (!mobile.matches && isOpen) return;

    if (isOpen) {
      previousOverflow = document.body.style.overflow;
      menu.classList.add("is-open");
      menu.removeAttribute("aria-hidden");
      menu.inert = false;
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Fechar menu");
      document.body.style.overflow = "hidden";
      backdrop.hidden = false;
      requestAnimationFrame(() => {
        backdrop.classList.add("is-visible");
        menu.querySelector("a[href]")?.focus();
      });
      return;
    }

    const wasOpen = menu.classList.contains("is-open");
    menu.classList.remove("is-open");
    menu.setAttribute("aria-hidden", "true");
    menu.inert = true;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu");
    document.body.style.overflow = previousOverflow;
    backdrop.classList.remove("is-visible");
    backdrop.hidden = true;

    if (restoreFocus && wasOpen && mobile.matches) toggle.focus();
  };

  const syncViewport = () => {
    if (mobile.matches) {
      setOpen(false);
      return;
    }

    menu.classList.add("is-open");
    menu.removeAttribute("aria-hidden");
    menu.inert = false;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu");
    document.body.style.overflow = previousOverflow;
    backdrop.classList.remove("is-visible");
    backdrop.hidden = true;
  };

  toggle.addEventListener("click", () =>
    setOpen(!menu.classList.contains("is-open")),
  );
  close.addEventListener("click", () => setOpen(false, true));
  backdrop.addEventListener("click", () => setOpen(false, true));

  menu.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (!menu.classList.contains("is-open")) return;

    if (event.key === "Escape") {
      setOpen(false, true);
      return;
    }

    if (event.key !== "Tab") return;

    const focusable = [...menu.querySelectorAll("a[href], button:not([disabled])")];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  });

  mobile.addEventListener("change", syncViewport);
  syncViewport();
}
