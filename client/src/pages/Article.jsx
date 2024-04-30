import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articleContent from "./article-content";
import Articles from "../components/Articles";
import NotFound from "./NotFound";
import CommentsList from "../components/CommentsList";
import AddComment from "../components/AddComment";
import { useAuth0 } from "@auth0/auth0-react";

const Article = () => {
  const { name } = useParams();
  const article = articleContent.find((article) => article.name === name);
  const [articleInfo, setArticleInfo] = useState({ comments: [] });
  const {isAuthenticated} = useAuth0();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        "http://localhost:8000/api/articles/" + `${name}`
      );
      const body = await result.json();
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);

  if (!article) return <NotFound />;

  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );

  return (
    <>
      <div className="max-w-screen-md mx-auto pt-20">
        <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
          {article.title}
        </h1>
        {article.content.map((paragraph, index) => (
          <p className="mx-auto leading-relaxed text-base mb-4 text-lg" key={index}>
            {paragraph}
          </p>
        ))}

        {isAuthenticated ? <AddComment name={name} setArticleInfo={setArticleInfo} /> : <h1 className="sm:text-2xl text-xl font-bold my-4 mt-12 text-gray-900 text-center">Login to add a comment!</h1>}
  
        <CommentsList comments={articleInfo.comments} />

        <h1 className="sm:text-2xl text-xl font-bold my-4 mt-12 text-gray-900">
          Other Articles
        </h1>
        <div className="flex flex-wrap -m-4">
          <Articles articles={otherArticles} />
        </div>
      </div>
    </>
  );
};

export default Article;
