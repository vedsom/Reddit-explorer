import styled from 'styled-components';

export const PostCardContainer = styled.div`
  background: var(--color-white);
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    padding: 0.75rem;
    border-radius: 0.25rem;
  }
`;

export const VoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1rem;
`;

export const VoteButton = styled.button`
  padding: 0.25rem;
  border-radius: 0.25rem;
  border: none;
  background: transparent;
  cursor: pointer;
  
  &:hover {
    background: var(--color-gray-light);
  }
`;

export const PostContent = styled.div`
  flex: 1;
`;
