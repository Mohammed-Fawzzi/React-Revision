import React, { useEffect, useRef, useState } from "react";

export default function UseRefHook() {
  const [value, setValue] = useState("");

  // Ref to access the input DOM element
  const inputRef = useRef(null);

  // Ref to store previous value (does NOT trigger re-render)
  const prevValueRef = useRef("");

  // Ref to count renders without causing re-render
  const renderCount = useRef(0);

  // Focus input on first mount
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Store previous value AFTER each render
  useEffect(() => {
    prevValueRef.current = value;
  }, [value]);

  // Increment render count on every render
  renderCount.current++;

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-4">useRef Advanced Example</h1>

      {/* Controlled input */}
      <input
        ref={inputRef} // attach ref to DOM
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search..."
        className="border p-2 rounded"
      />

      {/* Current state value */}
      <p className="mt-3">Current Value: {value}</p>

      {/* Previous value stored using useRef */}
      <p>Previous Value: {prevValueRef.current}</p>

      {/* Render count without re-render */}
      <p>Render Count: {renderCount.current}</p>
    </div>
  );
}
