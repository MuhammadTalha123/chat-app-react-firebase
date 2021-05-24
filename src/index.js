import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import ErrorHandler from "./pages/errorHandler/ErrorHandler";
const Index = lazy(() => import("./routes/index.js"));

ReactDOM.render(
  <ErrorHandler>
    <Suspense fallback={<div>Loading...</div>}>
      <Index />
    </Suspense>
  </ErrorHandler>,
  document.getElementById("root")
);
