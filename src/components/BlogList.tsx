import { Link } from "react-router-dom";
import { AllBlogs } from "../data/AllBlogs";
const BlogList = () => {

  return (
    <div id="blogs">
      <h1 className="text-3xl font-bold text-center mt-4 section-title">Blog Posts</h1>
      <ul className="ml-4 mt-2">
        {AllBlogs.map((blogEntry) => (
          <li className="mb-2 list-disc">
            <Link
              to={'/blogs/' + blogEntry.url}
              className="underline font-semibold"
            >
              {blogEntry.title}
            </Link>
            <br />
            <span className="italic">{blogEntry.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
