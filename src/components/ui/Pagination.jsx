import React from 'react';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 1.5rem 0;
`;

const PageButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 0.375rem;
  background: var(--color-white);
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: var(--color-gray-light);
  }
`;

const PageNumber = styled.span`
  color: #4A5568;
`;

const Pagination = ({ currentPage, setCurrentPage, hasMore }) => {
  return (
    <PaginationContainer>
      <PageButton 
        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
        disabled={currentPage === 1}
      >
        <ChevronLeft size={16} />
        Previous
      </PageButton>
      
      <PageNumber>Page {currentPage}</PageNumber>
      
      <PageButton 
        onClick={() => setCurrentPage(prev => prev + 1)}
        disabled={!hasMore}
      >
        Next
        <ChevronRight size={16} />
      </PageButton>
    </PaginationContainer>
  );
};

export default Pagination;