import { Link } from "react-router-dom";
import { AllBlogs } from "../blogs/AllBlogs";
const BlogList = () => {

  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-4">blog posts</h1>
      <ul className="ml-4 mt-2">
        {AllBlogs.map((blogEntry) => (
          <li className="mb-2 list-disc">
            <Link
              to={'blogs/' + blogEntry.url}
              className="underline"
            >
              {blogEntry.title}
            </Link>
            <br />
            <span className="italic">{blogEntry.date}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BlogList;
