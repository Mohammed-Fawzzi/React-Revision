import formFields from "./config";
import useForm from "./useForm";

export default function ReusableForm() {
  const { values, handleChange, reset } = useForm(formFields);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    alert(`Hello - ${values.firstName} ${values.lastName}`);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-xl shadow space-y-4"
    >
      {formFields.map((field) => (
        <div key={field.name} className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            {field.label}
          </label>

          <input
            name={field.name}
            type={field.type}
            value={values[field.name]}
            onChange={handleChange}
            placeholder={field.placeholder}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      ))}

      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded-lg cursor-pointer hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
}
