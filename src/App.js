import React, { useState } from "react";
import AxiosPosts from "./AxiosPosts";
import DocumentClick from "./DocumentClick";
import Interval from "./Interval";
import Timeout from "./Timeout";

function App() {
  const [showPosts, setShowPosts] = useState();

  return (
    <div>
      {/* <button onClick={() => setShowPosts(true)}>Fetch Posts</button>
      <button onClick={() => setShowPosts(false)}>Hide Posts</button>
      {showPosts && <AxiosPosts />} */}
      {/* <Interval /> */}
      <DocumentClick />
    </div>
  );
}

export default App;
