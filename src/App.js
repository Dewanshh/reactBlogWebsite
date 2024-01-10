
import './App.css';
import Navbar from './Navbar';


import AboutPage from './Pages/AboutPage';
import ArticleListPage from './Pages/ArticleListPage';
import ArticlePage from './Pages/ArticlePage';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import NotFoundPage from './Pages/NotFoundPage';

import RegisterPage from './Pages/RegisterPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <Navbar />
      <div id="page-body">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/articles" element={<ArticleListPage />}></Route>
        <Route path="/articles/:articleId" element={<ArticlePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes> 
      </div>
    </div>
      </BrowserRouter>
  );
}

export default App;
