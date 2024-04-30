import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Article from './pages/Article'
import ArticlesList from './pages/ArticleList'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path="/article/:name" element={<Article />} />
          <Route path="/articles-list" element={<ArticlesList />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App