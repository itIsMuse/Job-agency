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





const App = () => {
//addjob
  const addJob = async (newJob) => {
  const res = await fetch ('/api/jobs/', {
    headers:{
      'content-type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(newJob)
  })
  return 
  ;
  }

  //deletejob
  const deleteJob = async (jobId) => {
const res = await fetch (`/api/job/${id}`, {
  method: 'DELETE'
})
  } 

  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/home" element={<Homepage />} />
        <Route path="/Jobs" element={<JobsPage />} />
        <Route path="/Jobs/:id" element={<JobPage deleteJob = {deleteJob}/>} loader = {jobLoader} />
        <Route path="/addJob" element={<AddJob addJobSubmit={addJob}/>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  
  return <RouterProvider router={router} />;
};

export default App;
