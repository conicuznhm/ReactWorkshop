import Item from "./Item";
import { useTodos } from "../context/TodosContext";


const ListItems = () => {
    // useContext: TodosContext
    const { todos } = useTodos();

    return (
        <div className="list-group">
            {todos.map((todo, idx) => <Item
                key={idx}
                todo={todo}
            />)}
        </div>
    );
}
export default ListItems;