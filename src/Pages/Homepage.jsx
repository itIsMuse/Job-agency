import React from "react";
import Hero from "../Components/Hero";
import HomeCards from "../Components/HomeCards";
import JobListings from "../Components/jobListings";
import ViewAllJobs from "../Components/ViewAllJobs";

const Homepage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default Homepage;
