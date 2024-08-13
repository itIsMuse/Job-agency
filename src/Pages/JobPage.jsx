import React from "react";
import { useState, useEffect } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import Spinner from '../Components/Spinner'
import JobListing from "../Components/JobListing";


const jobLoader = async({params}) => {
  const result = await fetch (`/api/jobs/${params.id}`)
    const data = await  result.json()
    return data
  }

const JobPage = () => {
  const {id} = useParams()
  const job = useLoaderData()


//     const [job, setJob] = useState(null)
//     const {id} = useParams()
//     const [loading, setLoading] = useState(true)
//     useEffect(() => {
//         const fetchJobs = async () => {
//         try {
//           const result = await fetch(`/api/jobs/${id}`);
//           const data = await result.json();
//           setJob(data);
//           console.log(data)
//         } catch (error) {
//           console.log("error loading", error);
//         } finally {
//           setLoading(false);
//         }
//       };
//       fetchJobs()
//     }, [])
    
//     return loading ? <Spinner />: <h1>{job.title}</h1>
return <h1>{job.title}</h1>
}


export { JobPage as default, jobLoader}