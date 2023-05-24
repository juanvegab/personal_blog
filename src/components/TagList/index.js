import { TAGS_COLOR_SET } from "../../constants/stringConstants";
import { Tag } from "../Tag";

const TagList = ({ tags, blogId }) => {
  return (
    <>
      {tags && tags.map((t, i) => <Tag key={`post_tag_${blogId}_${t}`} label={t} colorSet={TAGS_COLOR_SET[i]} />)}
    </>
  );
}

export { TagList };