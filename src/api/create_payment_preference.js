export const createPaymentPreference = async (
  items,
  externalReference,
  invoiceDetails
) => {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  if (!items || items.length === 0) {
    console.error(
      "Error: No se proporcionaron artículos para la preferencia de pago."
    );
    throw new Error(
      "No se proporcionaron artículos para la preferencia de pago."
    );
  }

  if (!externalReference) {
    console.error(
      "Error: No se proporcionó una referencia externa para la preferencia de pago."
    );
    throw new Error(
      "No se proporcionó una referencia externa para la preferencia de pago."
    );
  }

  try {
    const response = await fetch(
      `${BASE_URL}/api/mercadopago/create_preference`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items, externalReference, invoiceDetails }), // Enviar los detalles de las facturas también
      }
    );

    if (!response.ok) {
      const errorResponse = await response.json();
      console.error("Respuesta de error del backend:", errorResponse);
      throw new Error("Error al crear la preferencia de pago.");
    }

    const data = await response.json();
    return data.id;
  } catch (error) {
    console.error("Error en createPaymentPreference:", error.message || error);
    throw error;
  }
};
