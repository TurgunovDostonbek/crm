import { useLocation } from "react-router-dom";
import { Container } from "../Sidebar/style";

export const Generics = () => {
  const location = useLocation();
  return (
    <Container>
      <h1>{location.pathname}</h1>
    </Container>
  );
};

export default Generics;
