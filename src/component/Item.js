import { useState } from "react";

const Item = ({ item, idx, onChange, onClickDelete, onClickUpdateItem }) => {
    const [isDoneItem, setIsDoneItem] = useState(item.completed);
    const [isEdit, setIsEdit] = useState(false);

    // toggle between green and red (click on change button)
    const handleIsDoneItem = () => setIsDoneItem(!isDoneItem);
    const statusColor = isDoneItem ? '#14A44D' : '#DC4C64';

    // toggle between display and edit mode
    // ----- 1. happen when click on 'item' in display mode         <-- happen inside this component
    // ----- 2. happen when click on 'Done' button in edit mode     <-- happen outside (from App.js)
    const handlerIsEdit = (e) => setIsEdit(!isEdit);

    // item: display mode
    const displayItemMode = <div className="input-group">
        <div className="form-control" onClick={handlerIsEdit} style={{ backgroundColor: statusColor }}>{item.title}</div>
        <button className="btn btn-outline-secondary" onClick={handleIsDoneItem} >Change</button>
        <button className="btn btn-outline-secondary" onClick={() => onClickDelete(item.id)} >Delete</button>
    </div>

    // item: edit mode
    const editItemMode = <div className="input-group">
        <input className="form-control" onChange={onChange} defaultValue={item.title} />
        <button className="btn btn-outline-secondary" onClick={() => onClickUpdateItem(idx, handlerIsEdit)} >Done</button>
        <button className="btn btn-outline-secondary" onClick={handlerIsEdit} >Cancel</button>
    </div>

    return (
        <div className="input-group">
            {isEdit ? editItemMode : displayItemMode}
        </div>
    );
}
export default Item;