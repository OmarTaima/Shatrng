import React from "react";
import { Helmet } from "react-helmet-async";
import ContactUs from "../components/contactus";
import Footer from "../components/footer";
import { getFullUrl, getDefaultOgImage, SITE_NAME } from "../utils/ogMeta";

const Contact = () => {
  const pageUrl = getFullUrl('/contact');
  const ogImage = getDefaultOgImage();
  
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;800&display=swap"
        />
        <title>Contact Us - {SITE_NAME}</title>
        <meta name="description" content={`Get in touch with ${SITE_NAME}'s team. Visit our office or reach out to discuss your markting needs.`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={`Contact Us - ${SITE_NAME}`} />
        <meta property="og:description" content={`Get in touch with ${SITE_NAME}'s team for your marketing needs.`} />
        {ogImage && (
          <>
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:url" content={ogImage} />
            <meta property="og:image:secure_url" content={ogImage} />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={`Contact ${SITE_NAME} - Premium Marketing Agency`} />
          </>
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Contact Us - ${SITE_NAME}`} />
        <meta name="twitter:description" content={`Get in touch with ${SITE_NAME}'s team for your marketing needs.`} />
        {ogImage && <meta name="twitter:image" content={ogImage} />}
      </Helmet>

      <section style={{ fontFamily: "'Cairo', sans-serif" }} className="py-20 md:py-32 relative overflow-hidden min-h-screen">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <ContactUs />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
