import React, { useMemo, useState } from "react";

export default function UseMemoHook() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const incrementCountOne = () => {
    setCountOne(countOne + 1);
  };
  const incrementCountTwo = () => {
    setCountTwo(countTwo + 1);
  };

  // Problem:
  // isEven function is expensive and runs on every render,
  // even when only countTwo changes (which is unnecessary)
  // const isEven = () => {
  //   let i = 0;
  //   while (i < 1000000000) i++;
  //   return countOne % 2 === 0;
  // };

  // Solution:
  // useMemo prevents re-running the expensive calculation
  // unless countOne changes
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i++;
    return countOne % 2 === 0;
  }, [countOne]);

  console.log("render");
  return (
    <div>
      <h1>UseMemoHook</h1>
      <div className="flex flex-col">
        <button
          onClick={incrementCountOne}
          className="p-2 my-4 rounded-lg bg-red-500 text-white cursor-pointer"
        >
          Count One - {countOne}
        </button>
        <div>{isEven ? "Even" : "Odd"}</div>
        <button
          onClick={incrementCountTwo}
          className="p-2 my-4 rounded-lg bg-sky-500 text-white cursor-pointer"
        >
          Count Two - {countTwo}
        </button>
      </div>
    </div>
  );
}
