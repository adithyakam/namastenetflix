import "./App.css";
import Header from "./Header";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);

function App() {
  return (
    <div className="">
      <Header />
      <RouterProvider router={approuter}></RouterProvider>
    </div>
  );
}

export default App;
