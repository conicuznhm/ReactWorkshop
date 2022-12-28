import Item from "./Item";

const ListItems = () => {
    const dummy = ['Task 1', 'Task 2', 'Task 3']
    return (
        <div className="list-group">
            {dummy.map((item, idx) => <Item
                key={idx}
                item={item}
            />)}
        </div>
    );
}
export default ListItems;