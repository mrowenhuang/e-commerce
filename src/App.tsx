import "./App.css";
import SimpleNavbar from "./components/creative-tim/blocks/simple-navbar";
import Header from "./components/header";
import ProductCard from "./components/product_card";
import Recommended from "./components/recommended";
import Shop from "./components/shop";
import Social from "./components/social";

function App() {
  return (
    <>
      <SimpleNavbar />
      <Header/>
      <Shop/>
      <Recommended/>
      <Social/>
    </>
  );
}

export default App;
