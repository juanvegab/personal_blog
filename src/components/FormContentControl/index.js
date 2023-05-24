const FormContentControl = ({ label, type, name, placeholder, value, required = false, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-neutral-800 font-medium text-md mb-2">{label}</label>
      <textarea
        className="block w-full border border-indigo-400 outline-indigo-400 rounded-md placeholder:text-neutral-400 py-1 px-2 h-80"
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange ? onChange(e) : null}
      ></textarea>
    </div>
  );
}

export { FormContentControl };