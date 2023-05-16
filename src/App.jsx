import Head from "./components/Head";
import Body from "./components/Body";
import { Provider, useSelector } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import LoginPage from "./components/LoginPage";
import loginSlice from "./utils/loginSlice";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);

// const LoginCheck = () => {
//   const auth = useSelector((store) => store.login.auth);
//   console.log(auth);
//   return <div>{auth}</div>;
// };

function App() {
  return (
    <Provider store={store}>
      <Head />
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
