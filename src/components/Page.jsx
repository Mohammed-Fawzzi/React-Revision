import React, { useState } from "react";

export default function Page() {
  // How the useState Work
  // function useState(initialValue = 0) {
  //   let item = initialValue;
  //   function setItem(value) {
  //     item = value;
  //   }
  //   return [item, setItem];
  // }
  // let [item, setItem] = useState(0);

  let [count, setCount] = useState(0);
  let [toggle, setToggle] = useState(false);

  // ---------------- Error ---------
  // function changeCount() {
  //   // setCount(count + 1);
  //   // setCount(count++);
  //   setCount((prev) => prev + 1);
  //   setCount((prev) => prev + 1);
  //   console.log(count);
  // }

  // ---------------- Fixed ---------
  function changeCount() {
    setCount((prev) => {
      const newValue = prev + 1;
      console.log("after first update:", newValue);
      return newValue;
    });

    setCount((prev) => {
      const newValue = prev + 1;
      console.log("after second update:", newValue);
      return newValue;
    });

    setCount((prev) => {
      const newValue = prev + 2;
      console.log("after Third update:", newValue);
      return newValue;
    });
  }

  function changeToggle() {
    setToggle((prev) => !prev);
  }

  return (
    <>
      <section className="mt-10 text-2xl text-red-700">
        <div className="flex flex-col justify-center items-center space-y-5">
          <h1 className="text-xl mt-10 text-red-600">Count: {count}</h1>
          <button
            onClick={changeCount}
            className="p-3 rounded-xl text-xl bg-sky-600 text-white cursor-pointer"
          >
            Change Count
          </button>
          <button
            onClick={changeToggle}
            className={`p-3 rounded-xl text-xl ${toggle ? "bg-red-600" : "bg-purple-600"} text-white cursor-pointer`}
          >
            Button Toggle
          </button>
        </div>
      </section>
    </>
  );
}
