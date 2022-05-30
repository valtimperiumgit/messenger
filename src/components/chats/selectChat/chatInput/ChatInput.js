import React, { useState } from 'react';
import '../chatInput/chatInput.css'

const ChatInput = ({idChat, sendMessage}) => {

    const [message, setMesssage] = useState();
    
    return ( 

        <div className='chatInput'>
            <input onChange={(e) => {setMesssage(e.target.value)}} value={message} className='chatInput_input' placeholder='Напишите сообщение...' type="text" />
            <div onClick={() => {sendMessage(message, idChat); setMesssage('')}} className='div_img'>
                <img src="chats-img/icons8-отправлено-96.png" alt="" />
            </div>
        </div>
    );
};

export default ChatInput;