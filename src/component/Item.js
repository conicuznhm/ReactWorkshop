import { useState } from "react";

const Item = ({ idx, item, onClickDelete, onClickUpdateItem }) => {
    const [isEdit, setIsEdit] = useState(false);                        // for toggling between display and edit mode
    const [editItem, setEditItem] = useState(item.title);               // for edit data
    const [isDoneItem, setIsDoneItem] = useState(item.completed);       // for toggling between green and red (click on change button)

    // toggle between green and red (click on change button)
    const handleIsDoneItem = () => setIsDoneItem(!isDoneItem);
    const statusColor = isDoneItem ? '#14A44D' : '#DC4C64';

    // toggle between display and edit mode
    // ----- 1. happen when click 'item' in display mode         <-- happen inside this component
    // ----- 2. happen when click 'Done' button in edit mode     <-- happen outside (from App.js)
    const handlerIsEdit = () => setIsEdit(!isEdit);

    // action when 'item' edited by user
    const handleEditItem = (e) => setEditItem(e.target.value);

    // action when click 'Cancel' button
    const hadleCancelItem = () => {
        setEditItem(item.title);
        handlerIsEdit();
    }

    // item: display mode
    const displayItemMode = <div className="input-group">
        <div className="form-control" onClick={handlerIsEdit} style={{ backgroundColor: statusColor, color: "white" }}>{item.title}</div>
        <button className="btn btn-outline-secondary" onClick={handleIsDoneItem} >Change</button>
        <button className="btn btn-outline-secondary" onClick={() => onClickDelete(item.id)} >Delete</button>
    </div>

    // item: edit mode
    const editItemMode = <div className="input-group">
        <input className="form-control" onChange={handleEditItem} value={editItem} />
        <button className="btn btn-outline-secondary" onClick={() => onClickUpdateItem(idx, editItem, handlerIsEdit)} >Done</button>
        <button className="btn btn-outline-secondary" onClick={hadleCancelItem} >Cancel</button>
    </div>

    return (
        <div className="input-group">
            {isEdit ? editItemMode : displayItemMode}
        </div>
    );
}
export default Item;