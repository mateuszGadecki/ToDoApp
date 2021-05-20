import React from "react";

import Tasks from "./Tasks/Tasks";
import Header from "./Layout/Header";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Tasks />
      </main>
    </React.Fragment>
  );
}

export default App;
