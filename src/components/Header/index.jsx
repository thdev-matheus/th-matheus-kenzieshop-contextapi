import CartIcon from "../CartIcon";
import LoginIcon from "../LoginIcon";
import { ContainerIconLink, HeaderContainer, IconLink } from "./styles";

import { Link, useHistory } from "react-router-dom";

export default function Header() {
  const history = useHistory();

  return (
    <HeaderContainer>
      <h2 onClick={() => history.push("/")}>Kenzie Shop</h2>
      <ContainerIconLink>
        <IconLink>
          <CartIcon />
          <Link to="/cart">Carrinho</Link>
        </IconLink>
        <IconLink>
          <LoginIcon />
          <Link to="/login">Login</Link>
        </IconLink>
      </ContainerIconLink>
    </HeaderContainer>
  );
}
