
import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

function TimeSetter(props) {
  return (
    <div>
      <button
        onClick={() => (props.time > props.min ? props.setTime(props.time - props.interval) : null)}
        id={`${props.type}-decrement`}
      >
        <FaArrowDown />
      </button>
      <span id={`${props.type}-length`}>{props.time / props.interval}</span>
      <button
        onClick={() => (props.time < props.max ? props.setTime(props.time + props.interval) : null)}
        id={`${props.type}-increment`}
      >
        <FaArrowUp />
      </button>
    </div>
  );
}

export default TimeSetter;
