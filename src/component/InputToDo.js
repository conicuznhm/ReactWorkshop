import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const InputToDo = ({ items, setItems }) => {
    const [newItem, setNewItem] = useState('');                 // for input data

    // action when user click 'Add' button
    const handleAddNewItem = () => {
        const tempArr = [...items];
        tempArr.unshift({ id: uuidv4(), title: newItem, completed: false });
        setItems(tempArr);
        setNewItem('');
    };

    // action when user click 'Reset' button
    const handleResetNewItem = () => setNewItem('');

    // action when 'input' changed by user
    const handleInputChange = (e) => setNewItem(e.target.value);

    return (
        <div className="input-group">
            <input className="form-control" value={newItem} onChange={handleInputChange} />
            <button className="btn btn-primary" onClick={handleAddNewItem}><i className="fa-solid fa-check" /></button>
            <button className="btn btn-outline-secondary" onClick={handleResetNewItem}><i className="fa-solid fa-xmark" /></button>
        </div>
    );
}
export default InputToDo;