import Article from "./Article";

function ArticleList({posts}) {
  const postArray = posts.map((post) => {
  return <Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>
  })
  return (
    <main>
    {postArray}
    </main>
  );
}

export default ArticleList;