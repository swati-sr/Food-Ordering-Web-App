import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./src/components/page/Home";

const Container = () => {
  return (
    <>
      <Home />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />);
