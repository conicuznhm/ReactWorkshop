import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';

const InputToDo = ({ items, setItems }) => {
    const [newItem, setNewItem] = useState('');     // for input data
    const [error, setError] = useState('');

    // action when submit (both click on 'Add' and press 'Enter')
    // ---> use [form + submit] instead of [onClick]
    const handleSubmit = (e) => {
        e.preventDefault();     // avoid refesh page after submitting
        if (validator.isEmpty(newItem, { ignore_whitespace: true })) {
            setError('To-Do List is required');
        } else {
            setError('');
            const tempArr = [...items];
            tempArr.unshift({ id: uuidv4(), title: newItem, completed: false });
            setItems(tempArr);
            setNewItem('');
        }
    }

    // action when user click 'Reset' button
    const handleResetNewItem = () => setNewItem('');

    // action when 'input' changed by user
    const handleInputChange = (e) => setNewItem(e.target.value);

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <input
                    className={`form-control ${error ? 'is-invalid' : ''}`}
                    value={newItem} onChange={handleInputChange}
                    placeholder='Enter your To-Do List'
                />

                <button className="btn btn-primary">
                    <i className="fa-solid fa-check" />
                </button>

                <button
                    type='button'
                    className="btn btn-outline-secondary"
                    onClick={handleResetNewItem}
                >
                    <i className="fa-solid fa-xmark" />
                </button>
            </div>
            {error && <small className='text-danger'>{error}</small>}
        </form>
    );
}
export default InputToDo;