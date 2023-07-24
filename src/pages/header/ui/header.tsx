import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import cn from 'classnames';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactComponent as Logo } from 'img/logo.svg';
import { Loader } from 'components/loader';
import styles from './styles.module.scss';

export const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchValue, setSearchValue] = useState('');

  const handleClearSearch = (): void => {
    setSearchValue('');
  };

  const handleOnSearch = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (searchValue !== '') {
      handleClearSearch();
      setSearchParams(`query=${searchValue}`);
    }
  };

  const handleOnChangeSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  return (
    <header className={cn(styles.pRelative, styles.header)}>
      <div className={styles.container}>
        <section className={cn(styles.dFlex, styles.headerSection)}>
          <Link className={cn(styles.dFlex, styles.headerLogo)} to='./'>
            <Logo className={styles.logoImg} width='50' height='50' />
            <span className={styles.logoTitle}>Movie Cave</span>
          </Link>
          <form
            onSubmit={(e) => handleOnSearch(e)}
            className={cn(styles.dFlex, styles.br15, styles.headerSearch)}
            action=''
          >
            <label htmlFor='search'>Search</label>
            <input
              className={styles.headerSearchInput}
              type='search'
              name=''
              id='search'
              placeholder='Movie title'
              value={searchValue}
              onChange={(e) => handleOnChangeSearch(e)}
            />
            <FontAwesomeIcon
              className={cn(styles.headerSearchBtn, {
                [styles.display]: searchValue !== '',
              })}
              icon={faX}
              onClick={handleClearSearch}
            />
          </form>
          {searchValue !== '' && (
            <div className={styles.dropdownSearch}>
              {true ? (
                <Loader />
              ) : (
                // movieQuery.length > 0 ?
                //   <SearchDropdown movie={movieQuery} clearSearch={handleClearSearch}/> :
                <p className={styles.noResult}>No result</p>
              )}
            </div>
          )}
        </section>
      </div>
    </header>
  );
};

/*

{searchValue !== '' &&
    <div className='dropdown__search'>
        {isLoading ? <Loader/> :
            movieQuery.length > 0 ?
                <SearchDropdown movie={movieQuery} clearSearch={handleClearSearch}/> :
                <p className='dropdown__no-result'>No result</p>}

 */
