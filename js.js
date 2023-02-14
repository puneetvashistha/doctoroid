const startBtn = document.querySelector("#start-btn");
const speakingGif = document.getElementById("speaking-gif");
const recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 2;
const synth = window.speechSynthesis;

startBtn.addEventListener("click", () => {
let utter = new SpeechSynthesisUtterance("Hello, I am an AI Ayurvedic Doctor. Please tell me how may I help you with your problem??");
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
 
    else if(transcript.includes('doctor')){
        recognition.stop();
        utter.text = "Doctor is someone who can take care of patient selflessly and you can assume me one out of that. I'm an Ayurvedic doctor who would take care of your health related problems. Please feel free to ask me health related problem of yours?";
        synth.speak(utter);
    }
    
     
    else if(transcript.includes('hello')){
        recognition.stop();
        utter.text = "Hey, How may I help with your health problem today? Please feel free to ask me your health related problems..";
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
    
    
        
    else if(transcript.includes('asthma')){
        recognition.stop();
        utter.text = "Sure, I am here to help you out with your asthma problem. There are various ayurvedic home remedies that you can use while at home for asthma like, it is often treated with herbs such as licorice root, ginger, and turmeric, as well as breathing exercises and lifestyle changes to reduce stress. Hope it helps.. Do you need Any more help??";
        synth.speak(utter);
    }

    
    else if(transcript.includes('diabetes')){
        recognition.stop();
        utter.text = "Sure, I am here to help you out with your diabetes problem. There are various ayurvedic home remedies that you can use while at home for diabetes like, First one includes the use of herbs such as fenugreek, gymnema, and bitter melon, along with dietary changes and regular physical activity. Hope it helps.. Do you need Any more help??";
        synth.speak(utter);
    }

    
    else if(transcript.includes('heart')){
        recognition.stop();
        utter.text = "Sure, I am here to help you out with your heart related problem. There are various ayurvedic home remedies that you can use while at home for heart problem like, First one is intake plenty of water and use herbs like arjuna, ashwagandha, and Shankhapushpi to improve heart health and reduce stress. Also, avoid junk foods & beverages for healthy lifestylr and perform yoga. Hope it helps.. Do you need Any more help??";
        synth.speak(utter);
    }

    
    else if(transcript.includes('cancer')){
        recognition.stop();
        utter.text = "Sure, I am here to help you out with your cancer problem. Generally, in this case one must visit to real healthcare centre for its cure but There are some ayurvedic home remedies that you can use while at home for cancer like  Herbs such as ashwagandha, turmeric, and Guggulu may help strengthen the immune system and improve quality of life. Hope it helps.. Do you need Any more help??";
        synth.speak(utter);
    }

    
    else if(transcript.includes('arthritis')){
        recognition.stop();
        utter.text = "Sure, I am here to help you out with your arthritis problem. There are various ayurvedic home remedies that you can use while at home for arthritis like, First one is the use of anti-inflammatory herbs like ginger and turmeric, massage with warm herbal oils, and changes in diet and lifestyle to reduce joint pain and inflammation. Hope it helps.. Do you need Any more help??";
        synth.speak(utter);
    }

    
    else if(transcript.includes('lyme')){
        recognition.stop();
        utter.text = "Sure, I am here to help you out with your lyme disease problem. There are various ayurvedic home remedies that you can use while at home for lyme problem like, First one includes the use of herbs like ashwagandha, neem, and guggulu to boost the immune system and improve overall health. Hope it helps.. Do you need Any more help??";
        synth.speak(utter);
    }

    
    else if(transcript.includes('malaria')){
        recognition.stop();
        utter.text = "Sure, I am here to help you out with your malaria problem. There are various ayurvedic home remedies that you can use while at home for malaria like, First one includes the use of herbs like neem, tulsi, and chirata to help combat the infection and boost the immune system. Hope it helps.. Do you need Any more help??";
        synth.speak(utter);
    }

    
    else if(transcript.includes('tuberculosis')){
        recognition.stop();
        utter.text = "Sure, I am here to help you out with your tuberculosis problem. There are various ayurvedic home remedies that you can use while at home for tuberculosis like, First one involves the use of herbs like ghee, turmeric, and garlic to boost immunity and help the body fight the infection. Also Tuberculosis treatment in government aid hospitals is free, you can cure it there too for free. Hope it helps.. Do you need Any more help??";
        synth.speak(utter);
    }

    
    else if(transcript.includes('aids' || 'hiv')){
        recognition.stop();
        utter.text = "Sure, I am here to help you out with your aids problem. There are various ayurvedic home remedies that you can use while at home for aids like, Ayurveda can help improve the overall health and well-being of people with HIV/AIDS through the use of immune-boosting herbs, dietary changes, and stress-reducing techniques. Hope it helps.. Do you need Any more help??";
        synth.speak(utter);
    }

    
    else if(transcript.includes('stroke')){
        recognition.stop();
        utter.text = "Sure, I am here to help you out with your stroke problem. There are various ayurvedic home remedies that you can use while at home for stroke like, First one includes the use of herbs like Shankhapushpi and Brahmi, along with massage and physical therapy, to improve brain function and support recovery. Hope it helps.. Do you need Any more help??";
        synth.speak(utter);
    }

    
    else if(transcript.includes('parkinson')){
        recognition.stop();
        utter.text = "Sure, I am here to help you out with your parkinson problem. There are various ayurvedic home remedies that you can use while at home for parkinson like, First one includes the use of herbs like Shankhapushpi, Ashwagandha, and Vidari to improve brain function and reduce symptoms. Hope it helps.. Do you need Any more help??";
        synth.speak(utter);
    }

    
    else if(transcript.includes('infection')){
        recognition.stop();
        utter.text = "Sure, I am here to help you out with your infection problem. There are various ayurvedic home remedies that you can use while at home for infection like, It includes the use of antimicrobial herbs like uva ursi and cranberry. Hope it helps.. Do you need Any more help??";
        synth.speak(utter);
    }

    
    else if(transcript.includes('sinusitis')){
        recognition.stop();
        utter.text = "Sure, I am here to help you out with your sinusitis problem. There are various ayurvedic home remedies that you can use while at home for sinusitis like, It includes the use of decongestant herbs like eucalyptus and peppermint, along with steam inhalation and dietary changes to improve sinus health. Hope it helps.. Do you need Any more help??";
        synth.speak(utter);
    }

    
    else if(transcript.includes('gas')){
        recognition.stop();
        utter.text = "Sure, I am here to help you out with your gastritis problem. Ayurvedic remedies for gastritis may include the use of digestive-supporting herbs like fennel and cumin, along with dietary changes to reduce irritation of the stomach lining. Hope it helps.. Do you need Any more help??";
        synth.speak(utter);
    }

    
    else if(transcript.includes('kidney')){
        recognition.stop();
        utter.text = "Sure, I am here to help you out with your kidney problem. Ayurvedic remedies for chronic kidney disease may include the use of diuretic herbs like dandelion and coriander, along with dietary changes to reduce stress on the kidneys. Also, try to intake plenty of water.. Hope it helps.. Do you need Any more help??";
        synth.speak(utter);
    }

        
    else if(transcript.includes('anaemia')){
        recognition.stop();
        utter.text = "Sure, I am here to help you out with your anemia problem. Ayurvedic remedies for anemia may include the use of iron-rich herbs like dandelion and alfalfa, along with dietary changes to increase iron intake. Also beetroot and pomegranate helps to cure it.. Hope it helps.. Do you need Any more help??";
        synth.speak(utter);
    }

    else if(transcript.includes('depression')){
        recognition.stop();
        utter.text = "Sure, I am here to help you out with your Tension problem. Ayurvedic remedies for depression may include the use of herbs like ashwagandha and Shankhapushpi, along with yoga, meditation, and other stress-reducing techniques. Hope it helps.. Do you need Any more help??";
        synth.speak(utter);
    }
    
      else if(transcript.includes('hypertension')){
        recognition.stop();
        utter.text = "Sure, I am here to help you out with your Tension problem. Ayurvedic remedies for depression may include the use of herbs like ashwagandha and Shankhapushpi, along with yoga, meditation, and other stress-reducing techniques. Hope it helps.. Do you need Any more help??";
        synth.speak(utter);
    }


    
    
    

    else if(transcript.includes('thank')){
        recognition.stop();
        utter.text = "Thank You for using Doctoroid, I'm always here to help you with your health related problems. Eat healthy & Take Care. Also you can give us some feedback and rating using our rating page..";
        synth.speak(utter);
    }
    
    
    else if(transcript.includes('puneet')){
        recognition.stop();
        utter.text = "He's my Tony Stark who has developed me and other websites like Spentarn, Webution, VLSI and still try to make what he thinks.. Please let me know how may I help you with your health problem..";
        synth.speak(utter);
    }
    
        
    else if(transcript.includes('punit')){
        recognition.stop();
        utter.text = "He's my Tony Stark who has developed me and other websites like Spentarn, Webution, VLSI and still try to make what he thinks.. Please let me know how may I help you with your health problem..";
        synth.speak(utter);
    }
    
    


    else{
        recognition.stop();
        utter.text = "Sorry, Currently I'm learning the things.. Please feel free to tell me your health related problem, say that again!!";
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
