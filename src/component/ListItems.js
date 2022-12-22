import Item from "./Item";

const ListItems = ({ items, onClickDelete, onChange, onUpdate }) => {
    return (
        <div>
            {items.map((item, idx) => <Item
                key={item.id}
                item={item.title}
                completed={item.completed}
                id={item.id}
                onClick={onClickDelete}
                onChange={onChange}
                onUpdate={onUpdate}
                idx={idx}
            />)}
        </div>
    );
}
export default ListItems;