/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import "../assets/Navbar.css"

// const Articles = ({ articles }) => {
// return (
//     <>
//         {articles.map((article, index) => (
//             <div key={index} className="p-4 md:w-1/2">
//                 <div className="h-ful rounded-lg overflow-hidden background-custom">
//                     <Link to={`/article/${article.name}`}>
//                         <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={article.thumbnail} alt="blog-thumbnail" />
//                     </Link>
//                     <div className="p-6">
//                         <Link to={`/article/${article.name}`}>
//                         <h3 className="text-lg font-medium text-white mb-3">{article.title}</h3>
//                         </Link>
//                         <p className="leading-relaxed mb-3 text-slate-300">
//                         {article.content[0].substring(0,110)}...
//                         </p>
//                         <div className="flex item-center flex-wrap">
//                         <Link className="text-white inline-flex items-center md:mb-2 lg:mb-0 hover:text-pink-500" to={`/article/${article.name}`}>
//                             Learn More
//                         </Link>
//                         </div>
//                     </div>
//                     </div>
//                 </div>
//         ))}
//     </>
// )
// }

// export default Articles

const Articles = ({ articles }) => {
    return (
      <>
        {articles.map((article, index) => (
          <div key={index} className='p-4 md:w-1/2'>
            <div className='h-full rounded-lg overflow-hidden background-custom'>
              <Link to={`/article/${article.name}`}>
                <img
                  className='lg:h-48 md:h-36 w-full object-cover object-center'
                  src={article.thumbnail}
                  alt='blog'
                />
              </Link>
              <div className='p-6'>
                <Link key={index} to={`/article/${article.name}`}>
                  <h3 className='text-lg font-medium text-white mb-3'>
                    {article.title}
                  </h3>
                </Link>
                <p className='leading-relaxed mb-3'>
                  {article.content[0].substring(0, 110)}...
                </p>
                <div className='flex item-center flex-wrap'>
                  <Link
                    className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 hover:text-pink-500'
                    to={`/article/${article.name}`}
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };
  
  export default Articles;