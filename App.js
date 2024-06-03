import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './utils/store';
import Product from './components/Product';
import Payouts from './components/Payouts';
import Rewards from './components/Rewards';
import Home from './components/Home';
import Listing from './components/Listing';
import ProductDetails from './components/ProductDetails';
import MainLayout from './components/MainLayout'; // Import the new MainLayout component
import RewardsLayout from './components/RewardsLayout'; // Import the RewardsLayout component

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, 
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "product", 
        children: [
          {
            path: "",
            element: <Product />
          },
          {
            path: "listing",
            element: <Listing />
          },
          {
            path: "listing/:proId",
            element: <ProductDetails />
          },
        ],
      },
      {
        path: "payouts",
        element: <Payouts />
      },
    ],
  },
  {
    path: "rewards",
    element: <RewardsLayout />, 
    children: [
      {
        path: "",
        element: <Rewards />
      },
    ],
  },
]);

export default App;
