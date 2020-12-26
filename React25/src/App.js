import React from "react";
import Christmas from "./State/Christmas";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../src/components/Navbar/Navbar";
import Login from "../src/Form/Login";
import ProductList from "./components/Products/ProductList";
import Message from "./components/EventBinding/Message";
import Simple from "./components/EventBinding/Simple";
function App() {
  return (
    <div>
      <Navbar />
      {/* <ProductList /> */}
      {/* <Login /> */}
      {/* <Message /> */}
      <Simple />
    </div>
  );
}
export default App;
