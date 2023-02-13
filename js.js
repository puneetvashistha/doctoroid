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

let utter = new SpeechSynthesisUtterance("");
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
    
        else if(transcript.includes('piles')){
        recognition.stop();
        utter.text = "Sure, I am here to help you out with your piles problem. There are various ayurvedic home remedies that you can use while at home for piles like, First one is to eat fibrous food. Try to consume curd & milk related items, you can also try to do some yoga techniques like Viparit Karni daily in the morning. And also Please be sure to avoid junk foods and beverages. Hope it helps.. Do you need Any more help??";
        synth.speak(utter);
    }

    else if(transcript.includes('pain')){
        recognition.stop();
        utter.text = "Sure, I am here to help you out with your pain problem. There are various ayurvedic home remedies that you can use while at home for pain like, First one is to put heating pad or towel at the pain area. Taking a hot shower or bath with Epsom salts may also help. And also Please avoid rotten food. Hope it helps.. Do you need Any more help??";
        synth.speak(utter);
    }

    else if(transcript.includes('hair fall')){
        recognition.stop();
        utter.text = "Sure, I am here to help you out with your hairfall problem. There are various ayurvedic home remedies that you can use while at home for hairfall like, First one is massage the scalp area and also you can use AloeVera. Try to avoid hot water for hair wash. And also try to consume Amla and citrous fruits. Hope it helps.. Do you need Any more help??";
        synth.speak(utter);
    }

    else if(transcript.includes('dandruff')){
        recognition.stop();
        utter.text = "Sure, I am here to help you out with your dandruff problem. There are various ayurvedic home remedies that you can use while at home for hair dandruff like, First one is massage the scalp area and also you can use AloeVera. Try to avoid hot water for hair wash. And also try to avoid soap with hairs. Hope it helps.. Do you need Any more help??";
        synth.speak(utter);
    }

    else if(transcript.includes('constipation')){
        recognition.stop();
        utter.text = "Sure, I am here to help you out with your costipation problem. There are various ayurvedic home remedies that you can use while at home for costipation like, First one is intake plenty of water and also eating guava would be better. Raisins would be better to consume in morning . Do a brief Yoga Session and intake dairy products. And also do not try to force lower abdomen. Hope it helps.. Do you need Any more help??";
        synth.speak(utter);
    }

    else if(transcript.includes('thank')){
        recognition.stop();
        utter.text = "Thank You for using Doctoroid, I'm always here to help you with your health related problems. Eat healthy & Take Care. Also you can give us some feedback and rating using our rating page..";
        synth.speak(utter);
    }
    
    
    


    else{
        recognition.stop();
        utter.text = "Sorry, Please feel free to tell me your health problem, say that again!!";
        synth.speak(utter);
    }
}




document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});
document.onkeydown = function (e) {
    if(event.keyCode==123){
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode=="I".charCodeAt(0)){
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode=="C".charCodeAt(0)){
    return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode=="J".charCodeAt(0)){
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode=="U".charCodeAt(0)){
        return false;
    }
};
