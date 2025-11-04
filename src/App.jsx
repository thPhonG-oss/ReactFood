import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import FoodDetail from "./pages/FoodDetail";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-6 w-full">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/menu/:id" element={<FoodDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
            </main>
            <Footer />
            <Toaster position="top-right" />
          </div>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
