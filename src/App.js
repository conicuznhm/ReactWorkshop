import './App.css';
import { v4 as uuidv4 } from 'uuid';
import InputToDo from './component/InputToDo';
import ListItems from './component/ListItems';
import { useState } from 'react';

function App() {

  const DefaultItems = [
    { id: uuidv4(), title: 'input 3', completed: false },
    { id: uuidv4(), title: 'input 2', completed: false },
    { id: uuidv4(), title: 'input 1', completed: false }
  ];

  const [items, setItems] = useState(DefaultItems);
  const [item, setItem] = useState('');

  // action when click 'Add' button
  const handleAddItem = () => {
    const tempArr = [...items];
    tempArr.unshift({ id: uuidv4(), title: item, completed: false });
    setItems(tempArr);
    setItem('');
  };

  // action when click 'Reset' button
  const handleResetItem = () => setItem('');

  // action when 'input' change by user
  const handleInputChange = (e) => setItem(e.target.value);

  // action when click 'Delete button
  const handleDelteItem = idToDelete => {
    const newItems = items.filter(item => item.id !== idToDelete);
    setItems(newItems);
  }

  return (
    <div style={{ width: '80%', margin: '50px auto' }}>
      <InputToDo item={item} onChange={handleInputChange} onClickAdd={handleAddItem} onClickReset={handleResetItem} />
      <ListItems items={items} onClickDelete={handleDelteItem} />
    </div>
  );
}

export default App;
