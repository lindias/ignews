import styled from "styled-components";

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Content = styled.div`
  max-width: 720px;
  margin: 5rem auto 0;

  a {
    display: block;

    & + a {
      margin-top: 2rem;
      padding-top: 2rem;
      border-top: 1px solid var(--gray-700);
    }

    time {
      display: flex;
      align-items: center;
      font-size: 1rem;
      color: var(--gray-300);
    }

    strong {
      display: block;
      font-size: 1.25rem;
      margin-top: 1rem;
      line-height: 2rem;
      transition: color 0.2s;
    }

    &:hover strong {
      color: var(--yellow-500);
    }

    p {
      color: var(--gray-300);
      margin-top: 0.5rem;
      line-height: 1.625rem;
    }
  }
`;