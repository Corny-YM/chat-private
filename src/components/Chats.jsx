import React from 'react';

import userAvatar from '../assets/imgs/LacLacAvartar.jpg';

const Chats = () => {
    return (
        <div className="chats">
            {/* item chat user */}
            <div className="userChat">
                <img src={userAvatar} alt="" />
                <div className="userChatInfo">
                    <span>Ryan</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className="userChat">
                <img src={userAvatar} alt="" />
                <div className="userChatInfo">
                    <span>Ryan</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className="userChat">
                <img src={userAvatar} alt="" />
                <div className="userChatInfo">
                    <span>Ryan</span>
                    <p>Hello</p>
                </div>
            </div>
        </div>
    );
};

export default Chats;
