import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
// import HeroTwo from '../../components/HeroTwo/HeroTwo';
import Footer from '../../components/Footer/Footer';
import '../../styles/Home.css'; // Shared styles

const Home = () => {
  const carouselImages = [
    '/images/home-bg1.jpg',
    '/images/home-bg2.jpg',
    '/images/home-bg3.jpg',
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <HeroSection images={carouselImages} />

      {/* Hero Two Section */}
      {/* <HeroTwo
        backgroundImage="/images/hero-2.png"
        title="THIS IS ENERGY CLUB"
        description="Some random energy club description. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      /> */}
      <Footer/>
    </div>
  );
};

export default Home;
