import { createGlobalStyle } from 'styled-components';
import Reset from './Reset';

const GlobalStyle = createGlobalStyle`
  ${Reset}
  
  body {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue',
      'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    letter-spacing: -0.02rem;
  }
`;

export default GlobalStyle;
