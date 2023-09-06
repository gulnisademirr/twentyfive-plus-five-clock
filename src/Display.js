// import { DisplayState, formatTime } from "./helpers.ts";
// import { FaPlay, FaPause, FaUndo } from "react-icons/fa";

// // interface DisplayProps {
// //   displayState: DisplayState;
// //   reset: () => void;
// //   startStop: (displayState: DisplayState) => void;
// // }

// const Display = ({
//   displayState,
//   reset,
//   startStop,
// }) => {
//   return (
//     <div className="display">
//       <h4 id="timer-label">{displayState.timeType}</h4>
//       <span
//         id="time-left"
//         style={{ color: `${displayState.timerRunning ? "red" : "white"}` }}
//       >
//         {formatTime(displayState.time)}
//       </span>
//       <div>
//         <button id="start_stop" onClick={() => startStop(displayState)}>
//           {displayState.timerRunning 
//           ? 
//           <FaPause /> : <FaPlay />
//           }
//         </button>
//         <button id="reset" onClick={reset}>
//           <FaUndo />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Display;
import React from "react";
import AlarmSound from "./AlarmSound.mp3";
import { FaPlay, FaPause, FaUndo } from "react-icons/fa";
import {  formatTime } from "./helpers.ts";

function Display(props) {
  return (
    <div className="display">
      <h4 id="timer-label">{props.displayState.timeType}</h4>
      <span
        id="time-left"
        style={{ color: `${props.displayState.timerRunning ? "red" : "white"}` }}
      >
        {formatTime(props.displayState.time)}
      </span>
      <div>
        <button id="start_stop" onClick={() => props.startStop(props.displayState)}>
          {props.displayState.timerRunning ? <FaPause /> : <FaPlay />}
        </button>
        <button id="reset" onClick={props.reset}>
          <FaUndo />
        </button>
      </div>
    </div>
  );
}

export default Display;
