import React from "react";
import "./App.css";
import FeedbackForm from "./components/FeedbackForm";
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Feedback Application</h1>
        <FeedbackForm />
      </header>
    </div>
  );
};
export default App;
