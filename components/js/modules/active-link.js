/* ============================================
   MODULE / ACTIVE LINK
   Marca o link do menu da secção visível.
   ============================================ */

export function initActiveLink() {
  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll(".nav__link");
  if (!sections.length || !links.length) return;

  const onScroll = () => {
    const y = window.scrollY + 120;

    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const bottom = top + sec.offsetHeight;
      const id = sec.id;
      const link = document.querySelector(`.nav__link[href="#${id}"]`);
      if (!link) return;

      link.classList.toggle("active-link", y >= top && y < bottom);
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}
