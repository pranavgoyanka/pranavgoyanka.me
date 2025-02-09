import About from '../components/About'
import BlogList from '../components/BlogList'
import Education from '../components/Education'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'

const Home = () => {
  return (
    <>
        <Navbar />
        <About />
        <Education />
        <Projects />
        <BlogList />
    </>

    //   </div>
    // </div>
  )
}

export default Home