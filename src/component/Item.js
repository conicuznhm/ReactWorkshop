import { useState } from "react";

const Item = ({ item, completed, id, onClick, onChange, onUpdate, idx }) => {
    const [isDone, setIsDone] = useState(completed);
    const [isEdit, setIsEdit] = useState(false);

    // action when click 'Done' button
    const handleIsDone = () => setIsDone(!isDone);

    // action when click on each item
    const handlerIsEdit = (e) => {
        console.log(isEdit);
        console.log(e);
        setIsEdit(!isEdit);
    }

    const displayItemMode = <div className="input-group">
        <div className="form-control" onClick={handlerIsEdit} style={{ backgroundColor: isDone ? '#14A44D' : '#DC4C64' }}>{item}</div>
        <button className="btn btn-outline-secondary" onClick={handleIsDone} >Change</button>
        <button type="reset" className="btn btn-outline-secondary" onClick={() => onClick(id)} >Delete</button>
    </div>

    const editItemMode = <div className="input-group">
        <input className="form-control" type='text' onChange={onChange} defaultValue={item} />
        <button className="btn btn-outline-secondary" onClick={() => onUpdate(idx)} >Done</button>
        <button type="reset" className="btn btn-outline-secondary" onClick={() => onClick(id)} >Cancel</button>
    </div>

    return (
        <div className="input-group">
            {isEdit ? editItemMode : displayItemMode}
        </div>
    );
}
export default Item;