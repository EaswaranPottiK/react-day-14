import './App.css';
import { useRef, useState } from 'react';
import Logic from './Logic';
import { context } from './contex';

function App() {
  const [spend,setSpend] = useState(0)
  const [itemList, setItemList] = useState([])
  const [id, setId] = useState(0)

  return (
    <context.Provider value={{spend,setSpend, itemList,setItemList,id,setId}}>
      <Logic/>
    </context.Provider> 
  )
}

export default App;
