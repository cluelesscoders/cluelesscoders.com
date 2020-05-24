import React from "react";

import { rhythm } from "../utils/typography";

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: rhythm(2.5),
        paddingTop: rhythm(1),
      }}
    >
      <div style={{ float: "right" }}>
        <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
          rss
        </a>
      </div>
      <a
        href="https://github.com/cluelesscoders"
        target="_blank"
        rel="noopener noreferrer"
      >
        github
      </a>
    </footer>
  );
};

export default Footer;
