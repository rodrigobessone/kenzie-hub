import React from "react";

import RoutesMain from "./routes/RoutesMain";
import { Context } from "./pages/Login/User/Context";

function App() {
  return (
    <Context>
      <RoutesMain />
    </Context>
  );
}

export default App;
