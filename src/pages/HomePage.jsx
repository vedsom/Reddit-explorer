import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import ContentPanel from '../components/layout/ContentPanel';
import SearchBar from '../components/ui/SearchBar';
import SearchResults from '../components/search/SearchResults';
import { useSearch } from '../hooks/useSearch';
import { MobileNav, MenuButton } from '../components/layout/MobileNav';
import { Menu } from 'lucide-react';


const PageLayout = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: var(--color-background);
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
`;

const SearchContainer = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  padding-top: 1rem;
  position: relative;
`;

const ResultsWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 50;
`;

const HomePage = () => {
  const navigate = useNavigate();
  const [isSearching, setIsSearching] = useState(false);
  const { searchResults, loading, error, performSearch } = useSearch();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleSearch = (query) => {
    setIsSearching(true);
    performSearch(query);
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
      <MobileHeader>
      <MenuButton onClick={() => setIsMobileNavOpen(true)}>
        <Menu size={24} />
      </MenuButton>
    </MobileHeader>
    
    <MobileNav 
      isOpen={isMobileNavOpen} 
      onClose={() => setIsMobileNavOpen(false)}
    >
      <Sidebar />
    </MobileNav>
      <Sidebar />
      <ContentContainer>
        <SearchContainer>
          <SearchBar onSearch={handleSearch} />
          {isSearching && (
            <ResultsWrapper>
              <SearchResults
                results={searchResults}
                loading={loading}
                error={error}
                onResultClick={handleResultClick}
              />
            </ResultsWrapper>
          )}
        </SearchContainer>
        <ContentPanel />
      </ContentContainer>
    </PageLayout>
  );
};

export default HomePage;