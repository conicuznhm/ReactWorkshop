import { createContext, useContext, useReducer, useEffect } from "react";
import axios from 'axios';

const TodosContext = createContext();    // create storage

const FETCH_DATABASED = 'FETCH_DATABASED';
const ADD_DATABASED = 'ADD_DATABASED';
const DELETE_DATABASED = 'DELETE_DATABASED';
const UPDATE_DATABASED = 'DELETE_DATABASED';

const todosReducer = (state, action) => {
    switch (action.type) {
        case FETCH_DATABASED: return action.todos;
        case ADD_DATABASED: return [action.todo, ...state];
        case DELETE_DATABASED: return action.todos;
        case UPDATE_DATABASED: return action.todos;
        default: return state;
    }
}

const TodosContextProvider = ({ children }) => {
    // useReducer
    const [todos, dispatch] = useReducer(todosReducer, []);

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
    const addTodo = async (title) => {
        const todo = await axios.post('http://localhost:8080/todos', { title, completed: false })
        dispatch({ type: ADD_DATABASED, todo: todo.data.todo })
    }
    // --------------------------------------------------------------------------------------------

    // delete databased ---------------------------------------------------------------------------
    const deleteTodo = async (id) => {
        await axios.delete(`http://localhost:8080/todos/${id}`)
        const tempTodos = todos.filter((el) => el.id !== id)
        dispatch({ type: DELETE_DATABASED, todos: tempTodos })
    }
    // --------------------------------------------------------------------------------------------

    // update databased ---------------------------------------------------------------------------
    const updateTodo = async (id, updateValue) => {
        const idx = todos.findIndex((el) => el.id === id)
        const tempTodos = [...todos]
        tempTodos[idx] = { ...tempTodos[idx], ...updateValue }
        await axios.put(`http://localhost:8080/todos/${id}`, tempTodos[idx])
        dispatch({ type: UPDATE_DATABASED, todos: tempTodos })
    }
    // --------------------------------------------------------------------------------------------

    return (
        <TodosContext.Provider value={{ todos, addTodo, deleteTodo, updateTodo }}>
            {children}
        </TodosContext.Provider>
    );
}

const useTodos = () => useContext(TodosContext); // use

export { useTodos };
export default TodosContextProvider;