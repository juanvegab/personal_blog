const Tag = ({ label, colorSet = "bg-pink-100 text-pink-700" }) => {
  return (
    <div className={`rounded-lg inline-block p-2 mx-1 text-sm font-regular mb-2 ${colorSet}`}>
      {label}
    </div>
  );
}

export { Tag };