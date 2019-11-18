import React from "react";
import ReactDOM from "react-dom";
import Popular from "./components/Popular";
import "./index.css";

// Component
// State
// Lifecycle
// UI

class App extends React.Component {
  render() {
    return <Popular />;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
