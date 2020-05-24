import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
import siteIcon from "../content/assets/icon.png";
import { formatAuthorNames } from "../utils/helpers";

const SEO = ({
  pathname = "",
  lang = "en",
  title,
  description,
  keywords,
  authors: blogAuthors,
  createdAt = null,
  modifiedAt = null,
}) => {
  const {
    site: {
      siteMetadata: {
        title: defaultTitle,
        author: siteAuthor,
        description: defaultDescription,
        siteUrl,
        social: { twitter },
        keywords: defaultKeywords,
      },
    },
  } = useStaticQuery(graphql`
    query GetSiteMetaData {
      site {
        siteMetadata {
          title
          author
          description
          siteUrl
          social {
            twitter
          }
          keywords
        }
      }
    }
  `);

  const author =
    (blogAuthors &&
      (blogAuthors.length > 1 ? "co-authored by " : "") +
        formatAuthorNames(blogAuthors)) ||
    siteAuthor;
  const siteTitle = `${title || defaultTitle} - ${defaultTitle}`;

  return (
    <Helmet defer={false} defaultTitle={siteTitle}>
      <html lang="en" />
      <meta charset="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="content-language" content="en-us" />
      <link rel="canonical" href={`${siteUrl}${pathname}`} />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />
      <meta name="description" content={description || defaultDescription} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={lang} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:image" content={`${siteUrl}${siteIcon}`} />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:site_name" content={siteTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitter} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:image" content={`${siteUrl}${siteIcon}`} />
      {createdAt && <meta name="article:published_time" content={createdAt} />}
      {modifiedAt && <meta name="article:modified_time" content={modifiedAt} />}
      <meta name="article:author" content={author} />
      <meta name="robots" content="INDEX,FOLLOW" />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="application-name" content={siteTitle} />
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content={siteTitle} />
      <meta name="author" content={author} />
      <meta name="theme-color" content="#fff" />
    </Helmet>
  );
};

export default SEO;
