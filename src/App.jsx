import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./components/RootLayout/RootLayout";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import CustomerDashboard from "./components/Dashboard/CustomerDashboard/CustomerDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Login></Login>,
      },
      {
        path: '/',
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "dashboard/customer/:username",
            element: <CustomerDashboard></CustomerDashboard>,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
