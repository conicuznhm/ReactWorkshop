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

  // conditon variable (search, filter, etc.)
  const [arrDisplayCondition, setArrDisplayCondition] = useState([]);

  // to update both state together
  const setAllState = (value) => {
    setItems(value);
    setShowItems(value);
  }

  // to merge array
  const mergeArray = arrOfObjOfArr => {
    return arrOfObjOfArr.reduce((acc, obj) => {
      acc = [...new Set([...acc, ...Object.values(obj)[0]])]
      return acc;
    }, [])
  }

  // to delete object's properties according to input array of [id]
  const deleteProperties = (arrIdToDelete) => {
    if (arrIdToDelete.length !== 0) {
      const tempObj = items.reduce((acc, obj) => {
        const idx = arrIdToDelete.findIndex(id => id === obj.id);
        if (idx === -1) {
          acc.push(obj)
        }
        return acc;
      }, [])
      return tempObj;
    }
    return items;
  }

  // to find id of item that need to be deleted
  const findIdToDelete = (condition, key) => {
    const arrIdToDelete = [];
    switch (key) {
      case 'search':
        items.forEach(item => (condition !== '') && (item.title.toLowerCase().includes(condition.toLowerCase()) ? null : arrIdToDelete.push(item.id)));
        break;
      case 'status':
        items.forEach(item => {
          if (condition === 'done' && item.completed !== true) arrIdToDelete.push(item.id);
          else if (condition === 'notDone' && item.completed !== false) arrIdToDelete.push(item.id);
        });
        break;
    }
    return arrIdToDelete;
  }

  // to update display condition to arrDisplayCondition
  const updateConditionArr = (arrIdToDelete, key) => {
    const arrKey = arrDisplayCondition.reduce((acc, obj) => {
      acc.push(...Object.keys(obj));
      return acc;
    },[])

    const tempArr = [...arrDisplayCondition]

    if (arrKey.includes(key)) {   // already exist --> update
      const idx = tempArr.findIndex(el => key in el);
      tempArr[idx] = { ...tempArr[idx], [key]: arrIdToDelete }
    } else {                      // not exist --> add
      tempArr.push({ [key]: arrIdToDelete });
    }
    setArrDisplayCondition(tempArr);
    return [...tempArr];
  }

  // -----------------------------  
  // --    for <InputToDo />    --
  // -----------------------------
  const handleAddItem = (title) => {
    const nItem = { id: uuidv4(), title, completed: false }   // tile: tile === tile (short hand)
    setAllState([nItem, ...items]);
  }
  // --------------------------------------------------------------------------------------------

  // -- display conditions ----------------------------------------------------------------------
  // ------------------------------ 
  // --    for <SearchForm />    --
  // ------------------------------
  const handleSearchItem = search => {
    setShowItems(deleteProperties(mergeArray(updateConditionArr(findIdToDelete(search, 'search'), 'search'))))
  }
  // ------------------------------ 
  // --   for <FilterStatus />   --
  // ------------------------------
  const handleFilterItem = textFilter => {
    setShowItems(deleteProperties(mergeArray(updateConditionArr(findIdToDelete(textFilter, 'status'), 'status'))))
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
