import './App.css';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputToDo from './component/InputToDo';
import ListItems from './component/ListItems';
import SearchForm from './component/SearchForm';
import FilterStatus from './component/FilterStatus';
import axios from 'axios';

function App() {

  // state declaration
  const [items, setItems] = useState([]);     // for database
  const [showItems, setShowItems] = useState([]);    // for database

  // database -----------------------------------------------------------------------------------
  const getDataFromDatabased = async () => {
    const res = await axios.get('http://localhost:8080/todos');
    setItems(res.data.todos);
    setShowItems(res.data.todos);
    console.log(res.data.todos);
  }
  useEffect(() => {
    getDataFromDatabased()
  }, [])

  // // defaul data
  // const DefaultItems = [
  //   { id: uuidv4(), title: 'FreeCodeCamp Javascript', completed: false },
  //   { id: uuidv4(), title: 'FreeCodeCamp HTML', completed: false },
  //   { id: uuidv4(), title: 'FreeCodeCamp CSS', completed: true }
  // ];
  // --------------------------------------------------------------------------------------------

  // -----------------------------  
  // --    for <InputToDo />    --
  // -----------------------------

  // --------------------------------------------------------------------------------------------

  // -- display conditions ----------------------------------------------------------------------
  // ------------------------------ 
  // --    for <SearchForm />    --
  // ------------------------------

  // ------------------------------ 
  // --   for <FilterStatus />   --
  // ------------------------------

  // --------------------------------------------------------------------------------------------

  // -----------------------------  
  // --    for <ListItems />    --
  // -----------------------------

  // --------------------------------------------------------------------------------------------

  return (
    <div className='container' style={{ width: '80%', margin: '50px auto' }}>
      <InputToDo />
      <br />
      <SearchForm />
      <br />
      <FilterStatus />
      <br />
      <br />

      <ListItems />
    </div>
  );
}

export default App;
