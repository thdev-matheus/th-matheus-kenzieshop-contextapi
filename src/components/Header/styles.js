import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 1.5rem;

  background-color: var(--alice-blue);

  h2 {
    cursor: pointer;
  }
`;

export const ContainerIconLink = styled.div`
  display: flex;
  gap: 1rem;
`;

export const IconLink = styled.div`
  display: flex;
  gap: 0.3rem;
`;
