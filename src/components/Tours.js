import React, { useState } from "react";
import data from "../data";
import Tour from "./Tour";

function Tours() {
  const [tours, setTours] = useState(data);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (tours.length === 0) {
    return <h2>No tours left</h2>;
  }

  return (
    <div className="tours">
      {tours.map((item) => (
        <Tour key={item.id} item={item} onRemove={removeTour} />
      ))}
    </div>
  );
}

export default Tours;
