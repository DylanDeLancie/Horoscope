//var sign = 0;
var messages= [];
var signs = ["Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn"]
function onSubmit(){
    var month = document.getElementById("Month").value;
    var day = document.getElementById("Day").value;
    //var name = document.getElementById("name").value;
    var sign = determineSign(parseInt(month),parseInt(day))
    document.getElementById("sign").innerHTML=signs[sign];
    document.getElementById("message").innerHTML=message[sign];
}


function determineSign(month,day){

    if((month == 1 && 20 <= day <= 31) || (month == 2 && day <= 18)){
        return 0;
    }
    if((month == 2 && 19 <= day <= 29 ) || (month == 3 && day <= 20)){
        sign = 1;
    }
    if((month == 3 && 21 <= day <= 31) || (month == 4 && day <= 19)){
        sign = 2;
    }
    if((month == 4 && 20 <= day <= 30) || (month == 5 && day <= 20)){
        sign = 3;
    }
    if((month == 5 && 21 <= day <= 31) || (month == 6 && day <= 20)){
        sign = 4;
    }
    if((month == 6 && 20 <= day <= 30) || (month == 7 && day <= 22 )){
        sign = 5;
    }
    if((month == 7 && 23 <= day <= 31) || (month == 8 && day <= 22)){
        sign = 6;
    }
    if((month == 8 && 23 <= day <= 31) || (month == 9 && day <= 22)){
        sign = 7;
    }
    if((month == 9 && 23 <= day <= 30) || (month == 10 && day <= 22)){
        sign = 8;
    }
    if((month == 10 && 23 <= day <= 31) || (month == 11 && day <= 21)){
        sign = 9;
    }
    if((month == 11 && 22 <= day <= 30) || (month == 12 && day <= 21)){
        sign = 10;
    }
    if((month == 12 && 22 <= day <= 31) ||(month == 1 && day <= 19)){
        sign = 11;
    }
}







