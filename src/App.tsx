import { Container,Main,Header } from './App.styles';
import { useState } from 'react';
import {Task} from './types/Task'
import { Tasklist } from './components/Tasklist';
import { AddTaskBox } from './components/AddTaskBox';

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  
  const handleAddTask = (taskName: string) =>{
    let newTasks = [...tasks];
      newTasks.push({
      id: tasks.length + 1,
      task : taskName,
      checked : false
    });
    setTasks(newTasks)
  }
  return(
    <Container>
      <Main>
        <Header>Lista de Tarefas</Header>
        <AddTaskBox onEnter={handleAddTask}/>

          {tasks.map((item,index)=>(
        <Tasklist key={index} item={item}/>))}
      </Main>
    </Container>
  )}
export default App