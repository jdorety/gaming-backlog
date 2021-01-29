import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import "./Header.scss";

export default function Header() {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <header>
      <Link to="/" style={{ textDecoration: "none",  }}>
        <h1 id="site-title">{data.site.siteMetadata?.title}</h1>
      </Link>
    </header>
  );
}
