/* ============================================
   MODULE / LOADER
   Carrega partials HTML em [data-component]
   ============================================ */

const COMPONENTS = [
  { name: "header", path: "components/partials/header.html" },
  { name: "hero", path: "components/partials/hero.html" },
  { name: "about", path: "components/partials/about.html" },
  { name: "services", path: "components/partials/services.html" },
  { name: "classes", path: "components/partials/classes.html" },
  { name: "team", path: "components/partials/team.html" },
  { name: "testimonials", path: "components/partials/testimonials.html" },
  { name: "contact", path: "components/partials/contact.html" },
  { name: "footer", path: "components/partials/footer.html" },
];

async function loadOne({ name, path }) {
  const target = document.querySelector(`[data-component="${name}"]`);
  if (!target) {
    console.warn(`[loader] Alvo "${name}" não existe no HTML.`);
    return;
  }

  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    target.innerHTML = await res.text();
  } catch (err) {
    console.error(`[loader] Falha ao carregar ${path}:`, err);
    target.innerHTML = `
      <div class="loader-error" role="alert">
        <p>Não foi possível carregar a secção "${name}".</p>
        <button type="button" onclick="location.reload()">Tentar novamente</button>
      </div>`;
  }
}

export async function loadComponents() {
  await Promise.all(COMPONENTS.map(loadOne));
}
