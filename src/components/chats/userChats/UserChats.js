import React from 'react';
import '../userChats/userChats.css'
import Chat from './chat/Chat';

const UserChats = ({chats, changeChat}) => {

    
    return (
        <div className='user_chats'>
            <div className='user_chats_head'>
                <div>
                    Чаты
                </div>
            </div>

            <div className='user_chats_container'>
                {chats.map(({chat, chatUser, lastMessage}) => <Chat  
                chat={chat} 
                onClick={changeChat}
                chatUser={chatUser}
                lastMessage ={lastMessage} 
                key={chat.idChat}/>
                )}
            </div>
        </div>
    )
};

export default UserChats;