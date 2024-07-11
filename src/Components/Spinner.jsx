import React from "react";
import { ClipLoader } from "react-spinners/ClipLoader";

const Spinner = ({ loading }) => {
  const override = {
    margin: "100px auto",
  };
  return (
    <>
      <ClipLoader
        color="#1591ea"
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
};

export default Spinner;
