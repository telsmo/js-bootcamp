import { Box, Container, Typography } from "@mui/material";
import { useGroups } from "../../hooks/useGroups";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import Grupo from "./components/Grupo/Grupo";
import { redirect } from "./../../utils/redirect";
import { styles } from "./styles";

const Grupos = () => {
  const { data, loading, error } = useGroups();
  if (loading) {
    return <Loading />;
  }
  if (!!error) {
    return <Error />;
  }
  return (
    <Container>
      <Box sx={styles.tituloContainer}>
        <Typography variant="h2"> Grupos </Typography>
      </Box>
      <Box sx={styles.grupoContainer}>
        {Array.isArray(data) &&
          data.map((grupo) => (
            <Grupo
              data={grupo}
              onClick={() => {
                redirect(`/personas?id=${grupo.id}`);
              }}
            />
          ))}
      </Box>
    </Container>
  );
};
export default Grupos;
