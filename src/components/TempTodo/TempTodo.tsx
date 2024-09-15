/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */

type Props = {
  title: string;
};

export const TempTodo: React.FC<Props> = ({ title }) => {
  return (
    <div data-cy="Todo" className="todo">
      <label
        className="todo__status-label"
        htmlFor={`temp-todo-status-${title}`}
      >
        <input
          id={`temp-todo-status-${title}`}
          data-cy="TodoStatus"
          type="checkbox"
          className="todo__status"
          disabled
        />
      </label>

      <span data-cy="TodoTitle" className="todo__title">
        {title}
      </span>

      <button
        type="button"
        className="todo__remove"
        data-cy="TodoDelete"
        disabled
      >
        ×
      </button>

      <div data-cy="TodoLoader" className="modal overlay is-active">
        <div className="modal-background has-background-white-ter" />
        <div className="loader" />
      </div>
    </div>
  );
};