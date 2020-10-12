import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Message from "./components/Message/index";
import MessageForm from "./components/MessageForm/index";
import db from "./config";
export default function App() {
  const [newmessage, setNewMessage] = useState(" ");
  const [messages, setMessages] = useState([]);
  useEffect(()=>{
    db.ref("/messages").on("value",(snapshot)=>{
      const fbMessages = snapshot.val();
   const convetedMessages = Object.entries(fbMessages||{})
   .map(([id,message])=>({
     ...message,id
   }));
   setMessages(convetedMessages)
   console.log(convetedMessages)

    })
  },[])
  
  const handleSubmit = (event) => {
    const value = event.target.value;
    event.preventDefault();
    const messageObj = {
      user: "Oleksii",
      content: newmessage,
      datetime: Date.now(),
    };
   if(newmessage)
   {
    db.ref("/messages").push(messageObj);
   }
   
    setNewMessage("");
  };

  return (
    <div className="App">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      <MessageForm
        message={newmessage}
        handleSubmit={handleSubmit}
        handleContentChange={setNewMessage}
      />
    </div>
  );
}
