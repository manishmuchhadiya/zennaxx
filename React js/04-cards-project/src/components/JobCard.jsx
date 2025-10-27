import React from "react";

const JobCard = ({ company, position, salary }) => {
  return (
    <div>
      <p>{company}</p>
      <p>{position}</p>
      <p>{salary}</p>
    </div>
  );
};

export default JobCard;
