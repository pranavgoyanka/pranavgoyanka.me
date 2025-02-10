import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="text-center ">
        <div className="flex flex-col md:flex-row center">
          <div className="flex-1">
            <img
              src="/me.JPG"
              alt="Circular Photo"
              className="h-64 w-64 object-cover rounded-full mx-auto"
            />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <p className="my-auto text-justify">
              I am a{" "}
              <Link
                to="/about#experience"
                className="font-bold underline hover:text-stone-700 hover:cursor-pointer"
              >
                Software Developer
              </Link>{" "}
              passionate about building backend systems, with a particular focus
              on distributed systems. I love creating creating{" "}
              <a
                href="/about#projects"
                className="font-bold underline hover:text-stone-700 hover:cursor-pointer mx-1"
              >
                pet projects
              </a>{" "}
              that range from{" "}
              <a
                href="https://openpoker.vercel.app/"
                className="font-bold underline hover:text-stone-700 hover:cursor-pointer"
              >
                silly games
              </a>{" "}
              to{" "}
              <a
                href="https://github.com/pranavgoyanka/RAG-on-Markdown-Docs"
                className="font-bold underline hover:text-stone-700 hover:cursor-pointer"
              >
                machine learning tools
              </a>
              . I also occasionally write{" "}
              <a
                href="/about#blogs"
                className="font-bold underline hover:text-stone-700 hover:cursor-pointer mx-1"
              >
                blog posts
              </a>
              , which you might find worth checking out. If you’re into music,
              drop by my{" "}
              <a
                href="https://www.instagram.com/dehydratedcomlag/"
                className="font-bold underline hover:text-stone-700 hover:cursor-pointer"
              >
                guitar page
              </a>{" "}
              on Instagram and say hi!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
