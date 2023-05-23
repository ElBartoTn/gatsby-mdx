import React from "react";
import LiveCode from "./live-code";
import { Highlight } from "prism-react-renderer";

function Code({ ...props }: any) {
  const language = props.className
    ? props.className.replace(/language-/, "")
    : "";

  const code = props.children.trim();
  console.log(props);
  if (props.live) {
    return (
      <LiveCode code={code} noinline={props.noinline} language={language} />
    );
  }
  return (
    <div>
      <Highlight code={code} language="tsx">
        {({ style, tokens, getLineProps, getTokenProps }: any) => (
          <pre style={style}>
            {tokens.map((line: any, i: number) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token: any, key: any) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
  return <LiveCode code={code} />;
}
export default Code;
