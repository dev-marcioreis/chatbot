const sendChatBtn = document.querySelector('.send-btn')
const chatInput = document.querySelector('.chat__input-area')
const chatBox = document.querySelector('.chatbox')

let userMessege

const API_KEY = `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`

const createChat = (messege, className) => {

    // Cria um elemento <LI> de chat com messegem e classname passados
    const chatLi = document.createElement('li')
    chatLi.classList.add('chat', className)
    let chatContent = className === 'outgoing' ? `<p>${messege}</p>` : `<span class="chat-icon"><i class="uil uil-robot"></i></span><p>${messege}</p>`
    chatLi.innerHTML = chatContent

    return chatLi

}

const generateResponse = () => {

    const API_URL = `https://api.openai.com/v1/chat/completions`

    const requestOptions = {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: 'user', content: userMessege}]
        })
    }

    // Enviar solicitação POST para API, obter resposta
    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        console.log(data)
    }).catch(error => {
        console.log(error)
    })

}

const handleChat = () => {

    userMessege = chatInput.value.trim()
    console.log(userMessege)

    if(!userMessege) return

    // Add a mensagem do usuário ao chatbox
    chatBox.appendChild(createChat(userMessege, 'outgoing')) 

    // Exibir mensagem "Pensando..." enquanto espera pela resposta
    setTimeout(() => {
        chatBox.appendChild(createChat("Pensando...", 'incoming')) 
        generateResponse()
    }, 600)
}

sendChatBtn.addEventListener('click', handleChat)