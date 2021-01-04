import React from "react";
import Christmas from "./State/Christmas";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../src/components/Navbar/Navbar";
//import Login from "../src/Form/Login";
import ProductList from "./components/Products/ProductList";
import Message from "./components/EventBinding/Message";
import Simple from "./components/EventBinding/Simple";
import Login from "./FormHandling/Login";
function App() {
  let userName = "Narasimha"
  return (
    <div>
      <Navbar />
     
    </div>
  );
}
export default App;


/*
  <div>
      <Navbar />
      {/* <ProductList /> */}
      {/* <Login /> */}
      {/* <Message /> */}
      {/* <Simple /> */}
      <Login />
    </div>

*/