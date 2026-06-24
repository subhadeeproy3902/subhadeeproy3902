const apiUrl = "https://opbento.vercel.app/api/bento?n=Subhadeep%20Roy&g=subhadeeproy3902&x=mvp_Subha&l=subhadeep3902&i=https%3A%2F%2Fi.postimg.cc%2Fxd8ZVxCw%2FWhats-App-Image-2026-06-03-at-2-17-25-AM.jpg&p=auradevs.co&z=cf487";
interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = (await response.json()) as BentoResponse;
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};

// @ts-ignore
await fetchBentoUrl(apiUrl);
