import styles from './styles.module.scss';
export const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <span className={styles.loader}></span>
    </div>
  );
};
