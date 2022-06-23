import "./App.scss";
import "swiper/css";
import "./assets/boxicons-2.1.2/css/boxicons.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Catalog from "./pages/Catalog";
import Detail from "./pages/detail/Detail";
import Home from "./pages/Home";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route
                        path="/:category/search/:keyword"
                        element={<Catalog />}
                    />
                    <Route path="/:category/:id" element={<Detail />} />
                    <Route path="/:category" element={<Catalog />} />
                    <Route path="/" element={<Home />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
