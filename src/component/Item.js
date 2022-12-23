import { useState } from "react";

const Item = ({ item, onClickDelete, onClickUpdateItem }) => {
    const [isEdit, setIsEdit] = useState(false);                        // for toggling between display and edit mode
    const [editItem, setEditItem] = useState(item.title);               // for edit data

    // set status color due to current 'completed' status
    const statusColor = item.completed ? 'success' : 'danger';

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

    // action when click confirm on edit mode
    const handleUpdateFromEdit = () => {
        onClickUpdateItem(item.id, {title: editItem});
        handlerIsEdit();
    }

    // item: display mode
    const displayItemMode = <div className="input-group">
        <div className={`form-control text-bg-${statusColor}`} onClick={handlerIsEdit} >{item.title}</div>
        <button className="btn btn-outline-secondary" onClick={() => onClickUpdateItem(item.id, {completed: !item.completed})} >Change</button>
        <button className="btn btn-outline-secondary" onClick={() => onClickDelete(item.id)} >Delete</button>
    </div>

    // item: edit mode
    const editItemMode = <div className="input-group">
        <input className="form-control" onChange={handleEditItem} value={editItem} />
        <button className="btn btn-outline-secondary" onClick={handleUpdateFromEdit} ><i className="fa-solid fa-check" /></button>
        <button className="btn btn-outline-secondary" onClick={hadleCancelItem} ><i className="fa-solid fa-xmark" /></button>
    </div>

    return (
        <div className="input-group">
            {isEdit ? editItemMode : displayItemMode}
        </div>
    );
}
export default Item;