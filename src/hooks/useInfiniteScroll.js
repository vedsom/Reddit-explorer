import { useEffect, useCallback } from 'react';

export const useInfiniteScroll = (callback, hasMore) => {
  const handleScroll = useCallback(() => {
    if (!hasMore) return;
    
    const scrolledToBottom =
      window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight - 100;

    if (scrolledToBottom) {
      callback();
    }
  }, [callback, hasMore]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
};