const apiUrl = "https://opbento.edgexhq.tech/api/bento?name=Subhadeep%20Roy&githubURL=subhadeeproy3902&twitterURL=mvp_Subha&linkedinURL=subhadeep3902&imageUrl=https%3A%2F%2Fi.postimg.cc%2FHsqvcD8Y%2Fsubha.jpg&portfolioUrl=mvp-subha.me&z=e37e3";
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
