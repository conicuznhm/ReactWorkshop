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
        <div className="input-group" style={{ margin: '40px 0' }}>
            <input className="form-control" value={newItem} onChange={handleInputChange} />
            <button className="btn btn-outline-secondary" onClick={handleAddNewItem}>Add</button>
            <button className="btn btn-outline-secondary" onClick={handleResetNewItem}>Reset</button>
        </div>
    );
}
export default InputToDo;