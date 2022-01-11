import { Container } from './styles';
import { Task } from '../../types/Task';
import { useState } from 'react';

type Props = {
  item: Task
}

export const Tasklist = ({item}: Props) =>{
  const [isChecked, setIsChecked] = useState(item.checked);
  
  return(
    <Container check = {isChecked}>
      <input 
      type="checkbox" 
      checked={isChecked}
      onChange={ e => setIsChecked(e.target.checked)}
      />
      <label>{item.task}</label>
    </Container>
  )
}