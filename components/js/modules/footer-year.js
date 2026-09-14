/* ============================================
   MODULE / FOOTER YEAR
   Atualiza o ano do copyright automaticamente.
   ============================================ */

export function initFooterYear() {
  const el = document.getElementById("footer-year");
  if (!el) return;
  el.textContent = new Date().getFullYear();
}
