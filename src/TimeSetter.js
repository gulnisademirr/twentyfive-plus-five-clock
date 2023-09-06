// import { FaArrowDown, FaArrowUp } from "react-icons/fa";

// // interface TimerSetterProps {
// //   time: number;
// //   setTime: (time: number) => void;
// //   min: number;
// //   max: number;
// //   interval: number;
// //   type: "break" | "session";
// // }

// const TimeSetter = ({
//   time,
//   setTime,
//   min,
//   max,
//   interval,
//   type,
// }) => {
//   return (
//     <div>
//       <button
//         onClick={() => (time > min ? setTime(time - interval) : null)}
//         id={`${type}-decrement`}
//       >
//         <FaArrowDown />
//       </button>
//       <span id={`${type}-length`}>{time / interval}</span>
//       <button
//         onClick={() => (time < max ? setTime(time + interval) : null)}
//         id={`${type}-increment`}
//       >
//         <FaArrowUp />
//       </button>
//     </div>
//   );
// };

// export default TimeSetter;
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
