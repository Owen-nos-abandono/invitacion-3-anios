document.addEventListener("DOMContentLoaded", () => {
  const confirmBtn = document.getElementById("confirmBtn");

  // Número de prueba indicado para la invitación.
  const whatsappNumber = "524427766714";

  confirmBtn.addEventListener("click", () => {
    const message =
      "¡Hola! Quiero confirmar mi asistencia al cumpleaños de 3 años de Melina. " +
      "¡Muchas gracias por la invitación! ";

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  });
});
