import { baseAPI } from ".";

async function getAllCategoriedData() {
  try {
    const res = await fetch(`${baseAPI}/categories?guest_id=1`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.log("error");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    // throw error;
  }
}

async function getAllTopRatedProduct({
  limit = 10,
}: { limit?: number } = {}): Promise<any> {
  try {
    const res = await fetch(
      `${baseAPI}/products/top-rated?guest_id=1&limit=${limit}&offset=1`,
      {
        next: { revalidate: 1200 },
        // cache: "no-cache",
      }
    );

    if (!res.ok) {
      console.error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    // throw error;
  }
}

export const apiHelper = {
  getAllCategoriedData,
  getAllTopRatedProduct,
};
