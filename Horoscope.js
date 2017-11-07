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
    if((month == 1 && day >= 20) || (month == 2 && day <= 18)){
        sign = 0;
    }
    if((month == 2 && day >= 19) || )
}






