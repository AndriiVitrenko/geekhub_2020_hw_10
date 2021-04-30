import {useDispatch} from 'react-redux';
import {useCallback} from 'react';
import {changeState, deleteTodo} from '../store/todoList';
import { Todo } from '../interfaces';

export function TodoItem({text, index, isCompleted}: Todo) {
    const dispatch = useDispatch()

    const deleteHandler = useCallback(
        () => {
            dispatch(deleteTodo(index))
        }

        , [index, dispatch]
    )

    const onChangeHandler = useCallback(
        () => {
            dispatch(changeState(index))
        }
        , [index, dispatch]
    )

    return(
        <li className = {isCompleted ? 'completed' : ''}>
            <p>
                <span className='index'>{index + 1}.</span> 
                <input type='checkbox'
                 checked = {isCompleted}
                 onChange = {onChangeHandler} /> 
                <span className='todo-text'>{text}</span>
                <button className="delete" onClick={deleteHandler}><i className="far fa-trash-alt"></i></button>
            </p>
        </li>
    )
}