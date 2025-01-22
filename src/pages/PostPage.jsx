import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { fetchPost } from '../utils/api';
import { formatNumber, formatDate } from '../utils/helpers';
import Sidebar from '../components/layout/Sidebar';


const PageLayout = styled.div`
  display: flex;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 1.5rem;
  background-color: rgb(249, 250, 251);
`;

const PostWrapper = styled.div`
  max-width: 56rem;
  margin: 0 auto;
  background-color: white;
  border: 1px solid var(--color-border);
  border-radius: 0.375rem;
`;

const PostHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid var(--color-border);
`;

const PostTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const PostMeta = styled.div`
  font-size: 0.875rem;
  color: #718096;
`;

const PostContent = styled.div`
  padding: 1rem;
  
  img {
    max-width: 100%;
    height: auto;
  }
`;


const PostPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true);
        const data = await fetchPost(postId);
        setPost(data[0].data.children[0].data); // First element contains post data
        setLoading(false);
      } catch (err) {
        setError('Failed to load post');
        setLoading(false);
        console.error('Error loading post:', err);
      }
    };

    loadPost();
  }, [postId]);

  if (loading) {
    return (
      <PageLayout>
        <Sidebar />
        <ContentContainer>
          <PostWrapper>
            <div style={{ padding: '1rem' }}>Loading...</div>
          </PostWrapper>
        </ContentContainer>
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout>
        <Sidebar />
        <ContentContainer>
          <PostWrapper>
            <div style={{ padding: '1rem', color: 'red' }}>{error}</div>
          </PostWrapper>
        </ContentContainer>
      </PageLayout>
    );
  }

  if (!post) return null;

  return (
    <PageLayout>
      <Sidebar />
      <ContentContainer>
        <PostWrapper>
          <PostHeader>
            <PostTitle>{post.title}</PostTitle>
            <PostMeta>
              Posted by u/{post.author} • {formatDate(post.created_utc)} • 
              {formatNumber(post.score)} points
            </PostMeta>
          </PostHeader>
          <PostContent>
            {post.is_self ? (
              <div dangerouslySetInnerHTML={{ __html: post.selftext_html }} />
            ) : post.url ? (
              post.url.match(/\.(jpg|jpeg|png|gif)$/i) ? (
                <img src={post.url} alt={post.title} />
              ) : (
                <a href={post.url} target="_blank" rel="noopener noreferrer">
                  {post.url}
                </a>
              )
            ) : null}
          </PostContent>
        </PostWrapper>
      </ContentContainer>
    </PageLayout>
  );
};

export default PostPage;