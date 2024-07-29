import React from "react";

const JobPage = () => {
  useEffect(() => {
    const url = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
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
  return <div>JobPage</div>;
};

export default JobPage;
