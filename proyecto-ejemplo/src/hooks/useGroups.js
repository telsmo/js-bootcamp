import { useState, useEffect } from "react";
import { getGrupos } from "../services/gruposServices";

export const useGroups = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getGrupos()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return {
    data,
    loading,
    error,
  };
};
