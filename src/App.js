import 'bootstrap/dist/css/bootstrap.css';
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import AboutUS from "./Components/AboutUS";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import ViewPlans from './Components/ViewPlans';
import './index.css';

const App = () => (
  <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUS />} />
        <Route path="/viewPlans" element={<ViewPlans />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
