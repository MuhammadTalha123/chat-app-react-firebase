import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./loading.css";


const Loading = () => {
  return (
    <div className="loading_container">
      <CircularProgress size={100} id="progress_circle" />
    </div>
  );
};

export default Loading;
