import React from "react";
import useEx2 from "./useEx2";

// export default function Ex2() {
//   const [firstName, setFirstName] = useState("Mohamed");
//   const [lastName, setLastName] = useState("Fawzzi");

//   const handelSubmit = (e) => {
//     e.preventDefault();
//     console.log(`Submitted`);
//     alert(`Welcome - ${firstName} - ${lastName}`);
//   };

//   console.log(`Render`);

//   return (
//     <div>
//       <h1 className="text-2xl font-bold text-red-600 text-center mb-6">
//         Example Two For Custom Hook
//       </h1>

//       <div className="flex items-center justify-center">
//         <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
//           <form className="flex flex-col gap-4">
//             <input
//               type="text"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               placeholder="First Name"
//               className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
//             />

//             <input
//               type="text"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//               placeholder="Last Name"
//               className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
//             />

//             <button
//               onClick={handelSubmit}
//               className="bg-red-500 hover:bg-red-600 text-white cursor-pointer py-3 rounded-lg transition duration-300"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Ex2() {
  const {
    value: firstName,
    bind: bindFirstName,
    reset: resetFirstName,
  } = useEx2("Mohamed", "text");

  const {
    value: lastName,
    bind: bindLastName,
    reset: resetLastName,
  } = useEx2("Fawzzi", "text");

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitted`);
    alert(`Welcome - ${firstName} - ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  console.log(`Render`);

  return (
    <div>
      <h1 className="text-2xl font-bold text-red-600 text-center mb-6">
        Example Two For Custom Hook
      </h1>

      <div className="flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
          <form className="flex flex-col gap-4">
            <input
              {...bindFirstName}
              placeholder="First Name"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            />

            <input
              {...bindLastName}
              placeholder="Last Name"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            />

            <button
              onClick={handelSubmit}
              className="bg-red-500 hover:bg-red-600 text-white cursor-pointer py-3 rounded-lg transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
