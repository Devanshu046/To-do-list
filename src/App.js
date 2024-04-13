import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [listTodo , setListTodo] = useState([])
  let addList = (inputText) =>{
    if(inputText!=='')
    setListTodo([...listTodo ,inputText]);
  }
  const delteListItem = (key)=>{
    let newListTodo =[...listTodo]
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return (
    <div className="main-container">
      <div className="center-container">
         <TodoInput addList={addList}/>
         <h1 className="app-heading">TODO</h1>
         <hr />
         {listTodo.map((listItem,i)=>{
          return(
            <TodoList key={i} item={listItem} delteListItem={delteListItem} index={i}/>
          )
         })}
      </div>
    </div>
  );
}

export default App;
