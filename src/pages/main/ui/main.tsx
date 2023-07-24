import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

interface MainInterface {
  children: React.ReactNode;
}
const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  const divElement = event.currentTarget as HTMLDivElement;
  divElement.style.display = 'none';
};

export const Main = (props: MainInterface) => {
  return (
    <main className={cn(styles.pRelative, styles.main)}>
      <div className={cn(styles.container, styles.containerMain)}>
        {props.children}
        <div id='fullpage' style={{ display: 'none' }} onClick={handleClick} />
      </div>
    </main>
  );
};
