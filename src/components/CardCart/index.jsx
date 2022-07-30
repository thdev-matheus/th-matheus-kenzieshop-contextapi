import Button from "../Button";
import { Container, ContainerImgCart, PriceButtonContainer } from "./styles";

import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export default function CardCart({ product }) {
  const { cart, remCart } = useContext(CartContext);

  const handleClick = (e) => {
    const produto = cart.find((prod) => prod.id === +e.target.id);
    remCart(produto);
  };

  return (
    <Container>
      <ContainerImgCart>
        <img src={product.img} alt={product.nome} />
      </ContainerImgCart>

      <div>
        <h4>{product.nome}</h4>
      </div>

      <PriceButtonContainer>
        <h4>{`R$ ${product.preco.toFixed(2).replace(".", ",")}`}</h4>
        <Button id={product.id} onClick={(e) => handleClick(e)}>
          Remover
        </Button>
      </PriceButtonContainer>
    </Container>
  );
}
