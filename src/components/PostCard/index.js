import classNames from "classnames";
import { Link } from "react-router-dom";
import { FullWidthImage } from "../FullWidthImage";
import { Tag } from "../Tag";
import { AuthorThumbnail } from "../AuthorThumnail";
import { TagList } from "../TagList";

const PostCard = ({ post, horizontal = false }) => {
  if (!post) return null; 
  const { id, title, featuredImage, author, tags, date, excerpt } = post;
  return (
    <div className={classNames("flex", { "flex-col": !horizontal })}>
      <div className={classNames("overflow-hidden rounded-3xl max-h-96", { "w-7/12": horizontal })}>
        <Link to={`/blog/${id}`}>
          <FullWidthImage imageURL={featuredImage} altText={title} />
        </Link>
      </div>
      <div className={classNames("flex flex-col mt-2", { "w-5/12 ml-5": horizontal })}>
        <div className="mb-3 -ml-1">
          <TagList tags={tags} blogId={id} />
        </div>
        <Link to={`/blog/${id}`}>
          <h3 className={`${horizontal ? "text-4xl" : "text-2xl"} leading-tight font-semibold mb-4`}>{title}</h3>
        </Link>
        <p className="text-base leading-8 text-gray-500 font-normal w-10/12 mb-5">{excerpt}</p>
        {author && (
          <div className="mt-auto mb-4">
            <AuthorThumbnail author={author} smallText={date} />
          </div>
        )}
      </div>
    </div>
  );
}

export { PostCard };