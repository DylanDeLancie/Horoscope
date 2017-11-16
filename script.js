function onSubmit(){
    var month = parseInt(document.getElementById("Month").value);
    var day = parseInt(document.getElementById("Day").value);
    var name = document.getElementById("name").value;
    var sign = determineSign(parseInt(month),parseInt(day));
    document.getElementById("message").innerHTML=name + ", your sign is " + signs[sign] + ". " + messages[sign];
    document.getElementById("birthday").innerHTML= birthday(month,day,name);
    document.getElementById("image").src= "img/" + signs[sign] + ".png";
}


function determineSign(month,day){

    if((month == 1 && day <= 31) || (month == 2 && day <= 18)){
        return 0;
    }
    if((month == 2 && day <= 29) || (month == 3 && day <= 20)){
        return 1;
    }
    if((month == 3 && 21 <= day <= 31) || (month == 4 && day <= 19)){
        return 2;
    }
    if((month == 4 && day <= 30) || (month == 5 && day <= 20)){
        return 3;
    }
    if((month == 5 && day <= 31) || (month == 6 && day <= 20)){
        return 4;
    }
    if((month == 6 && day <= 30) || (month == 7 && day <= 22 )){
        return 5;
    }
    if((month == 7 && day <= 31) || (month == 8 && day <= 22)){
        return 6;
    }
    if((month == 8 && day <= 31) || (month == 9 && day <= 22)){
        return 7;
    }
    if((month == 9 && day <= 30) || (month == 10 && day <= 22)){
        return 8;
    }
    if((month == 10 && day <= 31) || (month == 11 && day <= 21)){
        return 9;
    }
    if((month == 11 && day <= 30) || (month == 12 && day <= 21)){
        return 10;
    }
    if((month == 12 && day <= 31) ||(month == 1 && day <= 19)){
        return 11;
    }
    else{
        return 12;
    }
}

var signs = ["Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagitarius","Capricorn","nonexistent, as your birthday is not real"]



var messages= [];
messages[0] = "Your emotional partner will push the right buttons today. Travel opportunities should be your first choice. Your high energy will enable you to take the role of leader in group functions.";
messages[1] = "You may want to sign up for lectures or courses that will bring you mental stimulation. You need to spend less time daydreaming and more time accomplishing. Difficulties with female members of your family may result in estrangement's.";
messages[2] = "Entertainment could be pleasing if it is of an energetic nature. Children could cost you more than you can afford. Residential moves are evident.";
messages[3] = "Tempers will mount if you are too pushy at work. Do not lend money to friends, or contribute more than necessary to groups unworthy of your cash. You can make gains if you look at long-term investments.";
messages[4] = "Your love will not be willing to listen to your criticism. This will not be the day to lend money to friends or family. Try to avoid serious discussions with loved ones.";
messages[5] = "Do not hesitate to help elders with legal documents that are too confusing for them. Go after your goals and don't be afraid to ask for assistance. You hard work and dedication will payoff, so stick to your guns and do your job well.";
messages[6] = "Travel and communication will be lucrative for you. You can't win and they won't listen. Travel in pursuit of pleasure and knowledge.";
messages[7] = "Drastic financial losses may be likely if you lend money. Don't be too quick to judge your position or surroundings at work. Older members of your family may try to take advantage of you.";
messages[8] = "Spend some quality time with the one you love. Your talents will shine at work. Avoid conflicts with in-laws or other family members. Do not let in-laws upset you.";
messages[9] = "You can make financial deals, but it may be best if you're not using your own cash. It might be best to keep your ideas to yourself today. Social functions will bring you in touch with new lovers.";
messages[10] = "Take your time; do not make any decisions in haste. You have to feel free to come and go as you please to achieve happiness. Avoid conflicts with in-laws or other family members.";
messages[11] = "Sudden changes concerning coworkers may surprise you. Be careful not to consume too many spicy foods, or minor health problems could put you out of commission for the day. Don't be too quick to judge.";
messages[12] = "Please try again.";


function birthday (month,day,name){
    console.log(month);
    console.log(day);
    console.log(name);
    var today = new Date();
    var d = today.getDate();
    var m = today.getMonth() + 1;
    if(month == m  && day == d){
        return "Happy Birthday " + name + " !"
    }
    return "";
}



