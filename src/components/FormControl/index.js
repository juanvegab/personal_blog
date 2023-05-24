const FormControl = ({ label, type, name, placeholder, value, required = false, onChange }) => {
  return (
    <div className="mb-4">
      <label for={name} className="block text-neutral-800 font-medium text-md mb-2">{label}</label>
      <input
        className="block w-full border border-indigo-400 outline-indigo-400 rounded-md placeholder:text-neutral-400 py-1 px-2"
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange ? onChange(e) : null}
      />
    </div>
  );
}

export { FormControl };