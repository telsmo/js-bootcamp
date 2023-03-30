import { useQuery } from "react-query";
import { getPersonasByGroupId } from "../services/personasServices";

export const usePersonas = (id) => {
  console.info(id);
  const { data, isLoading, isError, error } = useQuery(
    ["usePersonas", id],
    async () => {
      return getPersonasByGroupId(id);
    }
  );

  return {
    data,
    isLoading,
    isError,
    error,
  };
};
