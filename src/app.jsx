import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../src/globals.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home";
import About from "./pages/etc/about";

const App = () => {
  return (
    <div className="container-col">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
