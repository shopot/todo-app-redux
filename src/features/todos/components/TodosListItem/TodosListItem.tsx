import { JSX } from 'react';

import styles from './TodosListItem.module.css';

import { ButtonRemove } from '@/components/ButtonRemove';
import { Todo } from '../../types';

type Props = {
  todo: Todo;
};

export const TodosListItem = ({ todo: { id, title, completed } }: Props): JSX.Element => {
  const completedClass = completed ? styles.todoTitleThrough : '';

  const handleChange = () => {
    console.log(`toggleTodoCompleted: ${id}`);
  };

  const handleRemove = () => {
    console.log(`removeTodo: ${id}`);
  };

  return (
    <div className={styles.todoRow}>
      <div className={styles.todoInputWrapper}>
        <input
          checked={completed}
          onChange={handleChange}
          type="checkbox"
          className={styles.todoInput}
        />
      </div>
      <div className={`${styles.todoTitle} ${completedClass}`}>{title}</div>
      <ButtonRemove onCLick={handleRemove} />
    </div>
  );
};
