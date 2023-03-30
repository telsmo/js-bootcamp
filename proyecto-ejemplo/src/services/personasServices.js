import { fetchContent } from "../utils/fetchContent";

export const getPersonasByGroupId = async (idGrupo) => {
  try {
    return await fetchContent(`/grupos/${idGrupo}`);
  } catch (error) {
    throw new Error("[getGruposId service error]: " + error);
  }
};
