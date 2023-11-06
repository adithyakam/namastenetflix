import { Provider } from "react-redux";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Login from "./Login";
import Body from "./Components/Body";
import { store } from "./Components/Redux/store";

function App() {
  return (
    <Provider store={store}>
      <Body />
    </Provider>
  );
}

export default App;
