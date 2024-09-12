import React from "react";
import data from "../data";
import Tour from "./Tour";
function Tours() {
  return (
    <div className="tours">
      {data.map((item) => {
        return <Tour key={item.id} item={item} />;
      })}
    </div>
  );
}

export default Tours;
