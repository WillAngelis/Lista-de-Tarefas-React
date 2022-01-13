import styled from 'styled-components';

export const Container = styled.div`
    border: 2px solid #555;
    border-radius: 15px;
    margin: 20px 0;
    padding: 10px;
    display: flex;
    align-items: center;

      .add-task{
        margin-right: 5px;
      }

      input{
        border: 0;
        background: transparent;
        outline: 0;
        color: #fff;
        font-size: 18px;
        flex: 1;
      }
`;