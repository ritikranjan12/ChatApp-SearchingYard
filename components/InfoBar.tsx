import React from 'react';
import Image from 'next/image'
import onlineIcon from '../icons/onlineIcon.png';
import closeIcon from '../icons/closeIcon.png';
import Styles from "../styles/InfoBar.module.css"


const InfoBar = ({ room }:any) => (
  <div className={Styles.infoBar}>
    <div className={Styles.leftInnerContainer}>
      <Image className={Styles.onlineIcon} src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
    </div>
    <div className={Styles.rightInnerContainer}>
      <a href="/"><Image src={closeIcon} alt="close icon" /></a>
    </div>
  </div>
);

export default InfoBar;