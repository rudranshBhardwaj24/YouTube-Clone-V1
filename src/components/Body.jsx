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
    <div className="grid grid-flow-col">
      {!auth ? (
        <LoginPage />
      ) : (
        <>
          <Sidebar />
          <Outlet />
        </>
      )}
      {/* <Sidebar />
      <Outlet /> */}
    </div>
  );
};
export default Body;
