import 'bootstrap/dist/css/bootstrap.css';
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
        <Route path="/transit_guard" element={<Home />} />
        <Route path="/transit_guard/aboutUs" element={<AboutUS />} />
        <Route path="/transit_guard/viewPlans" element={<ViewPlans />} />
        <Route path="/transit_guard/contactUs" element={<ContactUs />} />
      </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
