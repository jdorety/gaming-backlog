import * as React from "react";
import Layout from "../components/Layout/Layout";
import { graphql, Link, useStaticQuery } from "gatsby";
// styles

// markup
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMdx {
        nodes {
          id
          frontmatter {
            path
            title
          }
        }
      }
    }
  `);

  console.log(data.allMdx);

  return (
    <main>
      <Layout>
        {data.allMdx.nodes &&
          data.allMdx.nodes.map((post) => (
            <Link to={post.frontmatter.path}>
              <h3>{post.frontmatter.title}</h3>
            </Link>
          ))}
      </Layout>
    </main>
  );
};

export default IndexPage;
