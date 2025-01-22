import { useState, useEffect } from 'react';
import axios from 'axios';

export const usePosts = (subreddit, page = 1) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!subreddit) return;

    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://www.reddit.com/r/${subreddit}/hot.json`,
          {
            params: {
              limit: 10,
              after: page > 1 ? `t3_${page}` : null,
            },
          }
        );
        setData(response.data.data.children);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [subreddit, page]);

  return { data, loading, error };
};