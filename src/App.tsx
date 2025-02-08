import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import "./App.css";
import NotFound from './pages/NotFound';
import BlogPage from './blogs/BlogPage';

function App() {

  return (
    <div className="flex justify-center min-h-screen text-lg font-sans">
      <div className="mx-3 max-w-[800px] max-h-full w-full">
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/blogs/:blogUrl" element={<BlogPage />} />
    </Routes>
  </Router>
  </div>
  </div>
    
  );
}

export default App;
