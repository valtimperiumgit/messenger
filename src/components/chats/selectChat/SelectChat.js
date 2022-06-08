import React from 'react';
import ChatProfile from './chatProfile/ChatProfile';
import '../selectChat/selectChat.css'
import ChatInput from './chatInput/ChatInput';
import Message from '../selectChat/message/Message'
import { useEffect } from 'react';
import { useRef } from 'react';


const SelectChat = ({changeChat, selectChat, chatMessages, user, sendMessage, setModalUser, setActiveModal}) => {


    
    let messagesRef = useRef(null);


    useEffect(() => {
        if(selectChat != null){
            let idChat = selectChat.chat.idChat;
            
            fetch("https://localhost:7208/api/readMessages", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({idChat: idChat, token: localStorage.getItem("jwt")}),
              })
             
        }
    });

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

  
    return (
        <div className='selectChat_select'>
            <ChatProfile chatUser={selectChat.chatUser} setModalUser={setModalUser} setActiveModal={setActiveModal}/>
            <div className='messages' ref={messagesRef}>
            {messages.map(({id, idClient, datetime, body, viewed}) => <Message 
            user={user}
            chatUser={selectChat.chatUser}
            idChatUser={idClient} 
            dateTime={datetime} 
            body={body}
            key={id}
            viewed={viewed}
            />)}
            </div>

            <div className='lastMRef' ref={lastMessageRef}>

            </div>
            <ChatInput idChat={selectChat.chat.idChat} sendMessage={sendMessage}/>
        </div>
    );
};

export default SelectChat;