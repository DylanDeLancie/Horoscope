function onSubmit(){
    getInfo();


}

function getInfo(){
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var name = document.getElementById("name").value;

}
var signs = ["Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn"]
signs[determineSign(month,day)]
function determineSign(month,day){
    var sign = "";
    if((month == 1 && 20 <= day <= 31) || (month == 2 && day <= 18)){
        sign = 0;
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

    }
}






