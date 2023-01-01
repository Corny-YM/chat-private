import React from 'react';

import userAvatar from '../assets/imgs/LacLacAvartar.jpg';

const Search = () => {
    return (
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="Find a user..." />
            </div>
            <div className="userChat">
                <img src={userAvatar} alt="" />
                <div className="userChatInfo">
                    <span>Ryan</span>
                </div>
            </div>
        </div>
    );
};

export default Search;
