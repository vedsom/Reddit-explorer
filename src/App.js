import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import HomePage from './pages/HomePage';
import SubredditPage from './pages/SubredditPage';
import PostPage from './pages/PostPage';
import { GlobalStyle } from './styles/GlobalStyles';

const App = () => {
  return (

    <>
      <GlobalStyle />
      <Provider store={store}>
        <Router>
          <div className="min-h-screen bg-gray-100">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/subreddit/:subredditId" element={<SubredditPage />} />
              <Route path="/r/:subredditId/comments/:postId" element={<PostPage />} />
            </Routes>
          </div>
        </Router>
      </Provider>
    </>
  );
};

export default App;
