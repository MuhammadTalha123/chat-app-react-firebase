import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import ErrorHandler from "./pages/errorHandler/ErrorHandler";
import Loading from "./components/loading/Loading";
const Index = lazy(() => import("./routes/index.js"));

ReactDOM.render(
  <ErrorHandler>
    <Suspense fallback={<Loading />}>
      <Index />
    </Suspense>
  </ErrorHandler>,
  document.getElementById("root")
);
