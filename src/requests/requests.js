
export async function getUserRequest(token) {   

    const response = await fetch("https://localhost:7208/auth/user", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(localStorage.getItem('jwt')),
      })

    let data = await response.json();
    return data;
}

export async function getChatsRequest(token)
{
    const response = await  fetch("https://localhost:7208/chats/chats", {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
        body: JSON.stringify(localStorage.getItem('jwt'))})

    let data = await response.json();
    return data;
}

export async function getMessagesRequest(idChat, limit, page)
{
    const response = await fetch("https://localhost:7208/messages/messages", {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify({idChat: idChat, limit: limit, page: page}),
          })

    let data = await response.json();
    return data;
}

export async function getSelectChatRequest(idChat, token)
{
    const response = await fetch("https://localhost:7208/chats/selectChat", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({idChat: idChat, token: token}),
      })

    let data = await response.json();
    return data;
}