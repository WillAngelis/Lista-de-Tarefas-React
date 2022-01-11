import styled from 'styled-components';

type ContainerProps = {
  check : boolean; 
}

export const Container = styled.div(({ check }: ContainerProps )=>(
  `
  display: flex;
  background-color: #20212C;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  input{
    width: 25px;
    height: 25px;
    margin-right: 15px;
  }
  
  label{
    color: #ccc;
    font-weight: bold;
    text-decoration: ${check ? 'line-through' : 'initial'};
  }
`
));