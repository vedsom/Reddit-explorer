import React from 'react';
import PostCard from './PostCard';
import styled from 'styled-components';

const PostListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
 
`;

const LoadingText = styled.div`
  text-align: center;
  padding: 2rem;
  color: #666;
`;

const ErrorContainer = styled.div`
  padding: 1rem;
  background-color: #FEE2E2;
  border: 1px solid #FECACA;
  border-radius: 0.375rem;
  color: #DC2626;
`;

const PostList = ({ posts, loading, error }) => {
  if (loading) return <LoadingText>Loading...</LoadingText>;
  if (error) return <ErrorContainer>{error}</ErrorContainer>;
  
  return (
    <PostListContainer>
      {posts?.map(post => (
        <PostCard key={post.data.id} post={post} />
      ))}
    </PostListContainer>
  );
};

export default PostList;