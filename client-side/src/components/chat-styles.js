import styled from "styled-components";

export const ChatContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-row:1fr 1fr 9fr;
  height: 43vh;
`;

export const UsersWrapper = styled.div`
  //   display: grid;
  border: 1px solid black;
`;

export const SendSection = styled.div`
  //   display:grid;
  //   just
`;

export const Send = styled.button`
  //   display: grid;
`;

export const Bubble = styled.div`
overflow:hidden;
  display: grid;
  justify-content: center;
  align-content:start;
  margin-top:1rem;
  p {
    background-color: #f8f8f8;
    border: 1px solid #c8c8c8;
    font-size: 1.2rem;
    border-radius: 5px;
    width: 20rem;
    text-align: center;
    padding: 0.5rem;
    
      li{
        list-style:none;
      }
  }
`;

export const ChatWrapper = styled.div`
overflow:hidden;
  display: grid;
  border: 1px solid black;
  grid-template-rows: 7fr 1fr;
  grid-template-columns: 1fr;
  .send {
    justifly-self: end;
  }
`;
