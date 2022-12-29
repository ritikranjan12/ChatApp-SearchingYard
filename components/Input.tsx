import React from 'react';
import Styles from '../styles/Input.module.css'


const Input = ({ setMessage, sendMessage, message }:any) => (
  <form className={Styles.form}>
    <input
      className={Styles.input}
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyUp={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className={Styles.sendButton} onClick={e => sendMessage(e)}>Send</button>
  </form>
)

export default Input;