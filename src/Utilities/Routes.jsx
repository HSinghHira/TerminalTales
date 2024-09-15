// Routes.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import NoPage from "../Pages/NoPage";
import ArticlesIndex from "../Components/ArticlesIndex";
import BlogPostPage from "../Components/BlogPostPage";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<ArticlesIndex />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path="post/:title" element={<BlogPostPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
