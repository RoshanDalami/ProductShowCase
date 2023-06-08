import { Fragment } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/Home";
import ProductPage from "./Pages/Product";
import ProductDetailsPage from "./Pages/ProductDetail";

import ErrorPage from "./Pages/ErrorPage";
import RootLayout from "./Pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products", element: <ProductPage /> },
      { path: "products/:productID", element: <ProductDetailsPage /> },
    ],
  },
]);

const App = () => {
  return (
    <Fragment>
      <RouterProvider router={router}></RouterProvider>
    </Fragment>
  );
};

export default App;
