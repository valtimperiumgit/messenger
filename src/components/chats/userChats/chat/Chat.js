import React from 'react';
import '../chat/chat.css'

const Chat = ({ chat, onClick, chatUser, lastMessage}) => {


    
    if(lastMessage === null) {
        return (
            <div className='chat' onClick={() => {onClick(chat)}}>
                <div className='chat_img'>
                    <img src="chats-img/photo_2022-02-22_11-54-04 (2).jpg" alt="" />
                </div>
                <div className='chat_text'>
                    {chatUser.client.name}
                    <div className='chat_text_lastMessage'>
                         
                    </div>
                </div>
            </div>
        );
    }

    else{
        let message = lastMessage.body;
        if(lastMessage.body.length > 30){
            message = message.slice(0, 30);
            message += '...';
        }
        return (
            <div className='chat' onClick={() => {onClick(chat)}}>
                <div className='chat_img'>
                    <img src="chats-img/photo_2022-02-22_11-54-04 (2).jpg" alt="" />
                </div>
                <div className='chat_text'>
                    {chatUser.client.name}
                    <div className='chat_text_lastMessage'>
                         {message}
                    </div>
                </div>
            </div>
        );
    }

};

export default Chat;