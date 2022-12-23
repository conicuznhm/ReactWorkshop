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
    { id: uuidv4(), title: 'FreeCodeCamp CSS', completed: false }
  ];

  // state declaration
  const [items, setItems] = useState(DefaultItems);     // for database

  // -----------------------------  
  // --    for <ListItems />    --
  // -----------------------------
  // display mode ---- action when click 'Delete' button
  const handleDelte = idToDelete => {
    const newItems = items.filter(item => item.id !== idToDelete);
    setItems(newItems);
  }
  // edit mode --- action when click 'Done' or 'Change' button
  const handleClickUpdateItems = (idxToUpdate, editItem, keyToUpdate, handlerIsEdit) => {
    const tempArr = [...items];                                                               // clone [items] array
    const newObj = Object.assign({}, tempArr[idxToUpdate], { [keyToUpdate]: editItem })       // create new object with 'editItem'
    tempArr.splice(idxToUpdate, 1, newObj);                                                   // substitute tempArr[idxToUpdate] with {newObj}
    setItems(tempArr);                                                                        // update [items] with [tempArr]

    if (keyToUpdate === 'title') handlerIsEdit();                                             // toggle isEdit status <----------- function from <Item />
  }
  // --------------------------------------------------------------------------------------------

  return (
    <div style={{ width: '80%', margin: '50px auto' }}>
      <InputToDo
        items={items}
        setItems={setItems}
      />

      <ListItems
        items={items}
        onClickDelete={handleDelte}
        onClickUpdateItem={handleClickUpdateItems}
      />
    </div>
  );
}

export default App;
