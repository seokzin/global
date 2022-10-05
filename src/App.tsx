import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { Button, Header, List } from './components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

import { Layout } from './App.styled';

const App = () => {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools />

      <ThemeProvider theme={theme}>
        <Layout>
          <GlobalStyle />
          <Header />
          Hello
          <List />
          <Button />
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
