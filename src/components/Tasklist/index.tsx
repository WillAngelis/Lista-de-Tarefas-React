import { Container } from './styles';
import { Task } from '../../types/Task';

type Props = {
  item: Task
}

export const Tasklist = ({item}: Props) =>{
  return(
    <Container>
      <input type="checkbox" />
      <label>{item.task}</label>
    </Container>
  )
}