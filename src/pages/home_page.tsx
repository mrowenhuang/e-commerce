import { useLocation } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import Recommended from "../components/recommended";
import Shop from "../components/shop";
import Social from "../components/social";
import { useEffect } from "react";

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "social") {
      setTimeout(() => {
        document
          .getElementById("social")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  }, [location]);

  return (
    <>
      {/* <SimpleNavbar /> */}
      <Header />
      <Shop />
      <Recommended />
      <Social />
      <Footer />
    </>
  );
}

export default HomePage;
