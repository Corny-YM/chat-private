import { useContext, useState } from 'react';

// Firebase
import {
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    serverTimestamp,
    setDoc,
    updateDoc,
    where,
} from 'firebase/firestore';
import { db } from '../firebase';

import { AuthContext } from '../context/AuthContext';

const Search = () => {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState(null);
    const [err, setError] = useState(false);

    const { currentUser } = useContext(AuthContext);

    const handleSearch = async () => {
        // Create a reference to the users collection
        const usersRef = collection(db, 'users');
        // Create a query against the collection.
        const q = query(usersRef, where('displayName', '==', username));
        try {
            const querySnapshot = await getDocs(q);
            console.log(querySnapshot.docs.length);
            if (querySnapshot.docs.length === 0) return setError(true);
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, ' => ', doc.data());
                setUser(doc.data());
            });
        } catch (err) {
            setError(true);
        }
    };

    const handleKeyDown = (e) => {
        console.log(e.code);
        if (e.code === 'Enter') {
            setUser(null);
            setError(false);
            setUsername('');
            handleSearch();
        }
    };

    const handleSelect = async () => {
        // Check whether the group exists, if not => create
        const combinedId =
            currentUser.uid > user.id
                ? currentUser.uid + user.uid
                : user.uid + currentUser.uid;
        try {
            const res = await getDoc(doc(db, 'chats', combinedId));

            if (!res.exists()) {
                // Create a chat in chats collection
                await setDoc(doc(db, 'chats', combinedId), {
                    messages: [],
                });

                // Create user chats
                await updateDoc(doc(db, 'userChats', currentUser.uid), {
                    [combinedId + '.userInfo']: {
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                    },
                    [combinedId + '.date']: serverTimestamp(),
                });
                await updateDoc(doc(db, 'userChats', user.uid), {
                    [combinedId + '.userInfo']: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL,
                    },
                    [combinedId + '.date']: serverTimestamp(),
                });
            }
        } catch (err) {
            setError(true);
        }

        setUsername('');
        setUser(null);
    };

    return (
        <div className="search">
            <div className="searchForm">
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onKeyDown={handleKeyDown}
                    type="text"
                    placeholder="Find a user..."
                />
            </div>
            {/* Check found user */}
            {err && <div>User not found!</div>}
            {user && (
                <div className="userChat" onClick={handleSelect}>
                    <img src={user.photoURL} alt="" />
                    <div className="userChatInfo">
                        <span>{user.displayName}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Search;
