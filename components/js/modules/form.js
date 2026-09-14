/* ============================================
   MODULE / FORM
   Validação + envio via WhatsApp (sem backend).
   ============================================ */

const WHATSAPP_NUMBER = "258845384097"; // Matola, Moçambique

export function initForm() {
  const form = document.querySelector("#contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const nome = (data.get("nome") || "").toString().trim();
    const idade = (data.get("idade") || "").toString().trim();
    const classe = (data.get("classe") || "").toString().trim();
    const mensagem = (data.get("mensagem") || "").toString().trim();

    if (!nome || !classe) {
      alert("Preenche o nome e a classe.");
      return;
    }

    const texto = encodeURIComponent(
      `Olá! Quero inscrever-me no Centro Nova Geração.\n` +
        `Nome: ${nome}\n` +
        `Idade: ${idade}\n` +
        `Classe: ${classe}\n` +
        `Mensagem: ${mensagem}`,
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`, "_blank");
  });
}
