import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Homepage from './components/Homepage';
import About from './components/About';
import Product from './components/Product';
import ContactUs from './components/ContactUs';
import './App.css';
import Compliance from './components/Compliance';
import Resources from './components/Resources';
import BlogDetail from './components/BlogDetail';
import Pricing from './components/Pricing';
import SolutionsHub from './components/SolutionsHub';

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

