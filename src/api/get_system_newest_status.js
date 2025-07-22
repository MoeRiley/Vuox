export default async function get_system_newest_status(params) {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const url = `${baseUrl}/api/system-logs/get_status`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
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
