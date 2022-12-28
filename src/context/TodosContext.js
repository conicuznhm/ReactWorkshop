import { createContext, useContext, useReducer, useEffect } from "react";
import axios from 'axios';

const TodosContext = createContext();    // create storage
const FETCH_DATABASED = 'FETCH_DATABASED';
const ADD_DATABASED = 'ADD_DATABASED';

const todosReducer = (state, action) => {
    switch (action.type) {
        case FETCH_DATABASED:
            return action.todos;
        case ADD_DATABASED: {
            console.log('check',action.todo)
            return [action.todo, ...state];
        }
        default:
            return state;
    }
}

const TodosContextProvider = ({ children }) => {

    // get database -------------------------------------------------------------------------------
    const getDataFromDatabased = async () => {
        const res = await axios.get('http://localhost:8080/todos');
        // console.log(res.data.todos);
        dispatch({ type: FETCH_DATABASED, todos: res.data.todos })
    }
    useEffect(() => {
        getDataFromDatabased()
    }, [])
    // --------------------------------------------------------------------------------------------
    
    
    // add databased ------------------------------------------------------------------------------
    const [todos, dispatch] = useReducer(todosReducer, []);
    const addTodo = async (title) => {
        const todo = await axios.post('http://localhost:8080/todos', { title, completed: false })
        dispatch({ type: ADD_DATABASED, todo: todo.data.todo })
    }
    // --------------------------------------------------------------------------------------------

    return (
        <TodosContext.Provider value={{ todos, addTodo }}>
            {children}
        </TodosContext.Provider>
    );
}

const useTodos = () => useContext(TodosContext); // use

export { useTodos };
export default TodosContextProvider;