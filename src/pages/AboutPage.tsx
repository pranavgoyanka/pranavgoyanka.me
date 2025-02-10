import { useEffect } from 'react'
import AboutContent from '../components/About'
import BlogList from '../components/BlogList'
import Education from '../components/Education'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'

const AboutPage = () => {

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "instant" });
      }
    }
  }, [location]);

  return (
    <>
        <Navbar />
        <AboutContent />
        <Education />
        <Projects />
        <BlogList />
    </>
  )
}

export default AboutPage