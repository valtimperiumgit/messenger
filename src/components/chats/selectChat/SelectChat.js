import React from 'react';
import ChatProfile from './chatProfile/ChatProfile';
import '../selectChat/selectChat.css'
import ChatInput from './chatInput/ChatInput';
import { useState } from 'react';
import Message from '../selectChat/message/Message'
import { useEffect } from 'react';
import { useRef } from 'react';

const SelectChat = ({ changeChat,selectChat, chatMessages, user, sendMessage}) => {

    const lastMessageRef = useRef();
    
    let messages;
    if(selectChat == null){
        messages = null;
    }
    else{
        messages = chatMessages;
    }



    if(selectChat==null){
        return (
            <div className='selectChat_notSelect'>
                <img className='selectChat_notSelect_img' src="login-img/icons8-чат-100.png" alt="" width={60} height={60} />
                <div className='selectChat_notSelect_text'>
                    Выберите чат для общения!
                </div>
                
            </div>)
    }

    // function sendMessageThis(){
    //     changeChat();
    //     lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    // }

    return (
        <div className='selectChat_select'>
            <ChatProfile chatUser={selectChat.chatUser}/>
            <div className='messages'>
            {messages.map(({id, idClient, datetime, body}) => <Message 
            user={user}
            chatUser={selectChat.chatUser}
            idChatUser={idClient} 
            dateTime={datetime} 
            body={body}
            key={id}/>)}
            </div>

            <div className='lastMRef' ref={lastMessageRef}>

            </div>
            <ChatInput idChat={selectChat.chat.idChat} sendMessage={sendMessage}/>
        </div>
    );
};

export default SelectChat;