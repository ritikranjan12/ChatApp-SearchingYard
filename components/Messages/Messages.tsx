import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message/Message';
import Styles from "../../styles/Message.module.css"

const Messages = ({ messages, name }:any) => (

  

  <ScrollToBottom className={Styles.messages}>
    {messages.map((message:any, i:any) => <div key={message.text}><Message message={message} name={name}/></div>)}
  </ScrollToBottom>
);

export default Messages;