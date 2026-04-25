import classNames from 'classnames';
import { Status } from '../types/Status';
import React from 'react';

type Props = {
  itemsLeft: number;
  status: Status;
  isCompletedTodo: boolean;
  onChangeStatus: (status: Status) => void;
};

export const Footer: React.FC<Props> = ({
  itemsLeft,
  status,
  isCompletedTodo,
  onChangeStatus,
}) => {
  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {itemsLeft} items left
      </span>

      <nav className="filter" data-cy="Filter">
        <a
          href="#/"
          className={classNames('filter__link', {
            selected: status === Status.All,
          })}
          data-cy="FilterLinkAll"
          onClick={() => onChangeStatus(Status.All)}
        >
          {Status.All}
        </a>

        <a
          href={`#/${Status.Active}`}
          className={classNames('filter__link', {
            selected: status === Status.Active,
          })}
          data-cy="FilterLinkActive"
          onClick={() => onChangeStatus(Status.Active)}
        >
          {Status.Active}
        </a>

        <a
          href={`#/${Status.Completed}`}
          className={classNames('filter__link', {
            selected: status === Status.Completed,
          })}
          data-cy="FilterLinkCompleted"
          onClick={() => onChangeStatus(Status.Completed)}
        >
          {Status.Completed}
        </a>
      </nav>

      <button
        disabled={!isCompletedTodo}
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
      >
        Clear completed
      </button>
    </footer>
  );
};
