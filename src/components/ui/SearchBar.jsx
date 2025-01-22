import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Search } from 'lucide-react';
import { useSearch } from '../../hooks/useSearch';
import SearchResults from '../../components/search/SearchResults';

const SearchContainer = styled.form`
  width: 100%;
  max-width: 28rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 1rem;
  }
`;
const SearchWrapper = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  border: 1px solid var(--color-border);
  border-radius: 0.375rem;
  outline: none;

  &:focus {
    border-color: var(--color-reddit-blue);
    box-shadow: 0 0 0 2px rgba(0, 121, 211, 0.2);
  }
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #718096;
`;

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  const { searchResults, loading, error, performSearch } = useSearch();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    performSearch(query);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setIsOpen(true);
    
    // Debounce search
    const timeoutId = setTimeout(() => {
      performSearch(value);
    }, 300);

    return () => clearTimeout(timeoutId);
  };

  return (
    <SearchContainer onSubmit={handleSubmit} ref={wrapperRef}>
      <SearchWrapper>
        <SearchInput
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search subreddits..."
          onFocus={() => setIsOpen(true)}
        />
        <SearchIconWrapper>
          <Search size={20} />
        </SearchIconWrapper>
        {isOpen && (
          <SearchResults
            results={searchResults}
            loading={loading}
            error={error}
          />
        )}
      </SearchWrapper>
    </SearchContainer>
  );
};

export default SearchBar;