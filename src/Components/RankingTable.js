import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { rankingObj } from "./DishCard";

const RankingTable = () => {
  const [Loading, setLoading] = useState(true);
  const setLoad = () => {
    setLoading(false);
  };
  useEffect(() => {
    setTimeout(setLoad, 1500);
  }, []);

  return (
    <div className="container mt-5">
      {Loading ? (
        <div className="container d-flex justify-content-center">
          <CircularProgress className="text-success" />
        </div>
      ) : (
        <table className="table table-success table-striped table-hover table-bordered ms-5 table-responsive">
          <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Dish</th>
              <th scope="col">Points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{rankingObj.FirstRank}</td>
              <td>{rankingObj.FirstRankPoints}</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>{rankingObj.SecondRank}</td>
              <td>{rankingObj.SecondRankPoints}</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>{rankingObj.ThirdRank}</td>
              <td>{rankingObj.ThirdRankPoints}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RankingTable;
