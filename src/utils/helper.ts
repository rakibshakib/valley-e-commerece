import { baseAPI } from ".";

export const TAB_MENU_LIST: ItabMenu[] = [
  {
    type: "featured",
    label: "Featured Products",
    icon: false,
    active: true,
  },
  {
    type: "top_rated",
    label: "Top Rated",
    icon: false,
    active: false,
  },
  {
    type: "best_selling",
    label: "Best Selling",
    icon: false,
    active: false,
  },
  {
    type: "latest",
    label: "Latest Products",
    icon: false,
    active: false,
  },
  {
    type: "new_arrivals",
    label: "New Arrivals",
    icon: true,
    active: false,
  },
];

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
  type = "featured",
  limit = 10,
  setLoading,
}: {
  type?: string;
  limit?: number;
  setLoading?: (a: boolean) => void;
} = {}): Promise<any> {
  setLoading?.(true);
  try {
    const res = await fetch(
      `${baseAPI}/products/${type}?guest_id=1&limit=${limit}&offset=1`,
      {
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) {
      console.error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    setLoading?.(false);
  }
}

export const apiHelper = {
  getAllCategoriedData,
  getAllTopRatedProduct,
};
