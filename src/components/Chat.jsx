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
    console.log(data.user.length);

    return (
        <div className="chat">
            <div className="chatInfo">
                <span>
                    {Object.keys(data.user).length > 0
                        ? data.user.displayName
                        : 'Choose a Friend wanna message'}
                </span>
                <div className="chatIcons">
                    {Object.keys(data.user).length > 0 && (
                        <>
                            <FontAwesomeIcon icon={faVideo} className="chatIcons-item" />
                            <FontAwesomeIcon
                                icon={faUserPlus}
                                className="chatIcons-item"
                            />
                            <FontAwesomeIcon
                                icon={faEllipsis}
                                className="chatIcons-item"
                            />
                        </>
                    )}
                </div>
            </div>
            <Messages />
            {Object.keys(data.user).length > 0 && <Input />}
        </div>
    );
};

export default Chat;
