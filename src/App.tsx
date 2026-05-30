import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home_page";
import ShopPage from "./pages/shop_page";
import SigninPage from "./pages/signin_page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
