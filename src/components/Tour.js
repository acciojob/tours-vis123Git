import React from "react";

function Tour({ item }) {
  return (
    <div className="tour">
      <div className="tour-img">
        <img src={item.image} alt="image" />
      </div>
      <div className="tour-info">
        <h3>{item.name}</h3>
        <p>{item.price}</p>
        <p>{item.info.length > 200 ? <p>{`${item.info.substring(0,200)}... `} <span className="show-hide">show more</span></p> : item.info }</p>
      </div>
    </div>
  );
}

export default Tour;
