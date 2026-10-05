import "./App.css";
import ChiSono from "./components/chiSono";
import Contatti from "./components/contatti";
import Home from "./components/home";
import NavBar from "./components/navBar";
import Progetti from "./components/carouselProgetti";;

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <ChiSono />
      <Progetti />
      <Contatti />
    </>
  );
}

export default App;
