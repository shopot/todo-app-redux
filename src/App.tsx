import { FC } from 'react';

import styles from './App.module.css';

import { TodoForm, TodosList } from '@/components';

const App: FC = () => {
  return (
    <div className={styles.appContainer}>
      <h1 className={styles.header}>Todo App</h1>
      <TodoForm />
      <TodosList />
    </div>
  );
};

export default App;
