import { useState, useEffect } from "react";
export const rankingObj = {};

const DishCard = ({
  dish,
  setRank,
  firstRank,
  secondRank,
  thirdRank,
  setIsDisabled,
}) => {
  const [color, setColor] = useState("");
  const [color2, setColor2] = useState("");
  const [color3, setColor3] = useState("");
  const [isCardSelected, setIsCardSelected] = useState(false);
  const [disable1, setDisable1] = useState(false);
  const [disable2, setDisable2] = useState(false);
  const [disable3, setDisable3] = useState(false);

  useEffect(() => {
    if (
      (firstRank && firstRank === dish.id) ||
      (secondRank && secondRank === dish.id) ||
      (thirdRank && thirdRank === dish.id)
    ) {
      setIsCardSelected(true);
      if (firstRank && firstRank === dish.id) {
        setColor("success");
      } else if (secondRank && secondRank === dish.id) {
        setColor2("info");
      } else if (thirdRank === dish.id) {
        setColor3("primary");
      }
    } else {
      if (firstRank) {
        setDisable1(true);
      }
      if (secondRank) {
        setDisable2(true);
      }
      if (thirdRank) {
        setDisable3(true);
      }
    }
  }, [firstRank, secondRank, thirdRank, dish.id]);

  return (
    <div>
      <div className="card mb-5" style={{ width: "18rem", lineHeight: "15px" }}>
        <img src={dish?.image} className="card-img-top" alt="{img}" />
        <div className="card-body">
          <h5 className="card-title">{dish?.dishName}</h5>
          <sub className="card-text" style={{ lineHeight: 0 }}>
            {dish?.description}
          </sub>
          <br />
          <div className="mt-3 ">
            <div className="btn-group" role="group" aria-disabled="false">
              <button
                type="button"
                className={`btn btn-${color}`}
                id="vote"
                disabled={isCardSelected || disable1}
                style={{
                  border: "1px solid black",
                  marginRight: "5px",
                  backgroundColor: `${color}`,
                }}
                onClick={() => {
                  setRank(1, dish?.id);
                  rankingObj.FirstRank = dish?.dishName;
                  rankingObj.FirstRankPoints = 30;
                }}
              >
                1
              </button>
              <button
                className={`btn btn-${color2}`}
                id="vote"
                style={{ border: "1px solid black", marginRight: "5px" }}
                disabled={isCardSelected || disable2}
                onClick={() => {
                  setRank(2, dish?.id);
                  rankingObj.SecondRank = dish?.dishName;
                  rankingObj.SecondRankPoints = 20;
                }}
              >
                2
              </button>
              <button
                className={`btn btn-${color3}`}
                id="vote"
                style={{ border: "1px solid black", marginRight: "5px" }}
                disabled={isCardSelected || disable3}
                onClick={() => {
                  setRank(3, dish?.id);
                  rankingObj.ThirdRank = dish?.dishName;
                  rankingObj.ThirdRankPoints = 10;
                  setIsDisabled(false);
                }}
              >
                3
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
