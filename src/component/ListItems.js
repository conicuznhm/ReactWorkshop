import Item from "./Item";

const ListItems = ({ items, onClickDelete, onClickUpdateItem }) => {
    return (
        <div>
            {items.map((item, idx) => <Item
                key={item.id}
                
                idx={idx}
                item={item}
                onClickDelete={onClickDelete}
                onClickUpdateItem={onClickUpdateItem}
            />)}
        </div>
    );
}
export default ListItems;