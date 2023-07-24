import React from 'react';
import { Link } from 'react-router-dom';

interface Movie {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
}

interface SearchDropdownProps {
  movie: Movie[];
  clearSearch: () => void;
}

export const SearchDropdown: React.FC<SearchDropdownProps> = ({
  movie,
  clearSearch,
}) => {
  return (
    <ul className='d-flex dropdown__list'>
      {movie.map(({ id, title, release_date, vote_average }) => (
        <li className='br-15 dropdown__item' key={id}>
          <Link
            className='dropdown__link'
            onClick={() => clearSearch()}
            to={`./movie/${id}`}
          >
            <span className='dropdown__title'>{title}</span>
            <p className='dropdown__description'>
              {release_date} {vote_average}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
