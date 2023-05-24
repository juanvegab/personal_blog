import { Link } from "react-router-dom";
import { useDashboard } from "./useDashboard";
import { SmallImage } from "../../components/SmallImage";
import { AuthorThumbnail } from "../../components/AuthorThumnail";
import { BlogBtn } from "../../components/BlogBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faExternalLinkAlt, faPencilAlt, faCheck  } from '@fortawesome/free-solid-svg-icons';
import { Spinner } from "../../components/Spinner";

const Dashboard = () => {
  const { isLoading, posts, deletePost, setAsFeatured } =  useDashboard();

  return (
    <div className="page-posts-list">
      <div className="text-neutral-600 mb-10">
        <h1 className="text-4xl font-semibold text-center my-4">Your posts collection</h1>
        <p className="text-center my-4 leading-8">Here you can manage all your posts, delete, edit create and set them as featured.</p>
      </div>
      <BlogBtn route="new" label="Create Post" />
      <Spinner isLoading={isLoading} />
      {!isLoading && posts && (
        <table className="rounded-xl overflow-hidden min-w-full text-left text-sm mb-20">
          <thead className="bg-neutral-100 text-center">
            <tr>
              <th className="px-6 py-4"></th>
              <th className="px-6 py-4"></th>
              <th className="px-6 py-4"></th>
              <th className="px-6 py-4"></th>
              <th className="px-6 py-4 font-medium">Id</th>
              <th className="px-6 py-4 font-medium">Title</th>
              <th className="px-6 py-4 font-medium">Author</th>
              <th className="px-6 py-4 font-medium">Date</th>
              <th className="px-6 py-4 font-medium">Featured Image</th>
            </tr>
          </thead>

          <tbody>
            {posts && posts.map(({ id, featuredImage, date, title, author, isFeatured }) => (
              <tr key={`table_row_${id}`} className="border-neutral-400 border-b">
                <td className="py-4 text-indigo-500 text-center">
                  <Link to={`/blog/${id}`} target="blank">
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </Link>
                </td>
                <td className="py-4 text-indigo-500 text-center">
                  <Link to={`edit/${id}`}>
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </Link>
                </td>
                <td className="py-4 text-red-500 text-center">
                  <button onClick={() => deletePost(id)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </td>
                <td className="py-4 text-green-500 text-center">
                  {isFeatured ? <FontAwesomeIcon icon={faCheck} /> : <button onClick={() => setAsFeatured(id)}>Set As Featured</button>}
                </td>
                <td className="py-4 text-center">{id}</td>
                <td className="py-4">{title}</td>
                <td className="py-4">
                  <AuthorThumbnail author={author} />
                </td>
                <td className="py-4">{date}</td>
                <td className="py-4">
                  <div className="flex justify-center">
                    <SmallImage imageURL={featuredImage} altText={title} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
            
          <tfoot>
            <tr>
              <th className="text-center py-4" colSpan="10">
                <p className="font-semibold">Total of posts is {posts.length}</p>
              </th>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
}

export { Dashboard };