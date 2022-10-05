import styled from 'styled-components';

export const Layout = styled.div`
  @media ${(props) => props.theme.mobile} {
    background-color: ${(props) => props.theme.subColor};
  }
`;
