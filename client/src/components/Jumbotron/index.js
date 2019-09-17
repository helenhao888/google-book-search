import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 30, clear: "both", marginTop: 10, textAlign: "left" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
