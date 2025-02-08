import Navbar from "./Components/Navbar";
import BlogList from "./Components/BlogList";
import About from "./Components/About";
import "./App.css";

function App() {

  return (
    <div className="bg-stone-50 dark:bg-stone-950 text-black dark:text-stone-50
    flex justify-center min-h-screen border-t-[5px] border-black text-lg font-sans">
      
      <div className="mx-3 max-w-[800px] max-h-full w-full">
        <Navbar />
        <About />
        <BlogList />

      </div>
    </div>
  );
}

export default App;
