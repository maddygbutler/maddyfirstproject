
//write first method
function sleep_in(weekday,vacation) {
    if(!weekday||vacation){
        return( true);
    }else{
        return(false);
    }
}



//write second method
function monkey_trouble(a_smile, b_smile) {
    if( (a_smile&& b_smile) || (!a_smile&&! b_smile)){
        return(true);
    }else{
        return(false);
    }
}

//string times
function string_times(string, number){
    if(number>=0){
        var newString="";
        for( var i = 0; i < number; i++){
            newString = newString + string
        }
        return (newString);
    }
}

//front times
function front_times(string, number){
    if(number>=0){
        var newString= "";
        var front= string.substring (0,3);
        for(var i=0; i<number; i++){
            newString = newString + front

        }
        return newString;

    }
}

//string bits

function string_bits(string){
    var newString= "";


    for(i=0; i < string.length; i+= 2){
          newString = newString + string[i];
    }
    return newString;
}

//caughtSpeeding

function caughtSpeeding(speed, birthday){
    if(birthday==false){
        if(speed<=60){
            return 0;
        }
        if(80>=speed && speed>=61){
            return 1;
        }
        if(speed>=81){
            return 2;
        }
    }else{
        if(speed<=65){
            return 0;
        }
        if(85>= speed && speed>=66){
            return 1;
        }
        if(speed>=86){
            return 2;
        }
    }
}

//fizzBuzz

function fizz_buzz(num){
    if(num % 3 == 0 && num % 5 == 0){
        return "FizzBuzz";
    }
    if(num % 3 == 0){
        return "Fizz";
    }
    if(num % 5 == 0){
        return "Buzz";
    }
    if(num % 3 !== 0 && num % 5 !== 0){
        return num + "!";
    }

}

//teaParty

function teaParty(tea, candy){
    if(tea<5 || candy<5){
        return 0;
    }
    if( tea >= candy * 2 || candy >= tea * 2 ){
        return 2;
    }
    if(tea >= 5 && candy >= 5){
        return 1;
    }


}

//blackJack

function blackjack(x, y){
    var dif1 = 21 - x;

    var dif2 = 21 - y;

    if( x <= 21 && y > 21){
        return x;
    }

    if( x > 21 && y <= 21){
        return y;
    }
    if(dif1 < 0 || dif2 < 0){
        return 0;
    }
    if(x <= 21 && dif1 < dif2){
        return x;
    }else{
        return y;
    }


}

//loneSum

function loneSum(a,b,c){
    if(a==b && a==c ){
        return 0;
    }
    if(a==b){
        return c;
    }
    if (b==c){
        return a;
    }
    if(a==c){
        return b;
    }

    if(a != b && a != c){
        return a+b+c;
    }
}











//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleepIn(true, false);
    document.getElementById("output").innerHTML += nextOne(true, false);
    //test third method, etc
}

