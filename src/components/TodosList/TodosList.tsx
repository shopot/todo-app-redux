import { FC } from 'react';

import styles from './TodosList.module.css';

import { TodosListItem } from '@/components';

import todos from '../../data/todos.json';

export const TodosList: FC = () => {
  return (
    <div className={styles.todoList}>
      {todos.map((todo) => (
        <TodosListItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
