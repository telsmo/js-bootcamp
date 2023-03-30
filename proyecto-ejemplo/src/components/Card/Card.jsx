import { CardActionArea as CardMUI } from "@mui/material";
import { styles } from "./styles";

const Card = ({ children, sx = {}, ...props }) => (
  <CardMUI {...props} sx={{ ...styles.card, ...sx }}>
    {children ? children : ""}
  </CardMUI>
);
export default Card;
