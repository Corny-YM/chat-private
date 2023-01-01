import React from 'react';

import userAvatar from '../assets/imgs/LacLacAvartar.jpg';

const Message = () => {
    return (
        <div className="message owner">
            <div className="messageInfo">
                <img src={userAvatar} alt="" />
                <span>Just now</span>
            </div>
            <div className="messageContent">
                <p>Hello</p>
                <img src={userAvatar} alt="" />
            </div>
        </div>
    );
};

export default Message;
