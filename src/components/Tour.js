import React, { useState, useEffect } from "react";

function Tour({ item, onRemove }) {
  const [info, setInfo] = useState("");
  const [fullInfo, setFullInfo] = useState(false);

  useEffect(() => {
    if (!fullInfo) {
      setInfo(item.info.substring(0, 200));
    } else {
      setInfo(item.info);
    }
  }, [fullInfo, item.info]);

  return (
    <div className="tour">
      <div className="tour-img">
        <img src={item.image} alt="image" />
      </div>
      <div className="tour-info">
        <h3>{item.name}</h3>
        <div className="remove-btn">
          <button className="remove-tour" id={`remove-btn-${item.id}`} onClick={() => onRemove(item.id)}>
            Remove
          </button>
        <p>{item.price}</p>
        </div>
        <p id={`tour-item-para-${item.id}`}>
          {info}
          <button className="show-hide" id={`toggle-info-btn-${item.id}`} onClick={() => setFullInfo(!fullInfo)}>
            {fullInfo ? "See less" : "See more"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Tour;
