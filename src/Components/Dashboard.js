import axios from "axios";
import React, { useEffect, useState } from "react";
import DishCard from "./DishCard";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const Dashboard = () => {
  const [Dishes, setDishes] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();
  const [firstRank, setFirstRank] = useState("");
  const [secondRank, setSecondRank] = useState("");
  const [thirdRank, setThirdRank] = useState("");

  const setRank = (rank, id) => {
    if (rank === 1) {
      setFirstRank(id);
    } else if (rank === 2) {
      setSecondRank(id);
    } else {
      setThirdRank(id);
    }
  };

  const fetchAPI = async () => {
    const { data } = await axios.get(
      "https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json"
    );
    setDishes(data);
  };

  useEffect(() => {
    setTimeout(fetchAPI, 1500);
  }, []);

  const handleClick = () => {
    navigate("/result");
  };

  return (
    <>
      <div className="d-flex justify-content-end mt-1">
        <button
          className="btn mt-2 me-2 btn-success"
          onClick={handleClick}
          disabled={isDisabled}
        >
          Submit
        </button>
      </div>
      <h1 style={{ marginLeft: "100px" }}>Vote Here</h1>
      <div
        className="container pt-4 d-flex justify-content-around
    flex-wrap"
      >
        {Dishes.length > 0 ? (
          Dishes.map((dish, index) => {
            return (
              <DishCard
                key={index}
                dish={dish}
                setRank={setRank}
                firstRank={firstRank}
                secondRank={secondRank}
                thirdRank={thirdRank}
                setIsDisabled={setIsDisabled}
              />
            );
          })
        ) : (
          <CircularProgress className="text-success" />
        )}
      </div>
    </>
  );
};

export default Dashboard;
