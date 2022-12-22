import Item from "./Item";
import { v4 as uuidv4 } from 'uuid';

const ListItems = ({items}) => {
    return (
        <div style={{border: '2px solid green'}}>
        {items.map(item => <h1 key={item.id}>{item.title}</h1>)}
            {/* <Item item={{ id: uuidv4(), title: 'input 3', completed: false }}/> */}
            <Item />
        </div>
    );
}
export default ListItems;