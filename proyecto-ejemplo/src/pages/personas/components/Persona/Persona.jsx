import { Typography } from "@mui/material";
import Card from "../../../../components/Card/Card";
import { styles } from "./styles";
import Switch from "../../../../components/Switch/Switch";
import moment from "moment/moment";

const Persona = ({ data, onClick = () => {} }) => {
  console.info(data);
  return (
    <Card onClick={onClick} sx={styles.card}>
      <Typography variant="h6" color="#000">
        {`${data.nombre} ${data.apellido}`}
      </Typography>
      <Typography variant="subtitle1" color="#000">
        {data.descripcion}
      </Typography>
      <Typography variant="subtitle1" color="#000">
        {moment(data.updateAt, "YYYYMMDD").fromNow()}
      </Typography>
      <Switch label="Activo" />
    </Card>
  );
};

export default Persona;
