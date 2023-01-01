import { faImage, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Input = () => {
    return (
        <div className="input">
            <input type="text" placeholder="Type something..." />

            <div className="send">
                <FontAwesomeIcon icon={faPaperclip} className="send-icon" />
                <input type="file" style={{ display: 'none' }} id="file" />
                <label htmlFor="file">
                    <FontAwesomeIcon icon={faImage} className="send-icon" />
                </label>
                <button>Send</button>
            </div>
        </div>
    );
};

export default Input;
