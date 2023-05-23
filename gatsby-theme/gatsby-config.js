const path = require("path");

module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-transformer-yaml",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: path.resolve("./src/pages"),
      },
    },
  ],
};
