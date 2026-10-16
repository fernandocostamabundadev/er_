/* ============================================
   MODULE / ACTIVE LINK
   Marca o link do menu da secção visível.
   ============================================ */

export function initActiveLink() {
  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll(".nav__link");
  if (!sections.length || !links.length) return;

  const update = () => {
    const current = [...sections].reduce((active, section) => {
      if (section.getBoundingClientRect().top <= 140) return section;
      return active;
    }, sections[0]);

    links.forEach((link) => {
      const active = link.hash === `#${current.id}`;
      link.classList.toggle("active-link", active);
      if (active) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  let scheduled = false;
  window.addEventListener(
    "scroll",
    () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        update();
        scheduled = false;
      });
    },
    { passive: true },
  );
  update();
}
