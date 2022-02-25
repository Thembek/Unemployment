var script = {
    "hello":"Hi, how are you?",
    "Hello":"Hi, how are you?",
    "hi":"Hi, how are you?",
    "I'm good":"Well, that's great to hear glad.Any questions about job vacancies?",
    "Im good":"Well, that's great to hear glad.Any questions about job vacancies?",
    "im good":"Well, that's great to hear glad.Any questions about job vacancies?",
    "good":"Well, that's good:)",
    "I'm alright": "That's nice, as long as we're all pushing.",
    "great":"I like the anthusiasm ;)",
    "what is this about":"This website help indigenous South African citizens, and legal citizens too, find work places.",
    "I don't understand":"This website help indigenous South African citizens, and legal citizens too, find work places.",
    "help": "This website help indigenous South African citizens, and legal citizens too, find work places.",
    "Jobs?": "This website help indigenous South African citizens, and legal citizens too, find work places.",
    "jobs?": "This website help indigenous South African citizens, and legal citizens too, find work places.",
    "?": "This website help indigenous South African citizens, and legal citizens too, find work places.",
    "Where can I find them": "Check out the Vacancies section.",
    "jobs":"Scroll, or, click our Job Interest section. There you'll find our trust companies or campaigns with succeful employment rate.",
    "job":"Scroll, or, click our Job Interest section. There you'll find our trust companies or campaigns with succeful employment rate."
}

function begin() {
    let res_elm = document.createElement("div");
    res_elm.innerHTML="Hello! My name is ChatBot, How may I be of your assistance?";
    res_elm.setAttribute("class","left");
 
    document.getElementById('msg').appendChild(res_elm);
}

function talk(){
    let msg_div = document.createElement("div");
    var user = document.getElementById('msg_send').value;
    msg_div.innerHTML = `${user}`;
    msg_div.setAttribute("class","right");
    document.getElementById('msg').innerHTML +="<br>";
    document.getElementById('msg').appendChild(msg_div);
    if(user in script){
        let scrpt = document.createElement("div");
        document.getElementById('msg').innerHTML += script[user]+"<br>";
    }
}

talk();