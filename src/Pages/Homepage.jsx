import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import HomeCards from "../Components/HomeCards";
import JobListings from "../Components/jobListings";
import ViewAllJobs from "../Components/ViewAllJobs";

const Homepage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </>
  );
};

export default Homepage;
