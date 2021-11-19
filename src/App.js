import './App.css';
import Header from'./Header.js'
import Content from './Content.js'
import Footer from './Footer.js' 
import React from 'react'
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  //console.log(data, isLoading); 

  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
