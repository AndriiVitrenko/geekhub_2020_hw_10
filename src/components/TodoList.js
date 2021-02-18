import { TodoItem } from "./TodoItem"

export function TodoList(props) {
    return(
        <ul>
            {props.list.map((todo, i) => {
                    return <TodoItem todo = {todo} key = {i} /> 
                })
            }
        </ul>
    )
}