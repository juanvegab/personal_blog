import { Link } from "react-router-dom";

const BlogBtn = ({ label, route, type, colorSet = "text-white bg-indigo-500 border-transparent", inverted = false }) => {
  const styles = `border rounded-3xl inline-block py-2 px-5 mx-1 text-sm font-regular mb-2 ${inverted ? "bg-white text-indigo-500 border-indigo-500" :colorSet}`;
  if (type) return <button className={styles} type={type}>{label}</button>;

  return (
    <Link to={route}>
      <div className={styles}>
        {label}
      </div>
    </Link>
  );
}

export { BlogBtn };