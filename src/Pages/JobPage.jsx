import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from '../Components/Spinner'

const JobPage = () => {

    const [job, setJob] = useState(null)
    const {id} = useParams()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchJobs = async () => {
        try {
          const result = await fetch(`/api/jobs/${id}`);
          const data = await result.json();
          setJob(data);
          console.log(data)
        } catch (error) {
          console.log("error loading", error);
        } finally {
          setLoading(false);
        }
      };
      fetchJobs()
    }, [])
    
    return loading ? <Spinner />: <h1>{job.title}</h1>
}


export default JobPage