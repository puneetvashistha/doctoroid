const startBtn = document.querySelector("#start-btn");
const speakingGif = document.getElementById("speaking-gif");
const recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 2;
const synth = window.speechSynthesis;

startBtn.addEventListener("click", () => {
    var greeting = new SpeechSynthesisUtterance("Hello, I am an AI Ayurvedic Doctor. Please tell me how may I help you with your problem");
    window.speechSynthesis.speak(greeting);
    setTimeout(function() {
        recognition.start();
      }, 6800);
});

let utter = new SpeechSynthesisUtterance("Hi, Welcome!!");
synth.speak(utter);
utter.onend= () => {
    recognition.start();
};
recognition.onresult = (e) => {
    const transcript = e.results[e.results.length-1][0].transcript.trim();
    if (transcript.includes("cold")) {
        recognition.stop();
        utter.text='Sure, I am here to help you out with your cold problem. There are various ayurvedic home remedies that you can use while at home for cold like, First one is drink plenty of water to stay hydrated and also take rest. Try to have steam before sleep, and you can use ginger, cloves and cardamom in your tea to get relief. And also Please be sure to avoid cold drinks and beverages. Hope it helps.. Do you need Any more help??'
        synth.speak(utter);
    }
    else if(transcript.includes('cough')){
        recognition.stop();
        utter.text = "Sure, I am here to help you out with your cough problem. There are various ayurvedic home remedies that you can use while at home for cough like, First one is you can use salt water gargle for throat, another one can be use ginger tea with cloves and cardamom to get rid of cough easily.  Hope it helps.. Do you need Any more help?? "; 
        synth.speak(utter);
    }
    else if(transcript.includes('fever')){
        recognition.stop();
        utter.text = "Sure, I am here to help you out with your fever problem. There are various ayurvedic home remedies that you can use while at home for fever like, First one is drink warm water to stay hydrated and also take rest. Try to have steam before sleep, and you can use ginger, cloves and cardamom in your tea to get relief. prescribing to a real doctor would be recommended in severe case. And also Please be sure to avoid cold drinks and beverages. Hope it helps.. Do you need Any more help??";
        synth.speak(utter);
    }
    else if(transcript.includes('pimples')){
        recognition.stop();
        utter.text = "Sure, I am here to help you out with your pimples problem. There are various ayurvedic home remedies that you can use while at home for pimples as well as wrinkles like, First one is drink plenty of water to stay hydrated and fresh. You can also Try to have face wash before sleep, and you can use neem tree leaves to consume early in the morning to get relief. And also Please be sure to avoid junk food items and beverages. Hope it helps.. Do you need Any more help??";
        synth.speak(utter);
    }
    else if(transcript.includes('headache')){
        recognition.stop();
        utter.text = "Sure, I am here to help you out with your headache problem. There are various ayurvedic home remedies that you can use while at home for headache like, First one is to take some rest from your work. Try to consume tea with cloves and cardamom to get relief. And also Please be sure to avoid cold drinks, junk foods and beverages. Hope it helps.. Do you need Any more help??";
        synth.speak(utter);
    }
    else if(transcript.includes('how is')){
        recognition.stop();
        utter.text = "Hello, looks Good, Please feel free to tell me your health problem ";
        synth.speak(utter);
    }
    else if(transcript.includes('love')){
        recognition.stop();
        utter.text = "Love you 3 thousand, Glad to help you out. Please tell me your health related problem?";
        synth.speak(utter);
    }
    

    else if(transcript.includes('no')){
        recognition.stop();
        utter.text = "Thank You for using Doctoroid, glad to help you. Eat healthy & Take Care. Also you can give us some feedback and rating using our rating page..";
        synth.speak(utter);
    }

    else{
        recognition.stop();
        utter.text = "Sorry, Please feel free to tell me your health problem, say that again!!";
        synth.speak(utter);
    }
}
