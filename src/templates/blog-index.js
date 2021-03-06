import { Link, graphql } from "gatsby";
import React from "react";
import get from "lodash/get";
import { formatPostDate, formatReadingTime } from "../utils/helpers";

import Bio from "../components/Bio";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Panel from "../components/Panel";
import SEO from "../components/SEO";
import { rhythm } from "../utils/typography";

const BlogIndexTemplate = ({ pageContext, data, location }) => {
  const siteTitle = get(data, "site.siteMetadata.title");
  const keywords = get(data, "site.siteMetadata.keywords");
  const { langKey } = pageContext;

  const posts = get(data, "allMarkdownRemark.edges");

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        pathname={location.pathname}
        title={`${siteTitle} Blog`}
        keywords={`${keywords}, blog`}
      />
      <aside>
        <Bio />
      </aside>
      <main>
        {langKey !== "en" && langKey !== "ru" && (
          <Panel>
            These articles have been
            <a
              href="https://github.com/cluelesscoders/cluelesscoders.com#contributing-translations"
              target="_blank"
              rel="noopener noreferrer"
            >
              translated by the community
            </a>
            .
          </Panel>
        )}
        {posts.map(({ node }) => {
          const title = get(node, "frontmatter.title") || node.fields.slug;
          return (
            <article key={node.fields.slug}>
              <header>
                <h3
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: rhythm(1),
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link
                    style={{
                      boxShadow: "none",
                    }}
                    to={`/blog${node.fields.slug}`}
                    rel="bookmark"
                  >
                    {title}
                  </Link>
                </h3>
                <small>
                  {formatPostDate(node.frontmatter.date, langKey)}
                  {` • ${formatReadingTime(node.timeToRead)}`}
                </small>
              </header>
              <p
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.spoiler,
                }}
              />
            </article>
          );
        })}
      </main>
      <Footer />
    </Layout>
  );
};

export default BlogIndexTemplate;

export const pageQuery = graphql`
  query($langKey: String!) {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
    allMarkdownRemark(
      filter: { fields: { langKey: { eq: $langKey } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            langKey
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            spoiler
          }
        }
      }
    }
  }
`;
