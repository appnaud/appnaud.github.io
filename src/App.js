import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./routes/blog.jsx";
import BHome from "./routes/home.jsx";
import BSearch from "./routes/search.jsx";
import BPost from "./routes/post.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>homepage</h1>} />
        <Route path="/blog/*" element={<Blog />}>
          <Route path="" element={<BHome />} />
          <Route path="search" element={<BSearch />} />
          <Route path=":post_id" element={<BPost />} />
        </Route>
        <Route path="*" element={<h1>404 NOT FOUNd</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
