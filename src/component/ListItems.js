import Item from "./Item";
import { v4 as uuidv4 } from 'uuid';

const ListItems = ({ items, onClickDelete }) => {
    return (
        <div>
            {items.map(item => <Item key={item.id} item={item.title} completed={item.completed} id={item.id} onClick={onClickDelete} />)}
        </div>
    );
}
export default ListItems;