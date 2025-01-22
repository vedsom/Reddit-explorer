import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Star, Users, TrendingUp } from 'lucide-react';
import { addFavorite, removeFavorite } from '../../store/favoritesSlice';
import styled from 'styled-components';

const CardContainer = styled(Link)`
  display: block;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 1.25rem;
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 
                0 4px 6px -2px rgba(0, 0, 0, 0.05);
    border-color: #d1d5db;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #FF4500, #FFA500);
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const InfoSection = styled.div`
  flex: 1;
`;

const SubredditName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1b;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SubredditTitle = styled.p`
  color: #7c7c7c;
  font-size: 0.9rem;
  line-height: 1.4;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const StatsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid #f0f0f0;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  color: #666;
  font-size: 0.875rem;
`;

const FavoriteButton = styled.button`
  padding: 0.5rem;
  border-radius: 9999px;
  transition: all 0.2s ease-in-out;
  background: ${props => props.isFavorite ? '#fff3e0' : 'transparent'};
  color: ${props => props.isFavorite ? '#f59e0b' : '#9ca3af'};

  &:hover {
    background: ${props => props.isFavorite ? '#ffedd5' : '#f3f4f6'};
    transform: scale(1.1);
  }

  svg {
    transition: all 0.2s ease-in-out;
  }
`;

const TrendingTag = styled.span`
  background: #e6f3ff;
  color: #0079d3;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  margin-left: 0.5rem;
`;

const SubredditCard = ({ subreddit }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.items);
  const isFavorite = favorites.some(fav => fav.id === subreddit.id);

  const handleToggleFavorite = (e) => {
    e.preventDefault();
    if (isFavorite) {
      dispatch(removeFavorite(subreddit.id));
    } else if (favorites.length < 20) {
      dispatch(addFavorite({
        id: subreddit.id,
        name: subreddit.display_name,
        title: subreddit.title,
        subscribers: subreddit.subscribers
      }));
    }
  };

  const isPopular = subreddit.subscribers > 1000000;

  return (
    <CardContainer to={`/subreddit/${subreddit.display_name}`}>
      <CardContent>
        <InfoSection>
          <SubredditName>
            r/{subreddit.display_name}
            {isPopular && (
              <TrendingTag>
                <TrendingUp size={12} />
                Popular
              </TrendingTag>
            )}
          </SubredditName>
          <SubredditTitle>{subreddit.title}</SubredditTitle>
          <StatsContainer>
            <StatItem>
              <Users size={16} />
              {subreddit.subscribers?.toLocaleString()} members
            </StatItem>
          </StatsContainer>
        </InfoSection>
        <FavoriteButton
          onClick={handleToggleFavorite}
          isFavorite={isFavorite}
          title={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Star className={isFavorite ? 'fill-current' : ''} size={20} />
        </FavoriteButton>
      </CardContent>
    </CardContainer>
  );
};

export default SubredditCard;