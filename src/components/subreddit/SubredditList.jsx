import React from 'react';
import { useSubreddits } from '../../hooks/useSubreddits';
import SubredditCard from './SubredditCard';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0.5rem;
  }
`;

const LoadingText = styled.div`
  text-align: center;
  padding: 3rem;
  color: #666;
  font-size: 1.125rem;
`;

const ErrorContainer = styled.div`
  padding: 1.5rem;
  background-color: #fee2e2;
  border: 1px solid #fecaca;
  border-radius: 0.5rem;
  color: #dc2626;
  margin: 1rem;
  text-align: center;
  font-size: 1rem;
`;

const SubredditList = () => {
  const { data: subreddits, loading, error } = useSubreddits();

  if (loading) return <LoadingText>Loading subreddits...</LoadingText>;
  if (error) return <ErrorContainer>Error: {error}</ErrorContainer>;

  return (
    <GridContainer>
      {subreddits?.map(subreddit => (
        <SubredditCard key={subreddit.data.id} subreddit={subreddit.data} />
      ))}
    </GridContainer>
  );
};

export default SubredditList;
