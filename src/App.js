import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home'; // Import the Home component
import BlogPage from './BlogPage'; // Import the BlogPage component
import Banner from './components/Banner.tsx'; // Assuming you are using a banner

const App = () => {
  return (
    <Router>
      <div>
        <Banner />
        <nav>
          {/* Navigation Links */}
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home is the default page */}
          <Route path="/blogs" element={<BlogPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
