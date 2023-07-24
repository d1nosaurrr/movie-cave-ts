import cn from 'classnames';
import { ReactComponent as LogoIcon } from 'img/logo.svg';
import styles from './styles.module.scss';
export const Footer = () => (
  <footer className={styles.footer}>
    <div className={cn(styles.container, styles.dFlex, styles.containerFooter)}>
      <LogoIcon className={styles.footerLogo} style={{ width: '50px' }} />
      <span className={styles.footerDescription}>
        MovieCave <br /> Find info about movies using{' '}
        <a className={styles.footerLink} href='https://www.themoviedb.org/'>
          themoviedb.org
        </a>{' '}
        API
      </span>
    </div>
  </footer>
);
