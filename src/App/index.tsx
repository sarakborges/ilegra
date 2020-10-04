// React
import React from "react";

// Context
import { AppProvider } from "Contexts/App";

// Container
import YourMaster from "Containers/YourMaster";

// Styles
import "reset.css";
import { GlobalStyle } from "./style";

// App
const App = () => {
  return (
    <AppProvider>
      <GlobalStyle />
      <YourMaster />
    </AppProvider>
  );
};

export default App;
