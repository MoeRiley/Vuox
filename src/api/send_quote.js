export default async function send_quote(params) {
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const url = `${BASE_URL}/api/monday/send_quote`;
  
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