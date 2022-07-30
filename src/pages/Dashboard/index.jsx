import Card from "../../components/Card";
import Header from "../../components/Header";

import { CardsContainer, Container } from "./styles";

import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";

export default function Dashboard() {
  const { products } = useContext(ProductsContext);

  return (
    <>
      <Container>
        <Header />
        <CardsContainer>
          {products.map((prod, index) => {
            return <Card product={prod} key={index + index} />;
          })}
        </CardsContainer>
      </Container>
    </>
  );
}
