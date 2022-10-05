import { ThemeProvider } from 'styled-components';

import { Button, Header } from './components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

import { Layout } from './App.styled';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <Header />
        Hello
        <Button />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
