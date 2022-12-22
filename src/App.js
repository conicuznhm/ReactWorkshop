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

  // state declaration
  const [items, setItems] = useState(DefaultItems);     // for data base
  const [item, setItem] = useState('');                 // for input data
  const [editItem, setEditItem] = useState('');         // for edit data

  // for <InputToDo /> --------------------------------------------------------------------------
  // --------------------------------------------------------------------------------------------  
  // action when user click 'Add' button
  const handleAddItem = () => {
    const tempArr = [...items];
    tempArr.unshift({ id: uuidv4(), title: item, completed: false });
    setItems(tempArr);
    setItem('');
  };
  // action when user click 'Reset' button
  const handleResetItem = () => setItem('');
  // action when 'input' changed by user
  const handleInputChange = (e) => setItem(e.target.value);


  // for <ListItems /> --------------------------------------------------------------------------
  // --------------------------------------------------------------------------------------------
  // display mode ---- action when click 'Delete' button
  const handleDelte = idToDelete => {
    const newItems = items.filter(item => item.id !== idToDelete);
    setItems(newItems);
  }
  // edit mode --- action when click 'Done' button
  const handleClickUpdateItems = (idxToUpdate, handlerIsEdit) => {
    const tempArr = [...items];                                                   // clone [items] array
    const newObj = Object.assign({}, tempArr[idxToUpdate], { title: editItem })   // create new object with 'editItem'
    tempArr.splice(idxToUpdate, 1, newObj);                                       // substitute tempArr[idxToUpdate] with {newObj}
    setItems(tempArr);                                                            // update [items] with [tempArr]
    handlerIsEdit();                                                              // toggle isEdit status <----------- function from <Item />
  }
  // edit mode --- action when 'item' edited by user
  const handleEditItem = (e) => setEditItem(e.target.value);
  // --------------------------------------------------------------------------------------------

  return (
    <div style={{ width: '80%', margin: '50px auto' }}>
      <InputToDo
        item={item}
        onChange={handleInputChange}
        onClickAdd={handleAddItem}
        onClickReset={handleResetItem}
      />

      <ListItems
        items={items}
        onChange={handleEditItem}
        onClickUpdateItem={handleClickUpdateItems}
        onClickDelete={handleDelte}
      />
    </div>
  );
}

export default App;
