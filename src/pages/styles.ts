import styled from "styled-components";

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
  height: calc(100vh - 5rem);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.section`
  max-width: 600px;

  > span {
    color: var(--gray-300);
    font-weight: bold;
    font-size: 1.5rem;
  }

  h1 {
    margin-top: 2.5rem;
    color: var(--gray-100);
    font-size: 4.5rem;
    line-height: 4.5rem;
    font-weight: 900;

    span {
      color: var(--cyan-500);
    }
  }

  p {
    margin-top: 1.5rem;
    font-size: 1.5rem;
    line-height: 2.25rem;

    span {
      color: var(--cyan-500);
      font-weight: bold;
    }
  }

  button {
    margin-top: 2.5rem;
  }
`;
