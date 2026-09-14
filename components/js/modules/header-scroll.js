/* ============================================
   MODULE / HEADER SCROLL
   Adiciona .is-scrolled ao header após 50px.
   ============================================ */

export function initHeaderScroll() {
  const header = document.querySelector(".header");
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY >= 50);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // estado inicial
}
