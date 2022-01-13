import { Container } from "./styles";
import { IoIosAdd } from "react-icons/io";
import { useState, KeyboardEvent } from 'react';

type Props = {
  onEnter : (taskName:string) => void
}

let iconStyles = {color: '#fff',fontSize:'32px'}

export const AddTaskBox = ({onEnter}: Props) =>{

  const [inputText, setInputText] =  useState('');
  
  const handleKeyUp = (e:KeyboardEvent) =>{
    if(e.code === 'Enter' && inputText !== ''){
        onEnter(inputText);
        setInputText('')
    }
  }
   return(
    <Container>
        <div className='add-task'> <IoIosAdd style={iconStyles}/> </div> 
        <input 
          type="text"
          placeholder='Adicione uma tarefa'
          value ={inputText}
          onChange = {e => setInputText(e.target.value)}
          onKeyUp  = {handleKeyUp}
          />
    </Container>
  );
}