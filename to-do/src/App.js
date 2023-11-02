import React,{useState} from 'react';
import './App.css';


function App() {
  const [isCompleteScreen,setIsCompleteScreen] = useState(false);
  return (
    <div className="App">
      <div className='header'>
        <h1>TOGELDO</h1>
      </div>
      <div className='content'>
        <div className='todo-input'>
          <div className='todo-input-item'>
            <label>Title</label>
            <input type="text" placeholder='what is the title your to do'/>
          </div>
          <div className='todo-input-item'>
            <label>Description</label>
            <input type="text" placeholder='what is the description your to do'/>
          </div>
          <div className='todo-input-item'>
           <button type='button' className='add-btn'> Add</button>
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
          <div className='todo-list-item'>
            <h1>Task 1</h1>
            <p>description</p>  
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
