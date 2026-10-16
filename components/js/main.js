/* ============================================
   NOVA GERAÇÃO — JS Entry Point
   ============================================ */

import { initActiveLink } from "./modules/active-link.js";
import { initAnimations } from "./modules/animations.js";
import { initFooterYear } from "./modules/footer-year.js";
import { initForm } from "./modules/form.js";
import { initHeaderScroll } from "./modules/header-scroll.js";
import { loadComponents } from "./modules/loader.js";
import { initMenuMobile } from "./modules/menu-mobile.js";
import { initTestimonials } from "./modules/testimonials.js";

(async function bootstrap() {
  // 1. HTML primeiro (senão os getElementById devolvem null)
  await loadComponents();

  // 2. Comportamento
  initMenuMobile();
  initHeaderScroll();
  initActiveLink();
  initForm();
  initTestimonials();
  initFooterYear();

  // 3. Animações por último
  initAnimations();
})();
