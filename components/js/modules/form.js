/* ============================================
   MODULE / FORM
   Validação + envio via WhatsApp (sem backend).
   ============================================ */

const WHATSAPP_NUMBER = "258849112553";

export function initForm() {
  const form = document.querySelector("#contact-form");
  if (!form) return;
  const status = document.querySelector("#contact-form-status");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const nome = (data.get("nome") || "").toString().trim();
    const idade = (data.get("idade") || "").toString().trim();
    const classe = (data.get("classe") || "").toString().trim();
    const mensagem = (data.get("mensagem") || "").toString().trim();

    if (!nome || !classe) {
      if (status) status.textContent = "Preencha o nome e a classe para continuar.";
      return;
    }

    if (status) status.textContent = "";

    const texto = encodeURIComponent(
      `Olá! Quero inscrever-me no Centro Nova Geração.\n` +
        `Nome: ${nome}\n` +
        `Idade: ${idade}\n` +
        `Classe: ${classe}\n` +
        `Mensagem: ${mensagem}`,
    );

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`,
      "_blank",
      "noopener,noreferrer",
    );
  });
}
