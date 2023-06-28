import React from 'react';
import './App.css';
import ToDoInput from './components/ToDoInput';
import ToDoItem from '@/src/components/ToDo/todoitem';

function App() {
  return (
    <div className="todolist">
      <ToDoInput />
      <ToDoItem content={'hello world'} />
    </div>
  );
}

export default App;
