import React, { useState, useLayoutEffect, useEffect } from "react";
import io from "socket.io-client";
import { useRouter } from 'next/router'
import TextContainer from '../components/TextContainer';
import Messages from '../components//Messages/Messages';
import InfoBar from '../components/InfoBar';
import Input from '../components/Input';
import Styles from '../styles/Chat.module.css'

const ENDPOINT = 'https://chatappserver-l6k9.onrender.com/'

let socket: any;


const Chat = () => {
  const router = useRouter()
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<any>([]);
  const [name, setName] = useState<any>(router.query.name);
  const [room, setRoom] = useState<any>(router.query.room);
  const [NewMessage, setNewMessage] = useState<any>([])

  useLayoutEffect(() => {
    socket = io(ENDPOINT, { transports: ['websocket'] });

    socket.emit('join', { name, room }, (error: any) => {
      if (error) {
        alert(error);
      }
    });

    socket.on('message', (message: any) => {
      setMessages((messages: any) => [...messages, message]);
    });

    socket.on("roomData", ({ users }: any) => {
      setUsers(users);
    });

  });


  const sendMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  useEffect(() => {

    const prods = messages.filter((value: any, index: any, array: any) => index == array.findIndex((item: any) => item.text == value.text && item.user == value.user));

    setNewMessage(prods);

  }, [messages])


  return (
    <div className={Styles.outerContainer}>
      <div className={Styles.container}>
        <InfoBar room={room} />
        <Messages messages={NewMessage} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users} />
    </div>
  );
}

export default Chat;
