/* ============================================
   MODULE / TESTIMONIALS
   Slider acessível sem dependências externas.
   ============================================ */

export function initTestimonials() {
  document.querySelectorAll("[data-testimonial-track]").forEach((track) => {
    const slider = track.closest("[data-reveal]") || track.parentElement;
    const slides = [...track.querySelectorAll("[data-testimonial-slide]")];
    const dots = slider.querySelector("[data-testimonial-dots]");
    const previous = slider.querySelector("[data-testimonial-prev]");
    const next = slider.querySelector("[data-testimonial-next]");
    if (!slides.length || !dots) return;

    let current = slides.findIndex((slide) => slide.classList.contains("is-active"));
    if (current < 0) current = 0;

    const show = (index) => {
      current = (index + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => {
        const active = slideIndex === current;
        slide.classList.toggle("is-active", active);
        slide.setAttribute("aria-hidden", String(!active));
        slide.setAttribute("aria-labelledby", `${slider.id}-tab-${slideIndex + 1}`);
      });
      [...dots.children].forEach((dot, dotIndex) => {
        const active = dotIndex === current;
        dot.classList.toggle("is-active", active);
        dot.setAttribute("aria-selected", String(active));
        dot.tabIndex = active ? 0 : -1;
      });
    };

    slides.forEach((slide, index) => {
      const slideId = `${slider.id}-slide-${index + 1}`;
      const tabId = `${slider.id}-tab-${index + 1}`;
      slide.id = slideId;
      slide.setAttribute("role", "tabpanel");

      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "testimonials__dot";
      dot.id = tabId;
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-controls", slideId);
      dot.setAttribute("aria-label", `Ver depoimento ${index + 1}`);
      dot.addEventListener("click", () => show(index));
      dots.append(dot);
    });
    previous?.addEventListener("click", () => show(current - 1));
    next?.addEventListener("click", () => show(current + 1));
    slider.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        show(current - 1);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        show(current + 1);
      }
    });
    show(current);
  });
}
