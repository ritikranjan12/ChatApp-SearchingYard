import React from 'react';
import Image from 'next/image'
import onlineIcon from '../icons/onlineIcon.png';
import Styles from "../styles/TextContainer.module.css"
import style from "../styles/InfoBar.module.css"

const TextContainer = ({ users }:any) => (
  <div className={Styles.textContainer}>
    <div>
      <h1>Welcome to Chat App <span role="img" aria-label="emoji">💬</span></h1>
      <h2>Created with Next.js, Express, Node and Socket.IO <span role="img" aria-label="emoji">❤️</span></h2>
      <h2>Chat with your friends now! <span role="img" aria-label="emoji">⬅️</span></h2>
    </div>
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className={Styles.activeContainer}>
              <h2>
                {users.map(({name}:any) => (
                  <div key={name} className={Styles.activeItem}>
                    {name}
                    <Image width={20} height={10} className={style.onlineIcon} src={onlineIcon} alt="online icon" />
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;