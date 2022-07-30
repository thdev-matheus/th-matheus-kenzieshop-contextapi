import Button from "../Button";
import { Container, ContainerImg } from "./styles";

import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { CartContext } from "../../contexts/CartContext";

export default function Card({ product }) {
  const { products } = useContext(ProductsContext);
  const { addCart } = useContext(CartContext);

  const handleClick = (e) => {
    const produto = products.find((prod) => prod.id === +e.target.id);
    addCart(produto);
  };

  return (
    <Container>
      <ContainerImg>
        <img src={product.img} alt="" />
      </ContainerImg>
      <h4>{product.nome}</h4>
      <span>{`R$ ${product.preco.toFixed(2).replace(".", ",")}`}</span>
      <Button id={product.id} onClick={(e) => handleClick(e)}>
        Add ao carrinho
      </Button>
    </Container>
  );
}
