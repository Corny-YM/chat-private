import { useContext, useEffect, useState } from 'react';

// Firebase
import { doc, onSnapshot } from 'firebase/firestore';

import userAvatar from '../assets/imgs/LacLacAvartar.jpg';
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';

const Chats = () => {
    const [chats, setChats] = useState([]);

    const { currentUser } = useContext(AuthContext);

    // Listening the Collections
    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, 'userChats', currentUser.uid), (doc) => {
                console.log('Current data: ', doc.data());
                setChats(doc.data());
            });

            // clean up
            return () => {
                unsub();
            };
        };

        currentUser.uid && getChats();
    }, [currentUser.uid]);

    console.log(Object.entries(chats));

    return (
        <div className="chats">
            {/* item chat user */}
            {Object.entries(chats)?.map((chat) => (
                <div className="userChat" key={chat[0]}>
                    <img src={chat[1].userInfo.photoURL} alt="" />
                    <div className="userChatInfo">
                        <span>{chat[1].userInfo.displayName}</span>
                        <p>{chat[1].userInfo.lastMessage?.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Chats;
