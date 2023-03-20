
      const speakButton = document.getElementById("speak-button");

      // Create a new instance of the SpeechRecognition API
      const recognition = new webkitSpeechRecognition();

      // Set the language to Hindi
      recognition.continuous = true;
      recognition.lang = "hi-IN";
      recognition.interimResults = false;
      recognition.maxAlternatives = 2;
      const synth = window.speechSynthesis;
      
      speakButton.addEventListener("click", () => {
      let utter = new SpeechSynthesisUtterance("नमस्ते, मैं एक आयुर्वेदिक डॉक्टर हूं| मैं आपकी कैसे सहायता कर सकता हूं?");
      utter.lang = "hi-IN";
      synth.speak(utter);
      utter.onend= () => {
          recognition.start();
      };
      recognition.onresult = (event) => {
        const transcript = event.results[event.results.length-1][0].transcript.trim();
        console.log(transcript);
          if (transcript.includes("नमस्ते")) {
              recognition.stop();
              utter.text='नमस्ते! मैं आपकी कैसे सहायता कर सकता हूं?'
              synth.speak(utter);
          }
          else if(transcript.includes('जुखाम')){
              recognition.stop();
              utter.text = "ज़रूर, मैं यहाँ आपकी ठंड की समस्या से निपटने में आपकी मदद करने के लिए हूँ। ऐसे कई आयुर्वेदिक घरेलू उपचार हैं जिनका उपयोग आप घर पर सर्दी के लिए कर सकते हैं जैसे, पहले तरोताजा रहने के लिए खूब पानी पिएं और आराम भी करें। सोने से पहले भाप लेने की कोशिश करें और राहत पाने के लिए आप अपनी चाय में अदरक, लौंग और इलायची का इस्तेमाल कर सकते हैं। और यह भी कृपया ठंडे पेय और अन्य पेय पदार्थों से बचना सुनिश्चित करें। उम्मीद है की ये मदद करेगा.. क्या आपको और मदद चाहिए??"; 
              synth.speak(utter);
          }
          else if(transcript.includes('जुकाम')){
              recognition.stop();
              utter.text = "ज़रूर, मैं यहाँ आपकी ठंड की समस्या से निपटने में आपकी मदद करने के लिए हूँ। ऐसे कई आयुर्वेदिक घरेलू उपचार हैं जिनका उपयोग आप घर पर सर्दी के लिए कर सकते हैं जैसे, पहले तरोताजा रहने के लिए खूब पानी पिएं और आराम भी करें। सोने से पहले भाप लेने की कोशिश करें और राहत पाने के लिए आप अपनी चाय में अदरक, लौंग और इलायची का इस्तेमाल कर सकते हैं। और यह भी कृपया ठंडे पेय और अन्य पेय पदार्थों से बचना सुनिश्चित करें। उम्मीद है की ये मदद करेगा.. क्या आपको और मदद चाहिए??"; 
              synth.speak(utter);
          }
          else if(transcript.includes('खांसी')){
              recognition.stop();
              utter.text = "ज़रूर, मैं यहाँ आपकी खांसी की समस्या से निजात दिलाने के लिए हूँ। ऐसे कई आयुर्वेदिक घरेलू उपचार हैं जिनका उपयोग आप घर पर खांसी के लिए कर सकते हैं जैसे, पहला है आप गले के लिए नमक के पानी के गरारे कर सकते हैं, दूसरे में लौंग और इलायची के साथ अदरक की चाय का उपयोग आसानी से खांसी से छुटकारा पाने के लिए किया जा सकता है। उम्मीद है की ये मदद करेगा.. क्या आपको और मदद चाहिए??"; 
              synth.speak(utter);
          }
          else if(transcript.includes('बुखार')){
              recognition.stop();
              utter.text = "ज़रूर, मैं यहाँ आपकी बुखार की समस्या से निपटने में आपकी मदद करने के लिए हूँ। ऐसे कई आयुर्वेदिक घरेलू उपचार हैं जिनका उपयोग आप घर पर बुखार के लिए कर सकते हैं जैसे, पहले हाइड्रेटेड रहने के लिए गर्म पानी पिएं और आराम भी करें। सोने से पहले भाप लेने की कोशिश करें और राहत पाने के लिए आप अपनी चाय में अदरक, लौंग और इलायची का इस्तेमाल कर सकते हैं। गंभीर मामले में एक वास्तविक डॉक्टर को प्रिस्क्राइब करने की सिफारिश की जाएगी। और कृपया ठंडे पेय और पेय पदार्थों से भी बचना सुनिश्चित करें। उम्मीद है की ये मदद करेगा.. क्या आपको और मदद चाहिए??"; 
              synth.speak(utter);
          }
          else{
              recognition.stop();
              utter.text = "क्षमा करें, वर्तमान में मैं चीजें सीख रहा हूं.. कृपया बेझिझक मुझे अपनी स्वास्थ्य संबंधी समस्या बताएं, फिर से कहें !!"; 
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