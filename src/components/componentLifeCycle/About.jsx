import React, { useEffect, useRef, useState } from "react";

export default function About() {
  // useEffect(() => {
  //   let x = setInterval(() => {
  //     console.log(`Heloo`);
  //   }, 2000);

  //   return () => {
  //     clearInterval(x);
  //   };
  // }, []);

  // --- Problem - We don't know counter or userName Changed to display console
  //   useEffect(() => {
  //     console.log(`Counter or userName Changed`);
  //   }, [counter, userName]);

  // --- Fixed - By useRef();
  //   const [counter, setCounter] = useState();
  //   const [userName, setUserName] = useState();

  //   const prevCounter = useRef();
  //   const prevUserName = useRef();

  //   useEffect(() => {
  //     if (prevCounter.current !== counter) {
  //       console.log("counter Changed");
  //     }
  //     if (prevUserName.current !== userName) {
  //       console.log("UserName Changed");
  //     }

  //     prevCounter.current = counter;
  //     prevUserName.current = userName;

  //   }, [counter, userName]);

  // ---- UseEffect work in every render ? [object , array , function]
  // - Because js comparison by reference not values
  // - for example {} !== {} || [] !== []
  // - Any thing reference type make this problem
  //   const user = { name: "Ali", age: 25 };

  //   useEffect(() => {
  //     console.log("User changed");
  //   }, [user]);

  // ---- How to fix
  // Object --> useMemo || Array --> useMemo || Function --> useCallback
  // 1 - By value in object
  //   - useEffect(() => {
  //     console.log("User changed");
  //   }, [user.name]);

  // 2 - By useMemo hook
  //   - const user = useMemo(() => {
  //     return { name: "Ali", age: 25 };
  //   }, []);

  // 3 - By using state
  //   - const [user, setUser] = useState({
  //     name: "Ali",
  //     age: 25,
  //   });

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(`Component Mounting`);
    return () => {
      console.log(`Component UnMounting`);
    };
  }, []);

  useEffect(() => {
    if (counter === 0) return;
    console.log(`Component Updating`);
  }, [counter]);

  function changeCounter() {
    setCounter(Math.random());
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button
        onClick={() => changeCounter()}
        className="p-2 rounded-xl bg-red-600 text-white cursor-pointer"
      >
        Button
      </button>
    </div>
  );
}
