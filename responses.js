function getBotResponse(user) {
    input = user.toLowerCase();
    if (input.includes("cold")) {
        return "Don't worry.. Drink plenty of water to stay hydrated and also take rest. Try to have steam before sleep, and you can use ginger, cloves and cardamom in your tea to get relief. And also Please be sure to avoid cold drinks and beverages. Hope it helps..";
    } else if (input.includes("cough")) {
        return "Don't worry.. You can use salt water gargle for throat, another one can be use ginger tea with cloves and cardamom to get rid of cough easily.  Hope it helps..";
    } else if (input.includes("fever")) {
        return "Don't worry.. Drink warm water to stay hydrated and also take rest. Try to have steam before sleep, and you can use ginger, cloves and cardamom in your tea to get relief. Prescribing to a real doctor would be recommended in severe case. And also Please be sure to avoid cold drinks and beverages. Hope it helps..";
    } else if (input.includes("pimples")) {
        return "Don't worry.. Drink plenty of water to stay hydrated and fresh. You can also try to have face wash before sleep, and you can use neem tree leaves to consume early in the morning to get relief. And also Please be sure to avoid junk food items and beverages. Hope it helps..";
    } else if (input.includes("headache")) {
        return "Don't worry.. Take some rest from your work. Try to consume tea with cloves and cardamom to get relief. And also Please be sure to avoid cold drinks, junk foods and beverages. Hope it helps..";
    } else if (input.includes("♡")) {
        return "Wow! Thank You So Much for this wonderful Heart!!";
    } else if (input.includes("piles")) {
        return "Don't worry.. Eat the fibrous food. Try to consume curd & milk related items, you can also try to do some yoga techniques like Viparit Karni daily in the morning. And also Please be sure to avoid junk foods and beverages. Hope it helps..";
    } else if (input.includes("puneet")) {
        return "He's my Tony Stark who has developed me and other websites like Advhelp, Spentarn, Webution, VLSI and still try to make what he thinks.. Please let me know how may I help you with your health problem..";
    } 



















    // Simple responses
    if (input == "hello") {
        return "Hello there! How may I help with your health problem today? Please feel free to ask me your health related problems..";
    } else if (input == "goodbye") {
        return "Thank You for using Doctoroid, I'm always here to help you with your health related problems. Eat healthy & Take Care. Also you can give us some feedback and rating using our rating page..";
    } else {
        return "Please feel free to tell me your health related problem, Try asking something else!";
    }
}