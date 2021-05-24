import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errorMsg: "" };
  }

  componentDidCatch(err, errorInfo) {
    this.setState({ errorMsg: err.message });
    // You can also log the error to an error reporting service
    //   logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.errorMsg) {
      // You can render any custom fallback UI
      return <h1>{this.state.errorMsg}</h1>;
    }

    return this.props.children;
  }
}
