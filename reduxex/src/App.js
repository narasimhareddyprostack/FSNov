import React from "react";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./redux/store";

import ProductList from "./components/ProductList";
function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Counter />
        <ProductList></ProductList>
      </Provider>
    </React.Fragment>
  );
}

export default App;
