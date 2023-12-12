import { PropsWithChildren, JSX } from 'react';

import styles from './Button.module.css';

type Props = {
  onCLick: () => void;
};

export const Button = ({ onCLick, children }: PropsWithChildren<Props>): JSX.Element => {
  return (
    <button onClick={onCLick} className={styles.button} type="button">
      {children}
    </button>
  );
};
