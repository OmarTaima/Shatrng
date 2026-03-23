import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import About from "../components/About";
import Locations from "../components/Locations";
import Team from "../components/Team";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import { getFullUrl, getDefaultOgImage, SITE_NAME } from "../utils/ogMeta";

const Home = () => {
  const pageUrl = getFullUrl('/');
  const ogImage = getDefaultOgImage();

  return (
    <main className="bg-chess-black min-h-screen">
      <Helmet>
        <title>Studio Checkmate — Premium Creative Studio</title>
        <meta name="description" content="Studio Checkmate — Strategic aesthetic moves for premium creative brands." />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content="Studio Checkmate — Premium Creative Studio" />
        <meta property="og:description" content="Strategic aesthetic moves for premium creative brands." />
        {ogImage && <meta property="og:image" content={ogImage} />}
      </Helmet>

      <Hero />
      <About />
      <Locations />
      <Team />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default Home;
