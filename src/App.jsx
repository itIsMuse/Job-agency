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
import Homepage from "./Pages/Homepage";
import MainLayout from "./Layout/MainLayout";
import JobsPage from "./Pages/JobsPage";
import JobPage, { jobLoader } from "./Pages/JobPage";
import AddJob from "./Pages/AddJob";
import NotFound from "./Pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/home" element={<Homepage />} />
      <Route path="/Jobs" element={<JobsPage />} />
      <Route path="/Jobs/:id" element={<JobPage />} loader = {jobLoader} />
      <Route path="/addJob" element={<AddJob addJobSubmit={addJobSubmit}/>} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
