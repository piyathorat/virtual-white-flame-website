import React from "react";
import Images from "./Images";
import Videos from "./Videos";

export default function Gallery({ type }) {
  return (
    <div className="container mt-4">
      {type === "images" && <Images />}
      {type === "videos" && <Videos />}
    </div>
  );
}
