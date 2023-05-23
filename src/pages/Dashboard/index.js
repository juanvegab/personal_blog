import { Link } from "react-router-dom";
import { useDashboard } from "./useDashboard";

const Dashboard = () => {
  const { isLoading, posts } =  useDashboard();

  return (
    <div className="page-posts-list">
      {isLoading && <p>Posts are being loaded...</p>}
      {!isLoading && posts && (
        <table>
          <thead>
            <tr>
              <td></td>
              <td></td>
              <td>Id</td>
              <td>Date</td>
              <td>Featured Image</td>
              <td>Title</td>
              <td>Author</td>
            </tr>
          </thead>

          <tbody>
            {posts && posts.map(({ id, featuredImage, date, title, author }) => (
              <tr key={`table_row_${id}`}>
                <td><Link to={`/blog/${id}`} target="blank">Open</Link></td>
                <td><Link to={`edit/${id}`}>Edit</Link></td>
                <td>{id}</td>
                <td>{date}</td>
                <td>{featuredImage}</td>
                <td>{title}</td>
                <td>{author.name}</td>
              </tr>
            ))}
          </tbody>
            
          <tfoot>
            <tr>
              <th colSpan="7">Total of posts is {posts.length}</th>
            </tr>
            <tr>
              <th colSpan="7">
                <Link to="new">New Post</Link>
              </th>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
}

export { Dashboard };