import styled from "styled-components";

export const Container = styled.button`
  padding: 0.5rem 1rem;

  border-radius: 0.5rem 0;

  background-color: var(--black);
  color: var(--white);

  font-weight: 600;

  transition: 0.8s;

  cursor: pointer;

  :hover {
    background-color: var(--purple);
  }
`;
