const startBtn = document.querySelector("#start-btn");
const speakingGif = document.getElementById("speaking-gif");
const recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 2;
const synth = window.speechSynthesis;

startBtn.addEventListener("click", () => {
let utter = new SpeechSynthesisUtterance("");
synth.speak(utter);
utter.onend= () => {
    recognition.start();
};
recognition.onresult = (e) => {
    const transcript = e.results[e.results.length-1][0].transcript.trim();
    if (transcript.includes("thank")) {
        recognition.stop();
        utter.text='Thank You for using Doctoroid, glad to help you. Eat healthy & Take Care. Also you can give us some feedback and rating using our rating page..'
        synth.speak(utter);
    }
    else if(transcript.includes('no')){
        recognition.stop();
        utter.text = "  Thank You for using Doctoroid, glad to help you. Eat healthy & Take Care. Also you can give us some feedback and rating using our rating page.. "; 
        synth.speak(utter);
    }

    else if(transcript.includes('repeat')){
        recognition.stop();
        utter.text = " Here we are going to perform Legs up the Wall pose again. Kindly be ready and take a deep breath................... Hope you are ready?? First Sit with your right side flush against a wall as shown at display. Now Rest your left elbow on the floor, rotate and raise your legs up the wall while lowering your torso so that you’re lying on your back with your heels against the wall as shown in display. Now wait for one minute and perform it almost 5-6 times.. Let's count.. 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60..  Very Nice, we have done it.. Do you want to perform it again?? "; 
        synth.speak(utter);
    }
    else if(transcript.includes('again')){
        recognition.stop();
        utter.text = "Here we are going to perform Legs up the Wall pose again. Kindly be ready and take a deep breath................... Hope you are ready?? First Sit with your right side flush against a wall as shown at display. Now Rest your left elbow on the floor, rotate and raise your legs up the wall while lowering your torso so that you’re lying on your back with your heels against the wall as shown in display. Now wait for one minute and perform it almost 5-6 times.. Let's count.. 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60..  Very Nice, we have done it.. Do you want to perform it again?? "; 
        synth.speak(utter);
    }
    else if(transcript.includes('yes')){
        recognition.stop();
        utter.text = "Here we are going to perform Legs up the Wall pose again. Kindly be ready and take a deep breath................... Hope you are ready?? First Sit with your right side flush against a wall as shown at display. Now Rest your left elbow on the floor, rotate and raise your legs up the wall while lowering your torso so that you’re lying on your back with your heels against the wall as shown in display. Now wait for one minute and perform it almost 5-6 times.. Let's count.. 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60..  Very Nice, we have done it.. Do you want to perform it again?? "; 
        synth.speak(utter);
    }
    else{
        recognition.stop();
        utter.text = "Sorry at this time i don't discuss anything.., Please lets focus on Yoga and do it again.. We have to do it for a healthy lifestyle.. We all are busy somewhere lets give some time to our health as well, so don't wait lets do it again.. "; 
        synth.speak(utter);

    }


}});

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
