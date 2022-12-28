import { useState } from 'react';

const InputToDo = ({ handleAddItem }) => {

    const [newItem, setNewItem] = useState('');     // for input data
    console.log(newItem)

    return (
        <form>
            <div className="input-group">
                <input
                    // className={`form-control ${error ? 'is-invalid' : ''}`}
                    className={`form-control`}
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    placeholder='Enter your To-Do List'
                />
            </div>
        </form>
    );
}
export default InputToDo;