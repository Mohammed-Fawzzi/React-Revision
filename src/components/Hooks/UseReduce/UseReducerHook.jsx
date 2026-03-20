import React, { useReducer } from "react";
import { initialValue, reducer } from "./reducer";

export default function UseReducerHook() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const [stateTwo, dispatchTwo] = useReducer(reducer, initialValue);

  return (
    <div>
      <div className="exOne">
        <h1>This is useReducer Example 1 </h1>
        <h3 className="my-5">Counter: {state}</h3>
        <div className="flex justify-center items-center gap-4">
          <button
            className="p-2 bg-amber-600 text-white rounded cursor-pointer"
            onClick={() => dispatch("increment")}
          >
            Increment
          </button>
          <button
            className="p-2 bg-sky-600 text-white rounded cursor-pointer"
            onClick={() => dispatch("decrement")}
          >
            Decrement
          </button>
          <button
            className="p-2 bg-red-600 text-white rounded cursor-pointer"
            onClick={() => dispatch("reset")}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="exTwo mt-5">
        <h1>This is useReducer Example 2 </h1>
        <h3 className="my-5">Counter: {stateTwo}</h3>
        <div className="flex justify-center items-center gap-4">
          <button
            className="p-2 bg-black text-white rounded cursor-pointer"
            onClick={() => dispatchTwo("increment")}
          >
            Increment
          </button>
          <button
            className="p-2 bg-emerald-600 text-white rounded cursor-pointer"
            onClick={() => dispatchTwo("decrement")}
          >
            Decrement
          </button>
          <button
            className="p-2 bg-red-600 text-white rounded cursor-pointer"
            onClick={() => dispatchTwo("reset")}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
