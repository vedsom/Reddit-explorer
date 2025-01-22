import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from '../components/layout/Sidebar';
import PostList from '../components/post/PostList';
import SearchBar from '../components/ui/SearchBar';
import SearchResults from '../components/search/SearchResults';
import { usePosts } from '../hooks/usePosts';
import { useSearch } from '../hooks/useSearch';
import { MobileNav, MenuButton } from '../components/layout/MobileNav';
import { Menu } from 'lucide-react';

const PageLayout = styled.div`
  display: flex;
  min-height: 100vh;
`;
const MobileHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: white;
  z-index: 30;
  display: none;
  border-bottom: 1px solid var(--color-border);

  @media (max-width: 768px) {
    display: block;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 1.5rem;
  background-color: rgb(249, 250, 251);
`;

const ContentWrapper = styled.div`
  max-width: 56rem;
  margin: 0 auto;
`;

const PageHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const PageTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

const SubredditPage = () => {
  const { subredditId } = useParams();
  const navigate = useNavigate();
  const [isSearching, setIsSearching] = useState(false);
  const { data: posts, loading: postsLoading, error: postsError } = usePosts(subredditId);
  const { searchResults, loading: searchLoading, error: searchError, performSearch } = useSearch();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const handleSearch = (query) => {
    setIsSearching(true);
    // Add subreddit-specific search
    performSearch(`subreddit:${subredditId} ${query}`);
  };

  const handleResultClick = (result) => {
    setIsSearching(false);
    if (result.kind === 't5') { // Subreddit
      navigate(`/r/${result.data.display_name}`);
    } else { // Post
      navigate(`/r/${result.data.subreddit}/comments/${result.data.id}`);
    }
  };

  return (
    <PageLayout>
      <Sidebar />
      <ContentContainer>
        <ContentWrapper>
          <PageHeader>
            <SearchContainer>
              <SearchBar 
                onSearch={handleSearch} 
                placeholder={`Search in r/${subredditId}`}
              />
              {isSearching && (
                <SearchResults
                  results={searchResults}
                  loading={searchLoading}
                  error={searchError}
                  onResultClick={handleResultClick}
                />
              )}
            </SearchContainer>

          </PageHeader><PageTitle>r/{subredditId}</PageTitle>
          <PostList 
            posts={posts} 
            loading={postsLoading} 
            error={postsError} 
          />
        </ContentWrapper>
      </ContentContainer>
    </PageLayout>
  );
};

export default SubredditPage;