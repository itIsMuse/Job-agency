import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import HomeCards from "./Components/HomeCards";
import JobListings from "./Components/jobListings";
import ViewAllJobs from "./Components/ViewAllJobs";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<h1>Hello world </h1>} />)
);

const App = () => {
  return (
    <RouterProvider router={router} />
    //   // <>
    //   //   <Navbar />
    //   //   <Hero />
    //   //   <HomeCards />
    //   //   <JobListings />
    //   //   <ViewAllJobs />
    //   // </>
  );
};

export default App;
