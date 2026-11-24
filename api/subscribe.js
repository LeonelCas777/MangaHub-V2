
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({
      message: "Método no permitido.",
    });
  }

  const email =
    typeof req.body?.email === "string"
      ? req.body.email.trim().toLowerCase()
      : "";

  if (!email || email.length > 254 || !EMAIL_REGEX.test(email)) {
    return res.status(400).json({
      message: "Ingresá una dirección de email válida.",
    });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_LIST_ID);

  if (!apiKey || !Number.isInteger(listId) || listId <= 0) {
    console.error("Falta configurar BREVO_API_KEY o BREVO_LIST_ID.");
    return res.status(500).json({
      message: "El formulario no está disponible por el momento.",
    });
  }

  try {
    const brevoResponse = await fetch(
      "https://api.brevo.com/v3/contacts",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          "api-key": apiKey,
        },
        body: JSON.stringify({
          email,
          listIds: [listId],
          updateEnabled: true,
        }),
      }
    );

    if (!brevoResponse.ok) {
      const details = await brevoResponse.text();
      console.error("Brevo rechazó el registro:", brevoResponse.status, details);

      return res.status(502).json({
        message: "No pudimos registrar tu email. Intentá nuevamente más tarde.",
      });
    }

    return res.status(200).json({
      message: "Email registrado correctamente.",
    });
  } catch (error) {
    console.error("Error al conectar con Brevo:", error);

    return res.status(502).json({
      message: "No pudimos conectar con el servicio. Intentá nuevamente más tarde.",
    });
  }
}
