import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const { status, statusText } = useRouteError();
  return (
    <div>
      <h1>{status}</h1>
      <h2>This is because the status: {statusText}</h2>
    </div>
  );
};

export default Error;
