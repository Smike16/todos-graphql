import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import InputUpdate from '../input-update';
import './todo.css';

Todo.propTypes = {
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    onUpdateTodo: PropTypes.func.isRequired,
    onDeleteTodo: PropTypes.func.isRequired
};

export default function Todo({
    id,
    completed,
    text,
    onUpdateTodo,
    onDeleteTodo
}) {
    const todoClass = classNames('todo', {
        todo_completed: completed
    });

    function handleUpdateTodoText({ name, value }) {
        onUpdateTodo({
            id,
            completed,
            text: value
        });
    }

    function handleToggleTodo(event) {
        onUpdateTodo({
            id,
            text,
            completed: event.target.checked
        });
    }

    function handleDeleteTodo() {
        onDeleteTodo(id);
    }

    return (
        <li className={todoClass}>
            <input
                type='checkbox'
                name='completed'
                checked={completed}
                onChange={handleToggleTodo} />
            <InputUpdate
                className='todo__text'
                name='text'
                value={text}
                onChangeValue={handleUpdateTodoText} />
            <button onClick={handleDeleteTodo}>x</button>
        </li>
    );
}
