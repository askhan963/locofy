import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import FindHost from '../../Components/FindHost/FindHost';

const HomePage: React.FC = () => {
  // Sample JSON data for 20 properties
 

  return (
    <>
      <Header />
      <FindHost />
      <Footer />
    </>
  );
};

export default HomePage;
