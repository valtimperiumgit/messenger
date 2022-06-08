import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

export const signalrConnectChat = async (connection, chat) => {
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

     return connect;  
}

export const sendMessage = async (connection, message, idChat) => {
    connection.invoke('SendMessage', message, idChat, localStorage.getItem('jwt'));
    connection.on('ReceiveMessages', (message) => {
        return message;
    }) 
    
}