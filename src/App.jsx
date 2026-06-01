import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Product from './pages/Product';
import ContactUs from './pages/ContactUs';
import './App.css';
import Compliance from './pages/Compliance';
import Resources from './pages/Resources';
import BlogDetail from './pages/BlogDetail';
import Pricing from './pages/Pricing';
import SolutionsHub from './pages/SolutionsHub';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="product" element={<Product />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="solutions" element={<SolutionsHub />} />
          <Route path="compliance" element={<Compliance />} />
          <Route path="resources" element={<Resources />} />
          <Route path="resources/:slug" element={<BlogDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

