/* ============================================
   MODULE / SMOOTH SCROLL
   Compensa a altura do header fixo.
   ============================================ */

export function initSmoothScroll() {
  const header = document.querySelector(".header");
  const offset = header ? header.offsetHeight : 0;

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (id === "#" || id.length < 2) return;

      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}
