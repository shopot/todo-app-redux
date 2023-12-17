import { JSX } from 'react';

import styles from './App.module.css';

import { AppProvider } from '@/providers/AppProvider';
import { Todos } from '@/features/todos';

const App = (): JSX.Element => {
  return (
    <AppProvider>
      <div className={styles.appContainer}>
        <h1 className={styles.header}>Todo App</h1>
        <Todos />
      </div>
    </AppProvider>
  );
};

export default App;
