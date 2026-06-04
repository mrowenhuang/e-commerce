import SimpleNavbar from "../components/creative-tim/blocks/simple-navbar";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <SimpleNavbar />

      <Outlet />

      {/* <Footer /> */}
    </>
  );
}

export default MainLayout;
