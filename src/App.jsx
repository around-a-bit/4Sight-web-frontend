import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Product from './pages/Product';
import ContactUs from './pages/ContactUs';
import Compliance from './pages/Compliance';
import Resources from './pages/Resources';
import BlogDetail from './pages/BlogDetail';
import Pricing from './pages/Pricing';
import SolutionsHub from './pages/SolutionsHub';
import  ICP1  from './pages/ICP1';
import  ICP2  from './pages/ICP2';
import  ICP3  from './pages/ICP3';

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
          <Route path="icp1" element={<ICP1 />} />
          <Route path="icp2" element={<ICP2 />} />
          <Route path="icp3" element={<ICP3 />} />
        </Route>
      </Routes>
    </Router>
  );
}

