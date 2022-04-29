import React from 'react';
import style from './Message.module.scss';

export const Message = ({text}   ) => <div className={style.message}>{text}</div>;