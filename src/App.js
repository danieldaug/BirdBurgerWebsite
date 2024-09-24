import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'; // Import the Home component
import BlogPage from './BlogPage'; // Import the BlogPage component
import Team from './Team'; // Import the Team component
import Banner from './components/Banner.tsx'; // Assuming you are using a banner

const App = () => {
  return (
    <Router>
      <div>
        <Banner />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home is the default page */}
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
