import React from 'react';
import '../message/message.css'

const Message = ({user, viewed ,chatUser, idChatUser, dateTime, body}) => {

    let time = dateTime.slice(11, 16);
   



if((viewed === true && idChatUser === user.id))
{
    if(idChatUser === user.id){
        return (
            <div className="message">
                <div className='userMessage'>
                <div className='message_name'>
                Вы
                </div>
                <div className='message_content'>
                    <div className='message_body'>
                    {body} 
                    </div>
                
                <div className='message_datetime'>
                    {time}
                    <img className='message_viewed' src="chats-img/openEye.png" alt=""/>
                </div>

                
                </div>
            </div>
            </div>
            
        );
    }
    
    else
    {
        return (
            <div className="message">
                <div className='not_userMessage'>
                <div className="message_name">
                {chatUser.client.name}
                </div>
                <div className='message_content'>
                    <div className='message_body'>
                    {body} 
                    </div>
                
                <div className='message_datetime'>
                    {time} 
                    <img className='message_viewed' src="chats-img/openEye.png" alt=""/>
                </div>

                
                </div>
                
            </div>
            </div>
            
        );
    }
}

if(viewed === false && idChatUser === user.id){
    if(idChatUser === user.id){
        return (
            <div className="message">
                <div className='userMessage'>
                <div className='message_name'>
                Вы
                </div>
                <div className='message_content'>
                    <div className='message_body'>
                    {body} 
                    </div>
                
                <div className='message_datetime'>
                    {time}
                    <img className='message_viewed' src="chats-img/closeEye.png" alt=""/>
                </div>

                
                </div>
            </div>
            </div>
            
        );
    }
    
    else
    {
        return (
            <div className="message">
                <div className='not_userMessage'>
                <div className="message_name">
                {chatUser.client.name}
                </div>
                <div className='message_content'>
                    <div className='message_body'>
                    {body} 
                    </div>
                
                <div className='message_datetime'>
                    {time} 
                    <img className='message_viewed' src="chats-img/closeEye.png" alt=""/>
                </div>

                
                </div>
                
            </div>
            </div>
            
        );
    }
}

else{
    if(idChatUser === user.id){
        return (
            <div className="message">
                <div className='userMessage'>
                <div className='message_name'>
                Вы
                </div>
                <div className='message_content'>
                    <div className='message_body'>
                    {body} 
                    </div>
                
                <div className='message_datetime'>
                    {time}
                    <div>
                        f
                    </div>
                </div>

                
                </div>
            </div>
            </div>
            
        );
    }
    
    else
    {
        return (
            <div className="message">
                <div className='not_userMessage'>
                <div className="message_name">
                {chatUser.client.name}
                </div>
                <div className='message_content'>
                    <div className='message_body'>
                    {body} 
                    </div>
                
                <div className='message_datetime'>
                    {time} 
                    <div>
                        f
                    </div>
                </div>

                
                </div>
                
            </div>
            </div>
            
        );
    }
}
   
};

export default Message;