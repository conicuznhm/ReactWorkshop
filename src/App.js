import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputToDo from './component/InputToDo';
import ListItems from './component/ListItems';

function App() {
  // defaul data
  const DefaultItems = [
    { id: uuidv4(), title: 'FreeCodeCamp Javascript', completed: false },
    { id: uuidv4(), title: 'FreeCodeCamp HTML', completed: false },
    { id: uuidv4(), title: 'FreeCodeCamp CSS', completed: true }
  ];

  // state declaration
  const [items, setItems] = useState(DefaultItems);     // for database

  // -----------------------------  
  // --    for <InputToDo />    --
  // -----------------------------
  const handleAddItem = (title) => {
    const nItem = { id: uuidv4(), title, completed: false }   // tile: tile === tile (short hand)
    setItems([nItem, ...items]);
  }
  // --------------------------------------------------------------------------------------------

  // -----------------------------  
  // --    for <ListItems />    --
  // -----------------------------
  // display mode ---- action when click 'Delete' button
  const handleDelteItem = idToDelete => {
    const newItems = items.filter(item => item.id !== idToDelete);
    setItems(newItems);
  }
  // edit mode --- action when click 'Done' or 'Change' button
  const handleUpdateItem = (id, updateValue) => {
    const idx = items.findIndex(item => item.id === id);
    const tempArr = [...items];                                       // clone [items] array
    // const newObj = Object.assign({}, tempArr[idx], updateValue)       // create new object with 'editItem'
    // tempArr.splice(idx, 1, newObj);                                   // substitute tempArr[idxToUpdate] with {newObj}
    tempArr[idx] = {...tempArr[idx], ...updateValue}                  // merge object, the right one will replace if have same key
    setItems(tempArr);                                                // update [items] with [tempArr]
  }
  // --------------------------------------------------------------------------------------------

  return (
    <div className='container' style={{ width: '80%', margin: '50px auto' }}>
      <InputToDo handleAddItem={handleAddItem} />

      <br />

      <ListItems
        items={items}
        onClickDelete={handleDelteItem}
        onClickUpdateItem={handleUpdateItem}
      />
    </div>
  );
}

export default App;
