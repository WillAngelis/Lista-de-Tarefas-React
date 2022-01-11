import { Container,Main,Header } from './App.styles';
import { useState } from 'react';
import {Task} from './types/Task'
import { Tasklist } from './components/Tasklist';

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {id : 1,task: 'Terminar Projeto',checked : false},
  ]);
  
  return(
    <Container>
      <Main>
        <Header>Lista de Tarefas</Header>
        {tasks.map((item,index)=>(
          <Tasklist key={index} item={item}/>
        ))}
      </Main>
    </Container>
  );
}
export default App