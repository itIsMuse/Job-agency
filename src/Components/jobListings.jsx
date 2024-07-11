import React, { useState, useEffect } from "react";
import jobs from "../jobs.json";
import JobListing from "./JobListing";
import { data } from "autoprefixer";
import Spinner from "./Spinner";

const JobListings = ({ isHome }) => {
  const [fullDescripton, setFullDescription] = useState(false);

  const [jobs, setJob] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const result = await fetch("http://localhost:8000/jobs");
        const data = await result.json();
        setJob(data);
      } catch (error) {
        console.log("error loading", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const jobListing = isHome ? jobs.slice(0, 3) : jobs;
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <>
              {jobListing.map((job) => {
                return <JobListing key={job.id} job={job} />;
              })}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
