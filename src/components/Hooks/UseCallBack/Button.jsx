import React from "react";

function Button({ handleClick, children }) {
  console.log(`Rendering - ${children}`);
  return (
    <button
      onClick={handleClick}
      className="rounded p-2 text-lg font-bold my-4 bg-sky-500 text-white"
    >
      {children}
    </button>
  );
}

export default React.memo(Button);
