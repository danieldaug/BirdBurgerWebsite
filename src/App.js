// App.js
import React from 'react';
import './App.css';
import SocialMediaButtons from './components/SocialMediaButtons';
import Logo from './components/MainLogo';
import TextSection from './components/TextSection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <TextSection 
          title="Welcome to BirdBurger Games" 
          description="This is a basic React app with social media buttons and modular components." 
        />
        <SocialMediaButtons />
      </header>
    </div>
  );
}

export default App;