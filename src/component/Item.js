import { useState } from "react";

const Item = ({ item }) => {
    const [isEdit, setIsEdit] = useState(false);                        // for toggling between display and edit mode
    const [editItem, setEditItem] = useState(item.title);               // for edit data

    // set status color due to current 'completed' status
    const statusColor = item.completed ? 'success' : 'danger';

    // action when 'item' edited by user
    const handleEditItem = (e) => setEditItem(e.target.value);

    // item: display mode
    const displayItemMode = <div className="d-flex align-items-center">
        <div className="flex-fill" role='button' >{item}</div>
        <div className="btn-group">
            <button className="btn btn-outline-light" >
                <i className="fa-solid fa-repeat" />
            </button>
            <button className="btn btn-outline-light" >
                <i className="fa-regular fa-trash-can" />
            </button>
        </div>
    </div>

    // item: edit mode
    const editItemMode = <div className="input-group list-group-item d-flex">
        <input className="form-control" onChange={handleEditItem} value={editItem} />
        <button className="btn btn-primary"  ><i className="fa-solid fa-check" /></button>
        <button className="btn btn-outline-secondary"  ><i className="fa-solid fa-xmark" /></button>
    </div>

    return (
        <div className={`${!isEdit ? 'list-group-item  text-bg-' + statusColor : ''}`}>
            {isEdit ? editItemMode : displayItemMode}
        </div>
    );
}
export default Item;