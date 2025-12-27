import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout";
import StartPage from "./components/StartPage.jsx";
import AddMonaten from "./components/AddMonaten.jsx";
import ZeigtEingeben from "./components/ZeigtEingeben.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <StartPage/>,
                // loader: fetchCat,
                // errorElement: <ErrorBoundary/>
            },

            {
                path: "addmonaten",
                element: <AddMonaten to={"/addmonaten"}/>
            },

            {
                path: "zeigteingeben",
                element: <ZeigtEingeben to={"/zeigteingeben"}/>
            },
        ],
    }]);

function App() {


    return <RouterProvider router={ router }/>;
}

export default App




