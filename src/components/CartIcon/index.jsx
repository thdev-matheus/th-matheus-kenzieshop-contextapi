import { FiShoppingCart } from "react-icons/fi";
import { Container, ContainerLength } from "./styles";

import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export default function CartIcon() {
  const { cart } = useContext(CartContext);

  return (
    <Container>
      <FiShoppingCart />
      {cart.length > 0 && (
        <ContainerLength>
          <span>{cart.length}</span>
        </ContainerLength>
      )}
    </Container>
  );
}
