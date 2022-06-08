import React from 'react';
import './chatProfile.css'

const ChatProfile = ({chatUser, setModalUser, setActiveModal}) => {
    
    return (
        <div className='chatProfile' onClick={() => {setModalUser(chatUser.client); setActiveModal(true)}}>
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