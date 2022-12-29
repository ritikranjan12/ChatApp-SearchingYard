import React from 'react';
import Styles from '../../../styles/Message.module.css'


const Message = ({ message: { text, user }, name }:any) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div className={Styles.messageContainer}>
          <p className={Styles.sentTextpr}>{trimmedName}</p>
          <div className={Styles.messageBoxblue}>
            <p className={Styles.messageTextWhite}>{text}</p>
          </div>
        </div>
        )
        : (
          <div className={Styles.messageContainerStart}>
            <div className={Styles.messageBoxlight}>
              <p className={Styles.messageTextDark}>{text}</p>
            </div>
            <p className={Styles.sentTextpl}>{user}</p>
          </div>
        )
  );
}

export default Message;