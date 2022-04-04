import styled from "styled-components";

export const Button = styled.button`
  height: 4rem;
  width: 260px;
  background: var(--yellow-500);
  border: 0;
  border-radius: 2rem;
  color: var(--gray-900);
  font-weight: bold;
  font-size: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
