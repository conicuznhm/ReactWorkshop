import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputToDo from './component/InputToDo';
import ListItems from './component/ListItems';
import SearchForm from './component/SearchForm';
import FilterStatus from './component/FilterStatus';

function App() {
  // defaul data
  const DefaultItems = [
    { id: uuidv4(), title: 'FreeCodeCamp Javascript', completed: false },
    { id: uuidv4(), title: 'FreeCodeCamp HTML', completed: false },
    { id: uuidv4(), title: 'FreeCodeCamp CSS', completed: true }
  ];

  // state declaration
  const [items, setItems] = useState(DefaultItems);     // for database
  const [showItems, setShowItems] = useState(items);    // for database

  // to update both state together
  const setAllState = (value) => {
    setItems(value);
    setShowItems(value);
  }

  // -----------------------------  
  // --    for <InputToDo />    --
  // -----------------------------
  const handleAddItem = (title) => {
    const nItem = { id: uuidv4(), title, completed: false }   // tile: tile === tile (short hand)
    setAllState([nItem, ...items]);
  }
  // --------------------------------------------------------------------------------------------

  // -----------------------------  
  // --    for <ListItems />    --
  // -----------------------------
  // display mode ---- action when click 'Delete' button
  const handleDelteItem = idToDelete => {
    const newItems = items.filter(item => item.id !== idToDelete);
    setAllState(newItems);
  }
  // edit mode --- action when click 'Done' or 'Change' button
  const handleUpdateItem = (id, updateValue) => {
    const idx = items.findIndex(item => item.id === id);
    const tempArr = [...items];                                             // clone [items] array
    tempArr[idx] = { ...tempArr[idx], ...updateValue };                     // merge object, the right one will replace if have same key

    const idxShow = showItems.findIndex(item => item.id === id);
    const tempArrShow = [...showItems];                                     // clone [showItems] array
    tempArrShow[idxShow] = { ...tempArrShow[idxShow], ...updateValue };     // merge object, the right one will replace if have same key

    setItems(tempArr);                                                      // update [items] with [tempArr]
    setShowItems(tempArrShow);                                              // update [showItems] with [tempArrShow]
  }
  // --------------------------------------------------------------------------------------------

  // ------------------------------ 
  // --    for <SearchForm />    --
  // ------------------------------
  const handleSearchItem = search => {
    const searchItems = items.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
    setShowItems(searchItems);
  }
  // --------------------------------------------------------------------------------------------

  // ------------------------------ 
  // --   for <FilterStatus />   --
  // ------------------------------
  const handleFilterItem = textFilter => {
    console.log(textFilter);
    if (textFilter === '') {
      setShowItems(items);
    } else {
      const filter = (textFilter === 'done');
      const searchItems = items.filter(item => item.completed === filter);
      setShowItems(searchItems);
    }
  }
  // --------------------------------------------------------------------------------------------

  return (
    <div className='container' style={{ width: '80%', margin: '50px auto' }}>
      <InputToDo handleAddItem={handleAddItem} />
      <br />
      <SearchForm onChange={handleSearchItem} />
      <br />
      <FilterStatus onChange={handleFilterItem} />
      <br />
      <br />

      <ListItems
        items={showItems}
        onClickDelete={handleDelteItem}
        onClickUpdateItem={handleUpdateItem}
      />
    </div>
  );
}

export default App;
