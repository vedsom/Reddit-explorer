import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { removeFavorite } from '../../store/favoritesSlice';
import { useSubreddits } from '../../hooks/useSubreddits';
import { SidebarContainer, SubredditList, SubredditLink } from './styled';
import styled from 'styled-components';

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  text-decoration: none;
  color: inherit;
  margin-bottom: 1rem;
`;

const LogoImg = styled.img`
  width: 32px;
  height: 32px;
`;

const LogoText = styled.span`
  font-size: 2rem;
  font-weight: 600;
  margin-left: 0.5rem;
  color: #FF5700;
`;

const FavoriteItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.75rem;
  text-decoration: none;
  color: inherit;
  border-radius: 0.375rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f3f4f6;
  }
`;

const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  border: none;
  background: transparent;
  cursor: pointer;
  color: #9ca3af;
  position: absolute;
  right: 0.75rem;
  opacity: 0;
  transition: all 0.2s;

  ${FavoriteItem}:hover & {
    opacity: 1;
  }

  &:hover {
    color: #dc2626;
    background-color: #fee2e2;
    border-radius: 0.25rem;
  }
`;

const FavoriteLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  flex: 1;
  margin-right: 1.5rem;
`;

const Sidebar = () => {
  const { data: subreddits, loading } = useSubreddits();
  const favorites = useSelector(state => state.favorites.items);
  const dispatch = useDispatch();

  const handleRemoveFavorite = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(removeFavorite(id));
  };

  return (
    <SidebarContainer>
      <LogoContainer to="/">
        <LogoImg 
          src="https://www.redditstatic.com/desktop2x/img/favicon/favicon-32x32.png" 
          alt="Reddit Logo" 
        />
        <LogoText>reddit</LogoText>
      </LogoContainer>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Favorites</h2>
        <SubredditList>
          {favorites.length === 0 ? (
            <div className="px-3 text-gray-500">No favorites yet</div>
          ) : (
            favorites.map(subreddit => (
              <FavoriteItem key={subreddit.id}>
                <FavoriteLink to={`/subreddit/${subreddit.name}`}>
                  r/{subreddit.name}
                </FavoriteLink>
                <RemoveButton
                  onClick={(e) => handleRemoveFavorite(subreddit.id, e)}
                  title="Remove from favorites"
                >
                  <X size={16} />
                </RemoveButton>
              </FavoriteItem>
            ))
          )}
        </SubredditList>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-3">Popular Subreddits</h2>
        <SubredditList>
          {loading ? (
            <div className="px-3">Loading...</div>
          ) : (
            subreddits?.map(subreddit => (
              <SubredditLink
                key={subreddit.data.id}
                to={`/subreddit/${subreddit.data.display_name}`}
              >
                r/{subreddit.data.display_name}
              </SubredditLink>
            ))
          )}
        </SubredditList>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;