import React from 'react';
import Helmet from 'react-helmet';

const SEO_DATA = {
  description: 'womxn led music and tech',
  title: 'womxn in',
  url: 'https://womxnin.github.io/music/',
  author: 'jessica chase',
  keywords: ['gatsby', 'site', 'music'],
  twitter: {
    id: '@aight_ok',
    img: '',
  },
  facebook: {
    id: '',
    img: '',
  },
};

const SEO = () => {
  return (
    <Helmet>
      <meta property="fb:app_id" content={SEO_DATA.facebook.id} />
      <meta property="og:title" content={SEO_DATA.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SEO_DATA.url} />
      <meta property="og:image" content={SEO_DATA.facebook.img} />
      <meta property="og:description" content={SEO_DATA.description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@hackinoutco" />
      <meta name="twitter:site" content="@hackinoutco" />
      <meta name="twitter:title" content={SEO_DATA.title} />
      <meta name="twitter:description" content={SEO_DATA.description} />
      <meta name="twitter:domain" content={SEO_DATA.url} />
      <meta name="twitter:image:src" content={SEO_DATA.img} />

      <meta name="description" content={SEO_DATA.description} />
      <meta name="keywords" content={SEO_DATA.keywords.join(', ')} />
      <meta name="author" content={SEO_DATA.author} />
      <title>{SEO_DATA.title}</title>
      <html lang="en" />
    </Helmet>
  );
};

export default SEO;