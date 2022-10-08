import { createGlobalStyle } from 'styled-components';

import Reset from './Reset';

const GlobalStyle = createGlobalStyle`
  ${Reset}
  
  body {
    font-family: Pretendard;
    letter-spacing: -0.02rem;
  }

  button {
    font-family: Pretendard;
  }
`;

export default GlobalStyle;
