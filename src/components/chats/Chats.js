import React, { useEffect, useState } from 'react';
import '../chats/chats.css'
import UserProfile from './userProfile/UserProfile';
import UserChats from './userChats/UserChats';
import SelectChat from './selectChat/SelectChat';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { useRef } from 'react';

const Chats = () => {



    const [connection, setConnection] = useState();

    const [user, setUser] = useState({id:1, name: 'Руслан', surname: 'Васильев', teg: '#valtimperium', phone: '380664680440', description: 'something'})
    const [userChats, setUserChats] = useState([]);
    const [selectChat, setSelectChat] = useState();
    const [selectChatMessages, setSelectChatMessages] = useState([])

    const lastMessageRef = useRef();
   
    console.log(lastMessageRef);
    // console.log(selectChat);
    useEffect(()=>{

        fetch("https://localhost:7208/api/user", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(localStorage.getItem('jwt')),
          })
          .then(response => response.json())
          .then(data => setUser(data));

          fetch("https://localhost:7208/api/chats", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(localStorage.getItem('jwt')),
        })
        .then(response => response.json())
        .then(data => setUserChats(data))
        })

    const signalrConnectChat = async (chat) => {
        if(connection != null){
          connection.close();
        }
        const connect = new HubConnectionBuilder()
        .withUrl('https://localhost:7208/chat')
        .configureLogging(LogLevel.Information)
        .build();

        connect.on('ReceiveMessage', (model) =>
         {
             console.log("Коннект с чатом");
         })

         let idChat = chat.idChat;
         let token = localStorage.getItem('jwt');
         await connect.start();
         await connect.invoke('SelectChat', idChat, token)
         setConnection(connect);
         
    }

    const sendMessage = async (message, idChat) => {
        
        connection.invoke('SendMessage', message, idChat, localStorage.getItem('jwt'));
        connection.on('ReceiveMessages', (message) =>
        {
            if(message != null){
                
                setSelectChatMessages([...selectChatMessages, message]);
                console.log("УВЫЫЫЫ");
            }

            else{
                return;
            }
        });

       
        
    }


   

    const changeChat = async (chat) => {
       
        fetch("https://localhost:7208/api/selectChat", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({idChat: chat.idChat, token: localStorage.getItem('jwt')}),
          })
          .then(response => response.json())
          .then(data => {setSelectChat(data); setSelectChatMessages(data.chatMesseges);})
         
          

         signalrConnectChat(chat);
    } 

    
    // right_block.element.scrollIntoView(false);

    return (
        <div className='body_chats'>
            <div className='left_block'>
                <UserProfile user={user}/>
                <UserChats chats={userChats} changeChat={changeChat}/>
            </div>

            <div className='right_block' id="right_block">
                <SelectChat changeChat={changeChat} lastMessageRef={lastMessageRef} selectChat={selectChat} chatMessages={selectChatMessages} sendMessage={sendMessage} user={user.result}/>
            </div>
        </div>
    );
};

export default Chats;