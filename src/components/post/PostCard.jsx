import React from 'react';
import { ArrowBigUp, ArrowBigDown, Share2, MessageSquare } from 'lucide-react';
import styled from 'styled-components';
import {
  PostCardContainer,
  VoteContainer,
  VoteButton,
  PostContent
} from './styled';

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 0.25rem;
  color: #718096;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

const ThumbnailImage = styled.img`
  margin-bottom: 0.5rem;
  border-radius: 0.375rem;
  max-width: 100%;
  height: auto;
`;

const PostCard = ({ post }) => {
  const postData = post.data;
  
  // Function to check if thumbnail is valid
  const isValidThumbnail = (thumbnail) => {
    return thumbnail &&
           thumbnail !== 'self' &&
           thumbnail !== 'default' &&
           thumbnail !== 'nsfw' &&
           thumbnail !== 'spoiler' &&
           thumbnail.startsWith('http');
  };

  return (
    <PostCardContainer>
      <div style={{ display: 'flex' }}>
        <VoteContainer>
          <VoteButton>
            <ArrowBigUp size={24} color="#718096" />
          </VoteButton>
          <span style={{ margin: '0.25rem 0', fontWeight: 500 }}>
            {postData.score}
          </span>
          <VoteButton>
            <ArrowBigDown size={24} color="#718096" />
          </VoteButton>
        </VoteContainer>

        <PostContent>
          <div style={{ marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.875rem', color: '#718096' }}>
              Posted by u/{postData.author} • 
              {new Date(postData.created * 1000).toLocaleDateString()}
            </span>
          </div>
          
          <h2 style={{ fontSize: '1.125rem', fontWeight: 500, marginBottom: '0.5rem' }}>
            {postData.title}
          </h2>
          
          {isValidThumbnail(postData.thumbnail) && (
            <ThumbnailImage
              src={postData.thumbnail}
              alt="Post thumbnail"
            />
          )}
          
          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
            <Button>
              <MessageSquare size={16} />
              {postData.num_comments} Comments
            </Button>
            <Button>
              <Share2 size={16} />
              Share
            </Button>
          </div>
        </PostContent>
      </div>
    </PostCardContainer>
  );
};

export default PostCard;