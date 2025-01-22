import styled from 'styled-components';
import { Link } from 'react-router-dom';

// export const SidebarContainer = styled.div`
//   width: 256px;  /* Fixed sidebar width */
//   background: var(--color-white);
//   box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
//   padding: 1rem;
//   min-height: 100vh; /* Full height */
//   display: flex;
//   flex-direction: column; /* Items in the sidebar stacked vertically */
// `;
export const SidebarContainer = styled.div`
  width: 256px;
  background: var(--color-white);
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    display: none;
  }
`;
// export const SidebarContainer = styled.div`
//   width: 250px; /* Adjust width as needed */
//   position: fixed;
//   height: 100%;
//   top: 0;
//   left: 0;
//   background-color: #fff;
//   box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
//   padding: 1rem;
//   z-index: 1000; /* Ensure it stays above other content */
//   overflow-y: auto; /* Allow scrolling if content exceeds the height */
// `;
export const SubredditList = styled.div`
  flex: 1;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SubredditLink = styled(Link)`
  display: block;
  padding: 0.75rem;
  background-color: transparent;
  border-radius: 0.375rem;
  text-decoration: none;
  color: inherit;

  &:hover {
    background-color: #f3f4f6;
  }
`;
