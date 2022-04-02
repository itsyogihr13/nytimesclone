import "./App.css";
import Routers from "./Routes/Routes";
import { FooterContainer } from "./Components/FooterContainer";

// import { LoginBottom } from './Components/LoginBottom';
function App() {
  return (
    <div className="App">
      <Routers />
      <FooterContainer />
    </div>
  );
}

export default App;
