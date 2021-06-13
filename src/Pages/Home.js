import React from 'react';
import Header from '../Templates/Header';
import Portfolio from '../Templates/Portfolio';
import Footer from '../Templates/Footer';

function Home() {
  const backgroundStyles = {
    backgroundColor: 'whitesmoke'
  }
  return (
    <div style={backgroundStyles}>
      <Header />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default Home;