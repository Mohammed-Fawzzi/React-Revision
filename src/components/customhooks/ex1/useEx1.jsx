import React, { useState } from "react";
// ================== Ex1 V1 ================== //
// export default function useEx1(initialValues) {
//   const [count, setCount] = useState(initialValues);

//   const increment = () => {
//     setCount((prev) => prev + 1);
//   };
//   const decrement = () => {
//     setCount((prev) => {
//       if (prev === 0) {
//         alert(`We Cannot Decrement less than 0`);
//         return prev;
//       }
//       return prev - 1;
//     });
//   };
//   const reset = () => {
//     setCount((prev) => {
//       if (prev === 0) {
//         alert("The Count is already 0");
//         return prev;
//       }
//       return 0;
//     });
//   };

//   return { count, increment, decrement, reset };
// }

// ================== Ex1 V2 ================== //
export default function useEx1(initialValues) {
  const [count, setCount] = useState(initialValues);

  //   const handleCount = (type) => {
  //     if (type === "increment") {
  //       setCount((prev) => prev + 1);
  //     } else if (type === "decrement") {
  //       setCount((prev) => {
  //         if (prev === 0) {
  //           alert(`We Cannot Decrement less than 0`);
  //           return prev;
  //         }
  //         return prev - 1;
  //       });
  //     } else if (type === "reset") {
  //       setCount((prev) => {
  //         if (prev === 0) {
  //           alert("The Count is already 0");
  //           return prev;
  //         }
  //         return 0;
  //       });
  //     }
  //   };

  const handleCount = (type) => {
    switch (type) {
      case "increment":
        setCount((prev) => prev + 1);
        break;

      case "decrement":
        setCount((prev) => {
          if (prev === 0) {
            alert(`We Cannot Decrement less than 0`);
            return prev;
          }
          return prev - 1;
        });
        break;

      case "reset":
        setCount((prev) => {
          if (prev === 0) {
            alert("The Count is already 0");
            return prev;
          }
          return 0;
        });
        break;

      default:
        console.warn("Unknown action:", type);
    }
  };

  return { count, handleCount };
}
