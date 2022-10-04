import React from "react";
import RankingTable from "./RankingTable";

const Result = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-success" style={{ letterSpacing: "5px" }}>
        Ranking
        <hr
          className=" border-success border-1 opacity-50 "
          style={{ width: "250px" }}
        />
      </h1>
      <RankingTable />
    </div>
  );
};

export default Result;
