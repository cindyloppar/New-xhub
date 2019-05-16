import React, { useEffect, useState } from "react";
import openSocket from "socket.io-client";
import Chance from "chance";
import {
  ChatWrapper,
  ChatContainer,
  UsersWrapper,
  Send,
  SendSection,
  Bubble
} from "../components/chat-styles";
import axios from "axios";
import BottomNav from "./bottom-nav";
import Nav from "./nav";
import { connect } from "react-redux";

const Chat = () => {
  const [chats, addChats] = useState([{ userName: "", input: "" }]);
  const [userName, addUserName] = useState("");
  const [user, addUser] = useState("");
  const [input, addInput] = useState("");

  function sendMessage() {
    socket.emit("chat message", { userName, input });
  }

  const socket = openSocket("http://localhost:3001");

  useEffect(() => {});

  socket.on("connection", function(socket) {
    console.log("connection", socket);
  });

  socket.on("chat message", function(msg) {
    addChats(msg);
  });

  return (
    <div>
      <ChatContainer>
        <UsersWrapper>users</UsersWrapper>
        <input
          type="text"
          onChange={event => {
            addUserName(event.target.value);
          }}
        />
        <ChatWrapper>
          <Bubble>
            {chats.map(chat => (
              <p>
                <li
                  style={{
                    backgroundColor:
                      chat.userName === userName ? "blue" : "white"
                  }}
                >
                  {chat.input}
                </li>
              </p>
            ))}
          </Bubble>

          <SendSection className="send">
            <input type="text" onChange={e => addInput(e.target.value)} />
            <Send onClick={() => sendMessage()}> Send </Send>
          </SendSection>
        </ChatWrapper>
      </ChatContainer>
      <BottomNav />
    </div>
  );
};

export default Chat;
