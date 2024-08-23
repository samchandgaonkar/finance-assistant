import "../styles/_reset.scss";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/global.scss";

import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Page from "./Page";
import Sidebar from "./Sidebar";

export const App = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="app-container">
      <Sidebar />
      {location.pathname === "/" && (
        <Page>
          <div>
            <h1 className={"app-welcome"}>Welcome to Finance Assistant</h1>
            <h5>Please choose an option from the sidebar to begin...</h5>
          </div>
        </Page>
      )}
      <Outlet />
    </div>
  );
};
