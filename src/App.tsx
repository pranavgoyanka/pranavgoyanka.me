import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import "./App.css";
import NotFound from './pages/NotFound';
import BlogPage from './blogs/BlogPage';
import { useEffect } from 'react';
import AboutPage from './pages/AboutPage';
import { Analytics } from "@vercel/analytics/react"

function ResumeRedirect() {
  useEffect(() => {
    window.location.href = "/Pranav_Goyanka_Resume.pdf";
  }, []);

  return <p>Redirecting to resume...</p>;
}

function App() {

  return (
    <div className="flex justify-center min-h-screen text-lg font-sans">
      <div className="mx-3 max-w-[800px] max-h-full w-full">
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home/:src" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/resume"  element={<ResumeRedirect />} />
      <Route path="/blogs/:blogUrl" element={<BlogPage />} />
    </Routes>
  </Router>
  <Analytics/>
  </div>
  </div>
    
  );
}

export default App;
