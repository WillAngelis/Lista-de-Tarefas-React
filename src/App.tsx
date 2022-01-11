import { Container,Main,Header } from './App.styles';
import { useState } from 'react';
import {Task} from './types/Task'

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {id : 1,task: 'Terminar Projeto',checked : false},
  ]);
  
  return(
    <Container>
      <Main>
        <Header>Lista de Tarefas</Header>
        
      </Main>
    </Container>
  );
}
export default App