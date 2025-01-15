import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Main from "./Component/Main/Main";
import Login from "./Component/Login/Login";
import Logout from "./Component/Login/LogOut";
import ProtectedRoute from "./Component/ProtectedRoute";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/logout",
      element: <Logout />,
    },
    {
      path: "/main",
      element: (
        <ProtectedRoute>
          <Main />
        </ProtectedRoute>
      ),
    },
    {
      path: "/",
      element: <Navigate to="/login" />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
