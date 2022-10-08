import styled from 'styled-components';

export const Layout = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 6rem;
  border-radius: 0.25rem;

  background-color: #000000;
  color: #ffffff;

  font-size: 2rem;
  @media ${({ theme }) => theme.mobile} {
    font-size: 1.5rem;
  }
`;
