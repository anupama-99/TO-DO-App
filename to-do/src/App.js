import React,{useState,useEffect} from 'react';
import './App.css';
import {AiOutlineDelete} from 'react-icons/ai';
import { BsCheckLg } from "react-icons/bs";


function App() {
  const [isCompleteScreen,setIsCompleteScreen] = useState(false);
  const [allTodos,setTodos]= useState([]);
  const [newTitle,setNewTitle]=useState("");
  const [newdescription,setNewDescription]= useState("");
  const [CompletedTodos, setCompletedTodos] = useState("");

  const handleAddTodo = ()=>{
    let newTodoItem ={
      title:newTitle,
      description:newdescription
    }

    let updatedTodoArr =[...allTodos];
  updatedTodoArr.push(newTodoItem);
  setTodos(updatedTodoArr);
  localStorage.setItem("todolist",JSON.stringify(updatedTodoArr))
  };

  const handleDeleteTodo =(index) =>{
    let reducedTodo =[...allTodos];
    reducedTodo.splice(index);
    
    localStorage.setItem("todolist",JSON.stringify(reducedTodo));
    setTodos(reducedTodo)
  }

  const handleComplete=(index) =>{
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getmonth() + 1;
    let yyyy = now.getfullyear();
    let h= now.gethour();
    let m = now.getminetes();
    let s =now.getseconds();
    let Completedon = dd + "-" + mm +"-" + yyyy + "at" + h + ":" + m + ":" + s;

    let filteredItem = {
    ...allTodos[index],
    Completedon:Completedon
    }

    let updatedCompletedarr =[ ...CompletedTodos];
    updatedCompletedarr.push(filteredItem);
    setCompletedTodos(updatedCompletedarr);
    handleDeleteTodo(index);
    localStorage.setItem("completedTodos",JSON.stringify(updatedCompletedarr));
  }

  const handleDeleteCompletedTodo = (index) =>{
    let reducedTodo =[...CompletedTodos];
    reducedTodo.splice(index);
    
    localStorage.setItem("CompletedTodos",JSON.stringify(reducedTodo));
    setCompletedTodos(reducedTodo);
  }

  useEffect(()=>{
    let savedTodo= JSON.parse(localStorage.getItem("todolist"));
    let savedCompletedTodo= JSON.parse(localStorage.getItem("compltedTodos"));
    if(savedTodo){
      setTodos(savedTodo);
    }

    if(savedCompletedTodo){
      setCompletedTodos(savedCompletedTodo);
    }
  },[])
  

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
          
           {isCompleteScreen===false  && allTodos.map((item,index) =>{
              return(
                <div className='todo-list-item' key={index}>
                <div>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
             </div>  
             <div>
               <AiOutlineDelete className='icon'  onClick={()=>handleDeleteTodo(index)} title='deleted'/>
               <BsCheckLg className='check-icon' onClick={()=>handleComplete(index)}/> 
             </div>
           </div>
          
              )
           })}
      
      {isCompleteScreen===true && CompletedTodos.map((item,index) =>{
              return(
                <div className='todo-list-item' key={index}>
                <div>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <p><small>Completed on : {item.Completedon}</small></p>
             </div>  
             <div>
               <AiOutlineDelete className='icon'  onClick={()=>handleDeleteCompletedTodo (index)} title='deleted'/> 
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
