import { useReducer, useState } from "react";

const reducer = (state, action) => {
  console.table(state, action);
  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  }
  return state /*reducer function always return something */;
};

const Use_Reducer = () => {
  //1.reducer is pure function
  //2.reducer function defined outside function components
  const [currentstate, updatestate] = useState(0 /*initialState*/);
  //3.dispatch(updateState) it trigger reducer function at "onClick"
 
  const [state, dispatch /*is like useState updateState */] = useReducer(
    reducer,/*Additional*/
    0 /*(initialState)*/
  );
  return (
    <>
      <div className="border-2 border-black rounded-lg p-5 inline-block ">
        <p className="text-2xl font-bold text-center font-mono">{state}</p>
        <button
          onClick={() => {
            dispatch({ type: "INCREMENT" });
          }}
          className="bg-yellow-300 text-base font-bold p-1 rounded-lg mb-1 active:bg-yellow-200"
        >
          INC
        </button>
        <br />
        <button
          onClick={() => {
            dispatch({ type: "DECREMENT" });
          }}
          className="bg-yellow-300 text-base font-bold p-1 rounded-lg active:bg-yellow-200"
        >
          DEC
        </button>
      </div>
    </>
  );
};

export default Use_Reducer;
