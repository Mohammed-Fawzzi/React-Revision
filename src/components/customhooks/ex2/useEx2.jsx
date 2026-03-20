import React, { useState } from "react";

export default function useEx2(initialValues, type) {
  const [value, setValue] = useState(initialValues);
  const bind = {
    value: value,
    type: type,
    onChange: (e) => setValue(e.target.value),
  };
  const reset = () => {
    setValue(initialValues);
  };
  return { value, bind, reset };
}
