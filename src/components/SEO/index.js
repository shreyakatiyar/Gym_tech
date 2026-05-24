import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'GymTech — Smart Fitness Technology',
  description = 'GymTech connects your body with technology and science. Join our smart gyms, choose flexible memberships, and track your fitness journey in real time.',
  keywords = 'gym, fitness, smart gym, membership, workout, health, GymTech',
  path = '',
}) => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const url = `${siteUrl}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;
