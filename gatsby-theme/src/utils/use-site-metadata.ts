import { useStaticQuery, graphql } from "gatsby";

function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          header {
            title
            url
            logoUrl
          }
          menuLinks {
            name
            link
          }
        }
      }
    }
  `);
  return data.site.siteMetadata;
}

export default useSiteMetadata;
