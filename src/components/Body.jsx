import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { toggleLogin } from "../utils/loginSlice";
import { Outlet } from "react-router-dom";
import LoginPage from "./LoginPage";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Body = () => {
  const auth = (store) => store.login.auth;
  return (
    <div className="sm:grid sm:grid-flow-col flex flex-col w-screen">
      {!auth ? (
        <LoginPage />
      ) : (
        <>
          <Sidebar />
          <Outlet />
        </>
      )}
    </div>
  );
};
export default Body;
