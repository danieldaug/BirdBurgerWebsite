import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogPage from './BlogPage'; // Import the BlogPage component
import Team from './Team'; // Import the Team component
import Banner from './components/Banner.tsx'; // Assuming you are using a banner
import Products from './Products';
import FullBlogPage from './FullBlogPage.js';

const App = () => {
  return (
    <Router>
      <div>
        <Banner />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<BlogPage />} /> {/* Home is the default page */}
          <Route path="/team" element={<Team />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog" element={<FullBlogPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
