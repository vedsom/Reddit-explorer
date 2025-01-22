import styled from 'styled-components';
export const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: 1px solid var(--color-border);
  background: var(--color-white);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: var(--color-gray-light);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const SearchInput = styled.input`
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

export const LoadingSpinner = styled.div`
  width: 2rem;
  height: 2rem;
  border: 2px solid var(--color-gray-light);
  border-top-color: var(--color-reddit-blue);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 2rem auto;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;