import React,{useState} from 'react';
import './App.css';
import {AiOutlineDelete} from 'react-icons/ai';
import { BsCheckLg } from "react-icons/bs";


function App() {
  const [isCompleteScreen,setIsCompleteScreen] = useState(false);
  const [allTodos,setTodos]= useState([]);
  const [newTitle,setNewTitle]=useState("");
  const [newdescription,setNewDescription]= useState("");

  const handleAddTodo = ()=>{
    let newTodoItem ={
      title:newTitle,
      description:newdescription
    }

    let updatedTodoArr =[...allTodos];
  updatedTodoArr.push(newTodoItem);
  setTodos(updatedTodoArr);
  }

  

  return (
    <div className="App">
      <div className='header'>
        <h1>TO-GOAL-DO</h1>
      </div>
      <div className='content'>
        <div className='todo-input'>
          <div className='todo-input-item'>
            <label>Title</label> <br/>
            <input type="text" value={newTitle} onChange={(e) =>setNewTitle(e.target.value)} placeholder='what is the title your to do'/>
          </div>
          <div className='todo-input-item'>
            <label>Description</label> <br/>
            <input type="text" value={newdescription} onChange={(e) =>setNewDescription(e.target.value)} placeholder='what is the description your to do'/>
          </div>
          <div className='todo-input-item'>
           <button type='button' onClick={handleAddTodo} className='add-btn'> Add</button>
          </div>
        </div>
        <div className="btn-area">
          <button
          className={`todo-btn ${isCompleteScreen === false ? 'active' : ''}`}
          onClick={() => setIsCompleteScreen(false)}
          >
           ToDo
          </button>
          <button
          className={`comp-btn ${isCompleteScreen === true ? 'active' : ''}`}
          onClick={() => setIsCompleteScreen(true)}
          >
          Completed
  </button>
</div>

        <div className='todo-list'>
          
           {allTodos.map((item,index) =>{
              return(
                <div className='todo-list-item' key={index}>
                <div>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
             </div>  
             <div>
               <AiOutlineDelete className='icon' title='deleted'/>
               <BsCheckLg className='check-icon'/> 
             </div>
           </div>
          
              )
           })}
       
      </div>

    </div>
  </div>
  );
}

export default App;
