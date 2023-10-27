import { Provider } from "react-redux";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Login from "./Login";
import Body from "./Body";
import { store } from "./Components/Redux/store";

function App() {
  return (
    <Provider store={store}>
      <Body />
    </Provider>
  );
}

export default App;
