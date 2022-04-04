import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  border-bottom: 1px solid var(--gray-800);
`;

export const Content = styled.div`
  width: 1120px;
  height: 5rem;
  padding: 0 2rem;
  margin: 0 auto;

  display: flex;
  align-items: center;

  nav {
    margin-left: 5rem;
    height: 5rem;

    a {
      display: inline-block;
      height: 5rem;
      line-height: 5rem;
      padding: 0 0.5rem;
      position: relative;
      color: var(--gray-300);
      transition: color 0.2s;

      &:hover {
        color: var(--white);
      }

      & + a {
        margin-left: 2rem;
      }

      &.active {
        color: var(--white);
        font-weight: bold;
      }

      &.active::after {
        content: "";
        position: absolute;
        height: 3px;
        width: 100%;
        left: 0;
        bottom: 0;
        background: var(--yellow-500);
        border-radius: 3px 3px 0 0;
      }
    }
  }

  button {
    margin-left: auto;
  }
`;
