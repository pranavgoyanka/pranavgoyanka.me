import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import TypingText from "./TypingText";

const Navbar = () => {

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);



  return (
    <div className="lowercase text-center mt-4">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          {/* <h1 className="text-4xl font-bold">Pranav Goyanka</h1> */}
          <TypingText
        textArray={["Pranav Goyanka", "प्रणव गोयनका"]}
        typingSpeed={70}
        pauseTime={2000}
      />
          <span>Software Developer</span> <br />
          <span>M.S. in Computer Science</span> <br />
          <span>bedroom musician</span>
        </div>
        <div className="flex-1">
          pgoyanka [at] gmail [dot] com <br />
          <a href="https://github.com/pranavgoyanka/" className="underline">
            github
          </a>{" "}
          <br />
          <a
            href="https://www.linkedin.com/in/pranavgoyanka/"
            className="underline"
          >
            linkedin
          </a>{" "}
          <br />
          <a
            href="https://www.instagram.com/dehydratedcomlag/"
            className="underline"
          >
            instagram
          </a>{" "}
          <br />
        </div>
      </div>
      <hr className="m-2" />
      <span className="font-stretch-extra-condensed">

      {/* <a href="./index.html" className="mx-2">
        home 
        </a> */}
      <Link to="/" className="mx-2">Home</Link>
      |
      <a href="Pranav_Goyanka_Resume.pdf" className="mx-2">
        resume 
      </a>
      |
      {/* <a href="#education" className="mx-2">
        education 
      </a>
      |
      <a href="#projects" className="mx-2">
        projects 
      </a>
      |
      <a href="#blogs" className="mx-2">
        blog 
      </a>
      | */}
      <span onClick={() => setDarkMode(!darkMode)} id="svg-span" className="mx-2 hover:cursor-pointer"> 🌘 </span>
      </span>
      <hr className="m-2"/>
    </div>
  );
};

export default Navbar;
