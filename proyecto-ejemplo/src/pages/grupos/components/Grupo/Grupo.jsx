import { Typography } from "@mui/material";
import Card from "../../../../components/Card/Card";
import { styles } from "./styles";

const Grupo = ({ data, onClick = () => {} }) => {
  return (
    <Card onClick={onClick} sx={styles.card}>
      <Typography variant="h3" color="#000">
        {data.id}
      </Typography>
      <Typography variant="h6" color="#000">
        {data.descripcion}
      </Typography>
    </Card>
  );
};

export default Grupo;
