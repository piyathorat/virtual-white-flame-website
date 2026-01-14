import React from "react";

export default function UnderWorking() {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img
        src="/under-constr.png"
        alt="Page under working"
        style={{ maxWidth: "400px", width: "100%" }}
      />
      <h3 className="mt-3 text-secondary">
        This page is under development 🚧
      </h3>
    </div>
  );
}
