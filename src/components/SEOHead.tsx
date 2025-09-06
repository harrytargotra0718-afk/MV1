import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Ashiana Mulberry - Premium 3 & 3.5 BHK Apartments in Sohna, Gurgaon",
  description = "Discover luxury living at Ashiana Mulberry Phase 3. Premium 3 & 3.5 BHK apartments with world-class amenities in Sector 2, Sohna, Gurgaon. Starting from ₹1.90 Cr. Book your dream home today.",
  keywords = "Ashiana Mulberry, luxury apartments Gurgaon, 3 BHK apartments Sohna, premium real estate Gurgaon, Ashiana homes, luxury flats Sohna, real estate investment Gurgaon, premium apartments Sector 2 Sohna",
  canonicalUrl = "https://ashianamulbery.com",
  ogImage = "https://ashianamulbery.com/images/og-image.jpg",
  ogType = "website",
  structuredData
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Ashiana Mulberry",
    "description": description,
    "url": canonicalUrl,
    "telephone": "+91-98765-43210",
    "email": "info@ashianamulbery.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sector 2, Sohna",
      "addressLocality": "Gurgaon",
      "addressRegion": "Haryana",
      "postalCode": "122103",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.272011",
      "longitude": "77.061859"
    },
    "priceRange": "₹1.90 Cr - ₹3.50 Cr",
    "openingHours": "Mo-Su 09:00-19:00"
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Ashiana Mulberry" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Ashiana Mulberry" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#ec4899" />
      <meta name="msapplication-TileColor" content="#ec4899" />
      <meta name="application-name" content="Ashiana Mulberry" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>

      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </script>
    </Helmet>
  );
};

export default SEOHead;