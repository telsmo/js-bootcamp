import { useLocation } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import { usePersonas } from "./../../hooks/usePersonas";
import { redirect } from "./../../utils/redirect";
import Persona from "./components/Persona/Persona";
import { styles } from "./styles";

const Personas = () => {
  const { search } = useLocation();
  const id = search.replace("?id=", "");
  const { data, isLoading, isError } = usePersonas(id);

  if (isLoading) {
    return <Loading />;
  }
  if (!!isError) {
    return <Error />;
  }
  return (
    <Container>
      <Box sx={styles.tituloContainer}>
        <Typography variant="h2"> Integrantes </Typography>
      </Box>
      <Box sx={styles.grupoContainer}>
        {Array.isArray(data) &&
          data.map((persona) => (
            <Persona
              data={persona}
              onClick={() => {
                redirect(`/comentarios?id=${persona.id}`);
              }}
            />
          ))}
      </Box>
    </Container>
  );
};
export default Personas;
