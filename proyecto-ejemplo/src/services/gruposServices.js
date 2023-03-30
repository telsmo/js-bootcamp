import { fetchContent } from "../utils/fetchContent";

export const getGrupos = async () => {
  try {
    return await fetchContent("/grupos");
  } catch (error) {
    throw new Error("[getGrupos service error]: " + error);
  }
};
    