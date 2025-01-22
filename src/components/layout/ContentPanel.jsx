import { useParams } from 'react-router-dom';
import PostList from '../post/PostList';
import SubredditList from '../subreddit/SubredditList';
import styled from 'styled-components';


const ContentContainer = styled.div`
  flex: 1;
  padding: 1.5rem;
  background: var(--color-background);
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ContentInner = styled.div`
  max-width: 48rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const ContentPanel = () => {
  const { subredditId } = useParams();

  return (
    <ContentContainer>
      <ContentInner>
        {subredditId ? (
          <>
            <Title>r/{subredditId}</Title>
            <PostList subredditId={subredditId} />
          </>
        ) : (
          <SubredditList />
        )}
      </ContentInner>
    </ContentContainer>
  );
};

export default ContentPanel;