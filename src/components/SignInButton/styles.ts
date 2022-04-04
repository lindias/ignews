import styled from "styled-components";

export const Button = styled.button`
  height: 3rem;
  border-radius: 3rem;
  border: 0;
  padding: 0 1.5rem;
  background: var(--gray-850);
  color: var(--white);
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }

  svg {
    width: 20px;
    height: 20px;
  }

  svg:first-child {
    margin-right: 1rem;
  }

  svg.closeIcon {
    margin-left: 1rem;
  }
`;
