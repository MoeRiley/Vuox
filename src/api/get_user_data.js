export default async function get_user_data(params) {
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const url = `${BASE_URL}/api/facturas/get_user_data`;
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
        cache: "no-cache",
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }