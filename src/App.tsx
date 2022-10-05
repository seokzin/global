import { Button } from './components';
import GlobalStyle from './styles/GlobalStyle';

import { Layout } from './App.styled';

const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      Hello
      <Button />
    </Layout>
  );
};

export default App;
