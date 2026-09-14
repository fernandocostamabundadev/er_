/* ============================================
   MODULE / ANIMATIONS
   GSAP — só corre se gsap existir no window.
   ============================================ */

export function initAnimations() {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn("[animations] GSAP não carregado — a saltar.");
    return;
  }

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

  gsap.registerPlugin(ScrollTrigger);

  // HERO (entrada imediata)
  gsap.from(".hero__badge", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power3.out",
  });
  gsap.from(".hero__title", {
    opacity: 0,
    y: 60,
    duration: 1.0,
    delay: 0.1,
    ease: "power3.out",
  });
  gsap.from(".hero__subtitle", {
    opacity: 0,
    y: 40,
    duration: 0.8,
    delay: 0.3,
    ease: "power3.out",
  });
  gsap.from(".hero__description", {
    opacity: 0,
    y: 40,
    duration: 0.8,
    delay: 0.45,
    ease: "power3.out",
  });
  // ABOUT
  gsap.from(".about__data", {
    scrollTrigger: { trigger: ".about", start: "top 80%" },
    opacity: 0,
    y: 50,
    duration: 1,
  });
  gsap.from(".about__stat", {
    scrollTrigger: { trigger: ".about__stats", start: "top 85%" },
    opacity: 0,
    y: 20,
    duration: 0.6,
    stagger: 0.1,
  });

  // SERVICES
  gsap.from(".services__card", {
    scrollTrigger: { trigger: ".services", start: "top 80%" },
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.15,
  });

  // CLASSES
  gsap.from(".classes__item", {
    scrollTrigger: { trigger: ".classes", start: "top 80%" },
    opacity: 0,
    y: 30,
    duration: 0.7,
    stagger: 0.12,
  });
  gsap.from(".classes__course-item", {
    scrollTrigger: { trigger: ".classes__courses", start: "top 85%" },
    opacity: 0,
    y: 30,
    duration: 0.7,
    stagger: 0.15,
  });

  // TEAM
  gsap.from(".team__member", {
    scrollTrigger: { trigger: ".team", start: "top 80%" },
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.15,
  });

  // CONTACT
  gsap.from(".contact__data, .contact__info", {
    scrollTrigger: { trigger: ".contact", start: "top 80%" },
    opacity: 0,
    y: 30,
    duration: 0.9,
    stagger: 0.15,
  });

  // FOOTER
  gsap.from(".footer__container", {
    scrollTrigger: { trigger: ".footer", start: "top 90%" },
    opacity: 0,
    y: 30,
    duration: 0.9,
  });
}
