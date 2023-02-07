import React from "react"
import Header from "./Header"
import DaySelect from "./DaySelect"

function App() {
  return (
    <React.Fragment>
      <div id="container">
        <Header />
        <DaySelect />
      </div>
    </React.Fragment>
  );
}

export default App;
