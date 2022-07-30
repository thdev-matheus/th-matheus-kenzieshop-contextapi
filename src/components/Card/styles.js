import styled from "styled-components";

export const Container = styled.div`
  min-width: 11rem;
  max-width: 11rem;
  min-height: 18rem;
  max-height: 18rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding: 1rem;

  border-radius: 0.5rem;

  text-align: center;

  background-color: var(--alice-blue);

  h4 {
    width: 9rem;
  }

  span {
    font-weight: bold;
    font-size: 16pt;

    color: var(--gray);
  }

  button {
  }
`;

export const ContainerImg = styled.div`
  width: 8rem;
  height: 8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  background-color: var(--white);

  img {
    height: 8rem;

    transition: 0.8s;

    :hover {
      height: 9rem;
    }
  }
`;
