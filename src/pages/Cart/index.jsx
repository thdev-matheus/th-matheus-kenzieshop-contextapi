import Header from "../../components/Header";
import CardCart from "../../components/CardCart";
import Button from "../../components/Button";
import {
  CartDescription,
  CartProducts,
  Container,
  MainContainer,
} from "./styles";

import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";

export default function Cart() {
  const { cart } = useContext(CartContext);
  const history = useHistory();

  const finalizarPedido = () => {
    return cart.length > 0
      ? history.push("/login")
      : toast.dark(
          "Não há itens no carrinho, escolha algum produto para continuar."
        );
  };

  return (
    <Container>
      <Header />
      <MainContainer>
        <CartProducts>
          <section>
            <h4>Produto</h4>
            <h4>Descrição</h4>
            <h4>Preço</h4>
          </section>
          {cart?.map((prod, index) => {
            return <CardCart product={prod} key={index + index} />;
          })}
        </CartProducts>

        <CartDescription>
          <h4>Resumo do pedido</h4>
          <div>
            <span>{cart.length} produtos</span>
            <span>{`R$ ${cart
              .reduce((acc, prod) => acc + prod.preco, 0)
              .toFixed(2)
              .replace(".", ",")}`}</span>
          </div>
          <Button onClick={() => finalizarPedido()}>Finalizar pedido</Button>
        </CartDescription>
      </MainContainer>
    </Container>
  );
}
