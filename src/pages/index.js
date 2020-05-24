import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Button from "../components/button";
import siteIcon from "../content/assets/icon.png";

const IndexPage = ({ location }) => {
  const siteTitle = "Clueless Coders";

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <img
        style={{ margin: 0, width: "300px" }}
        src={siteIcon}
        alt="Gatsby Scene"
      />
      <h1>
        Hey people{" "}
        <span role="img" aria-label="wave emoji">
          👋
        </span>
      </h1>
      <p>Welcome to our humble site.</p>
      <p>Not much to look at, we are still building stuff up.</p>
      <Link to="/blog/">
        <Button marginTop="35px">Go to Blog</Button>
      </Link>
    </Layout>
  );
};

export default IndexPage;
