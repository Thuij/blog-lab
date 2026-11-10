import Article from "./Article";

function ArticleList(props) {
  return (
    <section>
      <h2>Latest Articles</h2>

      {props.articles.map((article) => (
        <Article
          key={article.id}
          title={article.title}
          date={article.date}
          content={article.content}
        />
      ))}
    </section>
  );
}

export default ArticleList;
