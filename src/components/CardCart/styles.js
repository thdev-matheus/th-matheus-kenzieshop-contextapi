import styled from "styled-components";

export const Container = styled.div`
  width: 47rem;
  height: 10rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1rem;
`;

export const ContainerImgCart = styled.div`
  width: 8rem;
  height: 8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 1rem;

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

export const PriceButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  h4 {
    font-size: 16pt;

    color: var(--gray);
  }
`;
