import axios from 'axios';

const BASE_URL = 'https://www.reddit.com';

export const fetchSubreddits = async (limit = 25) => {
  const response = await axios.get(`${BASE_URL}/subreddits/popular.json`, {
    params: { limit }
  });
  return response.data.data.children;
};

export const fetchSubredditPosts = async (subreddit, after = null, limit = 10) => {
  const response = await axios.get(`${BASE_URL}/r/${subreddit}/hot.json`, {
    params: { after, limit }
  });
  return response.data.data;
};

export const searchReddit = async (query, limit = 10) => {
  const response = await axios.get(`${BASE_URL}/search.json`, {
    params: {
      q: query,
      type: 'sr,link',  // search both subreddits and posts
      limit,
      sort: 'relevance'
    }
  });
  return response.data.data;
};
export const fetchPost = async (postId) => {
  const response = await axios.get(`${BASE_URL}/comments/${postId}.json`);
  return response.data;
};
