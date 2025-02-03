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
import EditJobPage from "./Pages/EditJobPage";
import { Navigate } from "react-router-dom";





const App = () => {
//addjob
const addJob = async (newJob) => {
  const url = "https://api.jsonbin.io/v3/b/67a01ba7e41b4d34e4830805";

  try {
    // Step 1: Fetch current jobs from JSONBin
    const fetchResponse = await fetch(url);
    const fetchData = await fetchResponse.json();

    // Extract current jobs (ensure it exists)
    const currentJobs = fetchData.record?.jobs || [];

    // Step 2: Add new job to the list
    const updatedJobs = [...currentJobs, newJob];

    // Step 3: Send updated jobs back to JSONBin
    const updateResponse = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        record: {
          jobs: updatedJobs // Updated job list
        }
      })
    });

    const result = await updateResponse.json();
    console.log("Updated JSONBin:", result);
  } catch (error) {
    console.error("Error updating JSONBin:", error);
  }
};

  //deletejob
  const deleteJob = async (jobId) => {
const res = await fetch (`https://api.jsonbin.io/v3/b/67a01ba7e41b4d34e4830805/${jobId}`, {
  method: 'DELETE'
})
  } 


  const editJob = async (newInfo) => {
    try {
      const res = await fetch(`https://api.jsonbin.io/v3/b/67a01ba7e41b4d34e4830805/${newInfo.id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'PATCH',
        body: JSON.stringify(newInfo),
      });
  
      if (!res.ok) {
        throw new Error('Failed to update job');
      }
  
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };
  
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/Jobs" element={<JobsPage />} />
        <Route path="/Jobs/:id" element={<JobPage deleteJob = {deleteJob}/>} loader = {jobLoader} />
        <Route path="/addJob" element={<AddJob addJobSubmit={addJob}/>} />
        <Route path="/jobs/edit/:id" element={<EditJobPage updateJob={editJob} />} loader = {jobLoader}/>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  
  return <RouterProvider router={router} />;
};

export default App;
