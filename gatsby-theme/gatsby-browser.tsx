import { Layout } from "./src/components/layout";
import * as React from "react";
import type { GatsbyBrowser } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import Code from "./src/components/code";
export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
  props,
}) => {
  return <Layout pageContext={props.pageContext}>{element}</Layout>;
};

// Logs when the client route changes

export const onRouteUpdate: GatsbyBrowser["onRouteUpdate"] = ({
  location,
  prevLocation,
}) => {};

const components = {
  pre: (props) => console.log(props),
  code: Code,
};

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
