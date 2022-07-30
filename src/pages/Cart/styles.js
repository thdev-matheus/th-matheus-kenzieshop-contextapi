import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

export const MainContainer = styled.main`
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
`;

export const CartProducts = styled.div`
  width: 50rem;
  height: 35rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 0.5rem;

  background-color: aliceblue;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0.5rem;

    background-color: var(--alice-blue);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;

    background-color: var(--purple);
  }

  > section {
    width: 100%;

    display: flex;
    justify-content: space-between;

    padding: 1rem 2rem;
    margin-bottom: 1rem;
  }
`;

export const CartDescription = styled.div`
  width: 20rem;
  height: 15rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  border-radius: 0.5rem;
  outline: 2px solid var(--black);
  outline-offset: -15px;

  background-color: var(--alice-blue);

  h4 {
    font-size: 18pt;
  }

  div {
    width: 100%;

    display: flex;
    justify-content: center;
    gap: 2rem;

    span {
      font-size: 16pt;
      font-weight: 600;

      color: var(--gray);
    }
  }

  button {
    width: 80%;
    height: 3rem;

    font-size: 14pt;
  }
`;
