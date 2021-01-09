import React from "react";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Counter />
      </Provider>
    </React.Fragment>
  );
}

export default App;
