import React, { useState, useEffect } from "react";

function Tour({ item }) {
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
        <p>{item.price}</p>
        <p id={`tour-item-para-${item.id}`}>
          {info}
          {fullInfo ? (
            <button id={`see-less-${item.id}`} onClick={() => setFullInfo(!fullInfo)}>
              See less
            </button>
          ) : (
            <button id={`see-more-${item.id}`} onClick={() => setFullInfo(!fullInfo)}>
              See more
            </button>
          )}
        </p>
      </div>
    </div>
  );
}

export default Tour;
