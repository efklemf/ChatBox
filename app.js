function talk(){
    var know = {
    "Who are you" : "Hello, Codewith_random here ",
    "How are you" : "Good :)",
    "What can i do for you" : "Please Give us A Follow & Like.",
    "Your followers" : "I have my family of 5000 members, i don't have follower ,have supportive Famiy ",
    "ok" : "Thank You So Much ",
    "what is your name":"My Name is Annu The Gretest",
    "who is developed you":"Chandresh Ji Developed Me",
    "what is your father name":"Chandresh and his team Is My Everything",
    "who is jyoti":"Jyoti is Best friend of Chandresh And Annu",
    "who is annu":"Annu is Best friend of Chandresh",
    "who is poonam":"Poonam is not a Loyal",
    "who is sweta":"Sweta is so Chalak!",
    "who is yogesh":"Yogesh passes a lot of gas Everday so Bad..",
    "Bye" : "Okay! Will meet soon.."
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
    }