let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

let intro = ["Bravo tu a gnagner! clique sur une petit bouton bleu"];
// let help = ["How may i assist you?","How can i help you?","What i can do for you?"];
// let greetings = ["i am good you little piece of love", "i am fine, what about you", "don't want to talk", "i am good"];
// let hobbies = ["Veux jouer avec moi?", "Viens jouer avec"];
// let pizzas = ["which type of pizza do you like?", "i can make a pizza for you", "i would love to make a pizza for you", "would you like cheese pizza?"];
// let thank = ["Most welcome","Not an issue","Its my pleasure","Mention not"];
// let closing = ['Ok bye-bye','As you wish, bye take-care','Bye-bye, see you soon..']

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function showusermsg(usermsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg){
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "holala tu n'a pas trouver reprend !";
    if(message.includes('mariage')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
}

recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
}
recognition.onend=function(){
    mic.style.background="#ff3b3b";
}
mic.addEventListener("click", function(){
    mic.style.background='#39c81f';
    recognition.start();
    console.log("Activated");
})
