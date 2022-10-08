import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { Header, Filter, List } from './components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

import { Layout, GapBox } from './App.styled';

const App = () => {
  const client = new QueryClient();

  return (
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <ReactQueryDevtools />

        <ThemeProvider theme={theme}>
          <Layout>
            <GlobalStyle />

            <GapBox>
              <Header />
              <Filter />
              <List />
            </GapBox>
          </Layout>
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
