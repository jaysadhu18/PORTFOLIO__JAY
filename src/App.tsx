import { LoadingProvider } from "./context/LoadingProvider";
import { MainContainer } from "./components/MainContainer";

function App() {
  return (
    <LoadingProvider>
      <MainContainer />
    </LoadingProvider>
  );
}

export default App;
