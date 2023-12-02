import { FC } from 'react';

import styles from './TodosListItem.module.css';

import { ButtonRemove } from '@/shared/components';
import { Todo } from '../../types';

type Props = {
  todo: Todo;
};

export const TodosListItem: FC<Props> = ({
  todo: { id, title, completed },
}) => {
  const completedClass = completed ? styles.todoTitleThrough : '';

  const handleChange = () => {
    console.log(`toggleTodoCompleted: ${id}`);
  };

  const handleDelete = () => {
    console.log(`deleteTodo: ${id}`);
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
      <ButtonRemove onCLick={handleDelete} />
    </div>
  );
};
