import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';
export const Page404: React.FC = () => (
  <section className={cn(styles.dFlex, styles.notFound)}>
    {/*<section className='d-flex not__found'>*/}
    <h1 className={styles.tittle}>
      4
      <span className={styles.ghost}>
        <FontAwesomeIcon icon={faGhost} />
      </span>
      4
    </h1>
    <h2 className={styles.description}>Error: 404 page not found</h2>
    <p>
      Click{' '}
      <Link className={styles.link} to='./'>
        here
      </Link>{' '}
      if you want to go to the homepage.
    </p>
  </section>
);
