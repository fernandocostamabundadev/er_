/* ============================================
   MODULE / ANIMATIONS
   GSAP reveals with reduced-motion support.
   ============================================ */

export function initAnimations() {
  const animationEngine = window.gsap;
  const scrollPlugin = window.ScrollTrigger;

  if (!animationEngine || !scrollPlugin) {
    console.warn("[animations] GSAP não carregado — a saltar.");
    return;
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  animationEngine.registerPlugin(scrollPlugin);

  const intro = animationEngine.timeline({
    defaults: { ease: "power3.out", duration: 0.75 },
  });

  intro
    .from(".hero__badge", { autoAlpha: 0, y: 18 })
    .from(".hero__title", { autoAlpha: 0, y: 28 }, "-=0.5")
    .from(".hero__subtitle", { autoAlpha: 0, y: 18 }, "-=0.48")
    .from(".hero__description", { autoAlpha: 0, y: 18 }, "-=0.45")
    .fromTo(
      ".hero__buttons .btn",
      { autoAlpha: 0, y: 14 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.72,
        ease: "power3.out",
        stagger: 0.1,
        clearProps: "opacity,transform,visibility",
        immediateRender: false,
      },
      "-=0.4",
    );

  const reveals = [
    { trigger: ".about", targets: ".about__header, .about__content" },
    { trigger: ".about__cards", targets: ".about__card", stagger: 0.12 },
    { trigger: ".services", targets: ".services__card", stagger: 0.12 },
    { trigger: ".services__cta", targets: ".services__cta" },
    { trigger: ".classes", targets: ".classes__item", stagger: 0.1 },
    {
      trigger: ".classes__courses",
      targets: ".classes__course-item",
      stagger: 0.1,
    },
    { trigger: ".team", targets: ".team__member", stagger: 0.1 },
    {
      trigger: ".testimonials",
      targets: ".testimonials__slider, .testimonials__cta",
      stagger: 0.1,
    },
    {
      trigger: ".contact",
      targets: ".contact .section__header, .contact__card, .contact__detail",
      stagger: 0.1,
    },
    { trigger: ".footer", targets: ".footer__container" },
  ];

  reveals.forEach(({ trigger, targets, stagger = 0 }) => {
    if (!document.querySelector(trigger) || !document.querySelector(targets)) return;

    animationEngine.fromTo(
      targets,
      { autoAlpha: 0, y: 24 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.72,
        ease: "power3.out",
        stagger,
        clearProps: "opacity,transform,visibility",
        scrollTrigger: {
          trigger,
          start: "top 86%",
          once: true,
        },
      },
    );
  });
}
