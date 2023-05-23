import React, { useState } from "react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";

function LiveCode({ code, noinline }: any) {
  const [liveCode, setLiveCode] = useState(code);
  const handleChange = (updatedLiveCode: string) => {
    setLiveCode(updatedLiveCode);
  };
  return (
    <LiveProvider code={liveCode} noInline={noinline}>
      <LivePreview />
      <LiveEditor tabMode="focus" onChange={handleChange} />
      <LiveError />
    </LiveProvider>
  );
}

export default LiveCode;
