import React, { useEffect, useState } from 'react';
import '../chats/chats.css'
import UserProfile from './userProfile/UserProfile';
import UserChats from './userChats/UserChats';
import SelectChat from './selectChat/SelectChat';
import { signalrConnectChat} from '../../hubs/hub';
import { useRef } from 'react';
import Modal from '../modals/Modal';
import {getUserRequest, getChatsRequest, getMessagesRequest, getSelectChatRequest} from '../../requests/requests'

const Chats = () => {


//------ Connect with server by signalR---------
    const [connection, setConnection] = useState();

//------ useState variables
    const [user, setUser] = useState({id:1, name: 'Русланg', surname: 'Васильев', teg: '#valtimperium', phone: '380664680440', description: 'something'})
    const [userChats, setUserChats] = useState([]);
    const [selectChat, setSelectChat] = useState();
    const [selectChatMessages, setSelectChatMessages] = useState([])
    const [page, setPage] = useState(2);
    const [activeModal, setActiveModal] = useState(false)
    const [modalUser, setModalUser] = useState();

  
//----- Refs on elements
//console.log(userChats)

    const lastMessageRef = useRef();
    const rightBlock = useRef();

    function scrollToMyRef()
    {  
        lastMessageRef.current.scrollIntoView({ behavior: "smooth" })};

    useEffect(()=>{

        getUserRequest(localStorage.getItem('jwt'))
          .then(data => setUser(data));

        getChatsRequest(localStorage.getItem('jwt'))
          .then(data => setUserChats(data));

        })

   

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
        }, []);

       
        
    }

    const changeChat = async (chat) => {
       

          let neededChat = userChats.find(c => c.chat.idChat === chat.idChat)
          
          setSelectChatMessages(neededChat.chatMessages);
          setSelectChat(neededChat);

        //   getMessagesRequest(chat.idChat, 15, 1)
        //   .then(data => setSelectChatMessages(data))
        
        //   getSelectChatRequest(chat.idChat, localStorage.getItem('jwt'))
        //   .then(data => setSelectChat(data));

         signalrConnectChat(connection, chat)
         .then(data => setConnection(data));
         setPage(2);
         setTimeout(scrollToMyRef(), 2000);
    } 

    function scrollHandler(e){
        
        if(rightBlock.current.scrollTop < 100){
            setPage(page => page + 1);
          getMessagesRequest(selectChat.chat.idChat, 15, parseInt(page))
          .then(data => {
              if(data.length !== 0)
                {
                
                let newMas = [];
                newMas.push(...data);
                newMas.push(...selectChatMessages)
                newMas.sort(function(mes, mes2) {
                    if(mes.id > mes2.id)
                    return 1;
                    else{
                        return -1;
                    }
                })
                setSelectChatMessages(newMas);
                }
              else{
                  return;
              }
    })
}} 
        
    return (
        <div className='body_chats'>
            <Modal active={activeModal} setActive={setActiveModal} modalUser={modalUser} user={user}> 
                
             </Modal>
            <div className='left_block'>
                <UserProfile user={user} setActiveModal={setActiveModal} setModalUser={setModalUser}/>
                <UserChats chats={userChats} changeChat={changeChat}/>
            </div>

            <div className='right_block' ref={rightBlock} onScroll={scrollHandler} id="right_block">
                <SelectChat changeChat={changeChat} 
                lastMessageRef={lastMessageRef} 
                selectChat={selectChat} 
                chatMessages={selectChatMessages}
                sendMessage={sendMessage} 
                 user={user}
                 setModalUser={setModalUser}
                 setActiveModal={setActiveModal}/>
                 
                <div ref={lastMessageRef} className="lastMessage"></div>
            </div>
            
        </div>
    );
};

export default Chats;