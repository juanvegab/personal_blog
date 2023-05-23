import classNames from "classnames";
import { Link } from "react-router-dom";
import './styles.css';
import { HeroImage } from "../HeroImage";

const PostCard = ({ post, horizontal = false }) => {
  if (!post) return null; 
  const { id, title, featuredImage, author, tags, date } = post;
  return (
    <div className={classNames("post-card", { horizontal })}>
      <div className="post-card--image-wrapper">
        <HeroImage imageURL={featuredImage} altText={title} />
      </div>
      <div className="post-card--info-wrapper">
        <div>{tags && tags.map(t => <span key={`post_tag_${id}_${t}`}>{t}</span>)}</div>
        <Link to={`/post/${id}`}>
          <h3>{title}</h3>
        </Link>
        <p>{title}</p>
        {author && (
          <div>
            <div>
              <img src={author.thumbnail} alt={author.name} />
            </div>
            <div>
              <p>By {author.name}</p>
              <small>{date}</small>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export { PostCard };