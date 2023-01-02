// React
import React, { useContext } from 'react';

// Font awesome
import { faEllipsis, faUserPlus, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Input from './Input';
import Messages from './Messages';
import { ChatContext } from '../context/ChatContext';

const Chat = () => {
    const { data } = useContext(ChatContext);
    console.log(data);

    return (
        <div className="chat">
            <div className="chatInfo">
                <span>{data.user?.displayName}</span>
                <div className="chatIcons">
                    <FontAwesomeIcon icon={faVideo} className="chatIcons-item" />
                    <FontAwesomeIcon icon={faUserPlus} className="chatIcons-item" />
                    <FontAwesomeIcon icon={faEllipsis} className="chatIcons-item" />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    );
};

export default Chat;
