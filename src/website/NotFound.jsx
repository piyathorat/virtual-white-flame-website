import React from "react";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className="text-danger">404</h1>
      <h4>Page Not Found</h4>
      <p className="text-muted">
        The page you are looking for does not exist.
      </p>
    </div>
  );
}
