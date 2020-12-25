import React from "react";
import Christmas from "./State/Christmas";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../src/components/Navbar/Navbar";
import Login from "../src/Form/Login";
function App() {
  return (
    <div>
      <Navbar />
      <Christmas />
      <Login />
    </div>
  );
}
export default App;
