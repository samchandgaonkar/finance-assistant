import { createBrowserRouter } from "react-router-dom";
import { App } from "./components/App";
import Page from "./components/Page";
import SimpleInterest from "./components/SimpleInterest";
import CompoundInterest from "./components/CompoundInterest";
import EarlyPayOff from "./components/EarlyPayOff";
const getRouter = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: "/simple",
                    element: <Page> <SimpleInterest></SimpleInterest></Page>,
                },
                {
                    path: "/compound",
                    element: <Page> <CompoundInterest></CompoundInterest></Page>,
                },
                {
                    path: "/repayment",
                    element: <Page> <EarlyPayOff></EarlyPayOff></Page>,
                }
            ]
        },

    ]);
    return router;
}

export const Router = {
    getRouter: getRouter
}