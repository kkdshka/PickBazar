import React from "react";
import "./Counter.scss";

export const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className="counter">
      <div
        className="counter_element counter_element_increment"
        onClick={onIncrement}
      >
        +
      </div>
      <div className="counter_element counter_element_value">{count}</div>
      <div
        className="counter_element counter_element_decrement"
        onClick={onDecrement}
      >
        -
      </div>
    </div>
  );
};
