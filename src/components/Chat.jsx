import { faEllipsis, faUserPlus, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Input from './Input';
import Messages from './Messages';

const Chat = () => {
    return (
        <div className="chat">
            <div className="chatInfo">
                <span>Ryan</span>
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
