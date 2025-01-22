import { useState, useEffect } from 'react';
import axios from 'axios';

export const useSubreddits = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubreddits = async () => {
      try {
        const response = await axios.get('https://www.reddit.com/subreddits/popular.json');
        setData(response.data.data.children);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSubreddits();
  }, []);

  return { data, loading, error };
};
