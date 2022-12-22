import Item from "./Item";

const ListItems = ({ items, onChange, onClickDelete, onClickUpdateItem }) => {
    return (
        <div>
            {items.map((item, idx) => <Item
                key={item.id}
                item={item}
                idx={idx}

                onChange={onChange}
                onClickUpdateItem={onClickUpdateItem}
                onClickDelete={onClickDelete}
            />)}
        </div>
    );
}
export default ListItems;