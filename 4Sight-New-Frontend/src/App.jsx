import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Homepage from './components/Homepage';
import About from './components/About';
import Product from './components/Product';
import SolutionsHub from './components/SolutionsHub';
import SolutionDetails from './components/SolutionDetails';
import ContactUs from './components/ContactUs';
import './App.css';
import Compliance from './components/Compliance';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="product" element={<Product />} />
          <Route path="solutions" element={<SolutionsHub />} />
          <Route path="solutions/:slug" element={<SolutionDetails />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="compliance" element={<Compliance />} />
        </Route>
      </Routes>
    </Router>
  );
}

