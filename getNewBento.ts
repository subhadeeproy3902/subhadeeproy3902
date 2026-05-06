const apiUrl = "https://opbento.vercel.app/api/bento?n=Subhadeep%20Roy&g=subhadeeproy3902&x=mvp_Subha&l=subhadeep3902&i=https%3A%2F%2Fi.postimg.cc%2FCLhT1D8s%2FIMG-20230616-WA0027.jpg&p=auradevs.co&z=9cc38";

interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = await response.json();
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};


// @ts-expect-error
fetchBentoUrl(apiUrl);
