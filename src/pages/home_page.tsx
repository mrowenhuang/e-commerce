import SimpleNavbar from "../components/creative-tim/blocks/simple-navbar";
import Footer from "../components/footer";
import Header from "../components/header";
import Recommended from "../components/recommended";
import Shop from "../components/shop";
import Social from "../components/social";

function HomePage() {
  return (
    <>
      {/* <SimpleNavbar /> */}
      <Header />
      <Shop />
      <Recommended />
      <Social />
      {/* <Footer /> */}
    </>
  );
}

export default HomePage;
