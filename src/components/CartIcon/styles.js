import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContainerLength = styled.div`
  width: 0.8rem;
  height: 0.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  z-index: 5000;
  top: -5px;
  right: 5px;

  background-color: var(--purple);
  color: var(--white);

  border-radius: 50%;

  span {
    font-size: 7pt;
  }
`;
