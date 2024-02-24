import { useState } from "react";

const Use_State = () => {
  const [state, setState] = useState(0);
  return (
    <>
      <div className="border-2 border-black rounded-lg p-5 inline-block ">
        <p className="text-2xl font-bold text-center font-mono">{state}</p>
        <button
          onClick={() => {
            setState(state + 1);
          }}
          className="bg-yellow-300 text-base font-bold p-1 rounded-lg mb-1 active:bg-yellow-200"
        >
          INC
        </button>
        <br />
        <button
          onClick={() => {
            setState(state - 1);
          }}
          className="bg-yellow-300 text-base font-bold p-1 rounded-lg active:bg-yellow-200"
        >
          DEC
        </button>
      </div>
    </>
  );
};

export default Use_State;
