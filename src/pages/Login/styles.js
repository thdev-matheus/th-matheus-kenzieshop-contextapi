import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  overflow: hidden;
`;
export const Background = styled.div`
  @media (min-width: 1024px) {
    flex: 1;
    background: var(--alice-blue);
    background-size: contain;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50px);
    }

    to {
        opacity: 1;
        transform: translateX(0px);
    }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromLeft} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 2rem;
    }

    > div {
      margin-top: 0.8rem;
    }

    p {
      color: var(--white);
      margin-top: 0.5rem;

      a {
        font-weight: bold;
        color: var(--purple);
      }
    }

    button {
      width: 100%;
      height: 3rem;

      margin-top: 2rem;

      font-size: 18pt;

      color: var(--black);
      background-color: var(--alice-blue);

      :hover {
        color: var(--white);
      }
    }
  }
`;
