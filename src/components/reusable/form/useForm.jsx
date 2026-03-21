import { useState } from "react";

export default function useForm(fields) {
  // initial values
  const initialValues = {};
  fields.forEach((field) => {
    initialValues[field.name] = field.initial || "";
  });

  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    setValues((prev) => ({
      ...prev, [e.target.name]: e.target.value,
    }));
  };

  const reset = () => {
    setValues(initialValues);
  };

  return { values, handleChange, reset };
}
