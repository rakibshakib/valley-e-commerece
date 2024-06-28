import { useState } from "react";

export const useAPI = (initialState: any) => {
  const [data, setData] = useState(initialState || []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url: string) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return { data, loading, error, fetchData };
};
