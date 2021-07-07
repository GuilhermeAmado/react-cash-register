import { GlobalContextProvider } from './contexts/GlobalContext';
import HomePage from './views/HomePage';

function App() {
  return (
    <GlobalContextProvider>
      <HomePage />
    </GlobalContextProvider>
  );
}

export default App;
