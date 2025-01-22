import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { formatNumber, formatDate } from '../../utils/helpers';

const ResultsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border: 1px solid var(--color-border);
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  max-height: 24rem;
  overflow-y: auto;
  z-index: 50;
  margin-top: 0.5rem;
`;

const ResultItem = styled(Link)`
  display: block;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--color-border);
  color: inherit;
  text-decoration: none;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f7f9fa;
  }
`;

const ResultTitle = styled.div`
  font-weight: 500;
  margin-bottom: 0.25rem;
`;

const ResultMeta = styled.div`
  font-size: 0.875rem;
  color: #718096;
`;

const NoResults = styled.div`
  padding: 1rem;
  text-align: center;
  color: #718096;
`;

const SearchResults = ({ results, loading, error }) => {
  if (loading) {
    return (
      <ResultsContainer>
        <NoResults>Searching...</NoResults>
      </ResultsContainer>
    );
  }

  if (error) {
    return (
      <ResultsContainer>
        <NoResults>{error}</NoResults>
      </ResultsContainer>
    );
  }

  if (!results.length) {
    return (
      <ResultsContainer>
        <NoResults>No results found</NoResults>
      </ResultsContainer>
    );
  }

  return (
    <ResultsContainer>
      {results.map((result) => {
        const data = result.data;
        const isSubreddit = result.kind === 't5';

        if (isSubreddit) {
          return (
            <ResultItem key={data.id} to={`/r/${data.display_name}`}>
              <ResultTitle>r/{data.display_name}</ResultTitle>
              <ResultMeta>
                {formatNumber(data.subscribers)} subscribers • {data.public_description}
              </ResultMeta>
            </ResultItem>
          );
        }

        return (
          <ResultItem 
            key={data.id} 
            to={`/r/${data.subreddit}/comments/${data.id}`}
          >
            <ResultTitle>{data.title}</ResultTitle>
            <ResultMeta>
              Posted in r/{data.subreddit} • {formatNumber(data.score)} points • 
              {formatDate(data.created_utc)}
            </ResultMeta>
          </ResultItem>
        );
      })}
    </ResultsContainer>
  );
};
export default SearchResults;