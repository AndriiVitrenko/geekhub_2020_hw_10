import {useDispatch} from 'react-redux';
import {useCallback} from 'react';
import {changeState, deleteTodo} from '../dataBase/todoList';


export function TodoItem(props) {
    const dispatch = useDispatch()

    const {text, index, isCompleted} = props.todo;

    const deleteHandler = useCallback(
        () => {
            dispatch(deleteTodo(index))
        }

        ,[index]
    )

    const onChangeHandler = useCallback(
        () => {
            dispatch(changeState(index))
        }
        , [index]
    )

    return(
        <li className = {isCompleted ? 'completed' : ''}>
            <p>
                <span className='index'>{index + 1}.</span> 
                <input type='checkbox'
                 checked = {isCompleted}
                 onChange = {onChangeHandler} /> 
                <span className='todo-text'>{text}</span>
                <i className="fas fa-trash-alt" onClick={deleteHandler}></i>
            </p>
        </li>
    )
}