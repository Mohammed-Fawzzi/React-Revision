// import React from "react";
// import useEx1 from "./useEx1";

// export default function Ex1() {
//   // Ex1 V1
//   // { const count, increment, decrement, reset } = useEx1(0);

//   // Ex1 V2
//   const { count, handleCount } = useEx1(0);

//   return (
//     <div>
//       <h1 className="font-bold text-red-700">Example One For Custom Hook</h1>
//       <p className="my-5">Count - {count}</p>

//       {/* Ex1 V1 */}
//       {/* <div className="flex justify-center items-center gap-4 mt-5">
//         <button
//           className="p-2 bg-amber-600 text-white rounded cursor-pointer"
//           onClick={() => increment()}
//         >
//           Increment
//         </button>
//         <button
//           className="p-2 bg-sky-600 text-white rounded cursor-pointer"
//           onClick={() => decrement()}
//         >
//           Decrement
//         </button>
//         <button
//           className="p-2 bg-red-600 text-white rounded cursor-pointer"
//           onClick={() => reset()}
//         >
//           Reset
//         </button>
//       </div> */}

//       {/* Ex1 V2 */}
//       <div className="flex justify-center items-center gap-4 mt-5">
//         <button
//           className="p-2 bg-amber-600 text-white rounded cursor-pointer"
//           onClick={() => handleCount("increment")}
//         >
//           Increment
//         </button>
//         <button
//           className="p-2 bg-sky-600 text-white rounded cursor-pointer"
//           onClick={() => handleCount("decrement")}
//         >
//           Decrement
//         </button>
//         <button
//           className="p-2 bg-red-600 text-white rounded cursor-pointer"
//           onClick={() => handleCount("reset")}
//         >
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// }

import React from "react";
import useEx1 from "./useEx1";

export default function Ex1() {
  // V1
  // const { count, increment, decrement, reset } = useEx1(0);

  // V2
  const { count, handleCount } = useEx1(0);

  // const actionsV1 = [
  //   { label: "Increment", action: increment, className: "bg-amber-600" },
  //   { label: "Decrement", action: decrement, className: "bg-sky-600" },
  //   { label: "Reset", action: reset, className: "bg-red-600" },
  // ];

  const actionsV2 = [
    { label: "Increment", type: "increment", className: "bg-amber-600" },
    { label: "Decrement", type: "decrement", className: "bg-sky-600" },
    { label: "Reset", type: "reset", className: "bg-red-600" },
  ];

  return (
    <div>
      <h1 className="font-bold text-red-700">Example One For Custom Hook</h1>

      <p className="my-5">Count - {count}</p>

      {/* V1 */}
      {/* <div className="flex justify-center items-center gap-4 mt-5">
        {actionsV1.map((btn) => (
          <button
            key={btn.label}
            className={`p-2 text-white rounded cursor-pointer ${btn.className}`}
            onClick={btn.action}
          >
            {btn.label}
          </button>
        ))}
      </div> */}

      {/* V2 */}
      <div className="flex justify-center items-center gap-4 mt-5">
        {actionsV2.map((btn) => (
          <button
            key={btn.type}
            className={`p-2 text-white rounded cursor-pointer ${btn.className}`}
            onClick={() => handleCount(btn.type)}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
}
