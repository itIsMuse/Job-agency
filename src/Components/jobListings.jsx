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
    const url = isHome
      ? "http://localhost:8000/jobs?_limit=3"
      : "http://localhost:8000/jobs";
    const fetchJobs = async () => {
      try {
        const result = await fetch(url);
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

  const jobListing = jobs;
  const grid = "grid grid-cols-1 md:grid-cols-3 gap-6";

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div>
          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <>
              <div className={grid}>
                {jobListing.map((job) => {
                  return <JobListing key={job.id} job={job} />;
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
