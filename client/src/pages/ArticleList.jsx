import articleContent from "./article-content"
import Articles from "../components/Articles"

const ArticlesList = () => {
  return (
    <>
    <div className="max-w-screen-md mx-auto pt-20">
      <h1 className='sm:text-4xl text-2xl font-bold my-6 text-white font-lobster tracking-wider'>Article List</h1>
      <div className="container py-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          {<Articles articles={articleContent} />}
        </div>
      </div>
      </div>
    </>
  )
}

export default ArticlesList