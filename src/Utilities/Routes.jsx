// Routes.jsx
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import NoPage from "../Pages/NoPage";
import BlogPostPage from "../Pages/PostPage";
import Post from "../Pages/Post";
import ArticlesIndex from "../Components/ArticlesIndex";
import SitemapXML from "../Components/SitemapXML";

function RoutesIndex() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<ArticlesIndex />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path="post/:title" element={<BlogPostPage />} />
          <Route path="post" element={<Post />} />
        </Route>
        <Route path="/sitemap.xml" element={<SitemapXML />} />
      </Routes>
    </Router>
  );
}
export default RoutesIndex;
