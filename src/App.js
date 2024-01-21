import './App.css';
import { useRef, useState } from 'react';

function App() {
  let total = 2000
  const name = useRef()
  const cost = useRef()
  const [spend,setSpend] = useState(0)
  const [itemList, setItemList] = useState([])
  const [id, setId] = useState(0)

  function addItem(){
    let nameOfItem = name.current.value
    let costOfItem = cost.current.value
    setSpend(parseInt(spend)+parseInt(costOfItem))
    setId(id+1)
    name.current.value = ''
    cost.current.value = ''
    setItemList(()=>[...itemList,{name:nameOfItem,cost:costOfItem,id:id}])
  }


  function deleteItem(id,cost){
    const itemFiltered = itemList.filter((item)=>item.id !== id)
    setItemList(itemFiltered)
    setSpend(parseInt(spend)-parseInt(cost))
  }

  return (
    <div style={{marginLeft:'8vw',marginRight:'8vw', marginTop:'2vh', width:'auto'}}>

      <p style={{fontSize:'3rem',fontWeight:'600'}}>My Budget Planner</p>
      <br></br>

      <div style={{display:'flex',justifyContent:'space-around',fontSize:'1.5rem'}}>
        <p style={{fontWeight:'600', borderRadius:'4px', color:'#6C757D',border:'1px solid #E9ECEF',padding:'5px 15px',backgroundColor:'#F8F9FA'}}>Budget: Rs.{total}</p>
        <p style={{fontWeight:'600', borderRadius:'4px', color:'#198759',border:'1px solid #E9ECEF',padding:'5px 15px',backgroundColor:'#F8F9FA'}}>Remaining: Rs.{total-spend}</p>
        <p style={{fontWeight:'600', borderRadius:'4px', color:'#087990',border:'1px solid #9EEAF9',padding:'5px 15px',backgroundColor:'#CFF4FC'}}>Spend so far: {spend}</p>
      </div><br></br>

      <p style={{fontSize:'2rem',fontWeight:'600'}}>Expenses</p>
      {(!itemList.length)&&
        <p style={{color:'#198754', fontSize:'2rem',fontWeight:'600'}}>Add Data To List.....</p>
      }
      
      <div>
        {
          itemList.map((item)=>(
          <div style={{backgroundColor:'#F8F9FA',border:'1px solid #E9ECEF',color:'#6c757D',height:'5vh', fontSize:'large',padding:'1vh 4vw',display:'flex',justifyContent:'space-between'}}>
            <span>{item.name}</span>
            <span style={{display:'flex'}}>{item.cost} &nbsp;&nbsp;<span className="material-symbols-outlined" id={item.id} onClick={()=>deleteItem(item.id,item.cost)}>close</span></span>
          </div>))
        }
      </div>
      <br></br>

      <p style={{fontSize:'2rem',fontWeight:'600'}}>Add Expenses</p>
      <div style={{display:'flex',width:'100%',gap:'3vw'}}>
        <input ref={name} style={{width:"100%",height:'5vh',border:'1px solid #DEE2E6'}} type='text' placeholder='Name of the item'></input>
        <input ref={cost} style={{width:"100%",height:'5vh',border:'1px solid #DEE2E6'}} type='number' placeholder='Cost'></input>
      </div>
      <button onClick={addItem} style={{backgroundColor:'#0D6EFD',border:'none',padding:'10px 15px',borderRadius:'4px',color:'white',fontSize:'16px',marginTop:'10px'}}>Save</button>
    </div>
  );
}

export default App;
