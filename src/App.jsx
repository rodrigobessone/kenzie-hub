import React from "react";
import RoutesMain from "./routes/RoutesMain";
import { Context } from "../providers/UserContext/UserContext";

function App() {
  return (
    <Context>
      <RoutesMain />
    </Context>
  );
}

export default App;
