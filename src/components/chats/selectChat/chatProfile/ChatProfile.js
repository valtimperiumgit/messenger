import React from 'react';
import './chatProfile.css'

const ChatProfile = ({chatUser}) => {
    
    return (
        <div className='chatProfile'>
            <div className='chat_profile_img'>
                <img src="login-img/icons8-чат-100.png" alt="" />
            </div>
            <div className='chat_profile_text'>
                {chatUser.client.name}
            </div>
        </div>
    );
};

export default ChatProfile;