import styled from 'styled-components';

export const Layout = styled.button<{ disable: boolean }>`
  border: none;
  background: none;
  background-color: #0099ff;
  color: #ffffff;
  padding: 0.5rem 0.75rem;
  border-radius: 0.2rem;
  font-size: 15px;
  cursor: pointer;
  height: 2rem;

  white-space: nowrap;
  text-align: center;

  :hover {
    background-color: #0099ffcc;
  }

  ${({ disable }) =>
    disable &&
    `
    background-color: #aaaaaa;
    color: #ffffff;

    :hover {
      background-color: #aaaaaa;
    }

    cursor: default;
  `}
`;
