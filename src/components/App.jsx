import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blog from "../data/blog";

function App() {
  return (
    <div className="App">
      <Header title={blog.title} />
      <About
        name={blog.name}
        about={blog.about}
        image={blog.image}
      />
      <ArticleList posts={blog.posts || blog.articles} />
    </div>
  );
}

export default App;