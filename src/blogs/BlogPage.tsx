import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import BuildingKernelsInWSL from "./BuildingKernelsInWSL";
import BlogsAndStuff from "./BlogsAndStuff";
import NotFound from "../pages/NotFound";
import "./BlogPage.css";
import { useEffect } from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";

const blogComponents: any = {
  BuildingKernelsInWSL: BuildingKernelsInWSL,
  BlogsAndStuff: BlogsAndStuff,
};

const BlogPage = () => {
  const { blogUrl } = useParams();

  useEffect(() => {
      window.scrollTo({top:0, behavior: "instant"})
    }, [location]);

  if (!blogUrl) {
    return <NotFound />;
  }

  const BlogComponent = blogComponents[blogUrl];

  return (
    <div className="mx-3 max-w-[800px] flex justify-center min-h-screen text-lg font-sans">
      <div className=" max-h-full w-full text-justify">
      <Navbar />
        {BlogComponent === undefined ? (
          <h1>Blog Not Found</h1>
        ) : (
          <BlogComponent />
        )}
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default BlogPage;
