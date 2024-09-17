import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}
