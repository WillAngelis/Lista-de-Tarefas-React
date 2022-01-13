import { Container } from "./styles";
import { IoIosAdd } from "react-icons/io";

export const AddTaskBox = () =>{
  return(
    <Container>
        <div className='add-task'> <IoIosAdd style={iconStyles}/> </div> 
    </Container>
  );
}