const startBtn = document.querySelector("#start-btn");
const speakingGif = document.getElementById("speaking-gif");
const recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 2;
const synth = window.speechSynthesis;



startBtn.addEventListener("click", () => {
let utter = new SpeechSynthesisUtterance("Hello, I am your DOCTOROID an AI Ayurvedic Doctor. Here we are going to perform chair pose. In this pose, you mimic sitting in a chair, as you hold a static squat with your feet together. Chair pose is super for developing both upper and lower body strength, particularly in your glute and back muscles. It also helps with balance, especially if you lift your heels. Hope you are ready?? First, Stand with your feet together, bend your knees and sink your hips back so that your thighs are as close to parallel to the floor as possible. Be mindful to keep your knees tracking behind your toes, really reaching your hips toward an invisible chair behind you. Now, Keep your chest lifted and your knees together, raise your arms up, pressing your shoulders down and away from your ears as shown in display... Now wait for 30 second and perform it almost 5-6 times.. Let's count.. 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30..  Very Nice, we have done it.. Do you want to perform it again??");
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
        utter.text = " Here we are going to perform chair pose again. In this pose, you mimic sitting in a chair, as you hold a static squat with your feet together. Chair pose is super for developing both upper and lower body strength, particularly in your glute and back muscles. It also helps with balance, especially if you lift your heels. Hope you are ready?? First, Stand with your feet together, bend your knees and sink your hips back so that your thighs are as close to parallel to the floor as possible. Be mindful to keep your knees tracking behind your toes, really reaching your hips toward an invisible chair behind you. Now, Keep your chest lifted and your knees together, raise your arms up, pressing your shoulders down and away from your ears as shown in display... Now wait for 30 second and perform it almost 5-6 times.. Let's count.. 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30..  Very Nice, we have done it.. Do you want to perform it again??"; 
        synth.speak(utter);
    }
    else if(transcript.includes('again')){
        recognition.stop();
        utter.text = "Here we are going to perform chair pose again. In this pose, you mimic sitting in a chair, as you hold a static squat with your feet together. Chair pose is super for developing both upper and lower body strength, particularly in your glute and back muscles. It also helps with balance, especially if you lift your heels. Hope you are ready?? First, Stand with your feet together, bend your knees and sink your hips back so that your thighs are as close to parallel to the floor as possible. Be mindful to keep your knees tracking behind your toes, really reaching your hips toward an invisible chair behind you. Now, Keep your chest lifted and your knees together, raise your arms up, pressing your shoulders down and away from your ears as shown in display... Now wait for 30 second and perform it almost 5-6 times.. Let's count.. 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30..  Very Nice, we have done it.. Do you want to perform it again??"; 
        synth.speak(utter);
    }
    else if(transcript.includes('yes')){
        recognition.stop();
        utter.text = "Here we are going to perform chair pose again. In this pose, you mimic sitting in a chair, as you hold a static squat with your feet together. Chair pose is super for developing both upper and lower body strength, particularly in your glute and back muscles. It also helps with balance, especially if you lift your heels. Hope you are ready?? First, Stand with your feet together, bend your knees and sink your hips back so that your thighs are as close to parallel to the floor as possible. Be mindful to keep your knees tracking behind your toes, really reaching your hips toward an invisible chair behind you. Now, Keep your chest lifted and your knees together, raise your arms up, pressing your shoulders down and away from your ears as shown in display... Now wait for 30 second and perform it almost 5-6 times.. Let's count.. 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30..  Very Nice, we have done it.. Do you want to perform it again??"; 
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
