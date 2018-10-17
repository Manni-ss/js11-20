//write 11th method
function firstLast6(arr){
    if (arr[0] == 6|| arr[arr.length-1] == 6){



        return true;
    }

    return false;

}

//write twelfth
function has23(arr){

    if(arr.includes(2) || arr.includes(3)) {
        return true;
    }

    return false;
}

//write 13th method
function fix23(arr){

    for(var i = 0;i<arr.length;i++) {

        if(arr[i] == 2 && arr[i+1] == 3){
            arr[i+1] = 0;
        }
    }
    return arr;
}

//write 14th method
function countYZ(str){
    var sum = 0
    str = str.toLowerCase()
    for(var i = 0; i<str.length; i++){
        if((str[i] == "y" || str[i] == "z" ) && str[i+1] == " "){
            sum++;

        }
        if((str[i] == "y" || str[i] == "z" ) && i == str.length - 1 ){
            sum++;
        }



    }

    return sum;
}

//write 15th method
function endOther(str1, str2){
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()

    if (str1.length>=str2.length) {

        if(str1.indexOf(str2) == str1.length-str2.length){
            return true;
        } else {
            return false;
        }

    }
    if (str2.length>str1.length) {

        if(str2.indexOf(str1)== str2.length-str1.length){
            return true;
        } else {
            return false;
        }
    }




}

//write 16th method
function starOut(str){
    var newstring = ""
    for (var i =0; i<str.length; i++) {
        if (str[i] != "*" && str[i-1] != "*" && str[i+1] != "*") {
            var newstring = newstring + str[i];
        }

    }
    return newstring;
}

//write 17th method
function getSandwich(str){
    var breadcount = 0;
    for (var i = 0; i<str.length; i++){
        if (str.substring(i, i+5) == "bread"){
            breadcount += 1;

        }

    }
    if (breadcount>=2){
        return str.substring((str.indexOf("bread")+5) , str.lastIndexOf("bread"));

    } else {
        return "";
    }

}

//write 18th method

function canBalance(arr) {
    var sum1 = 0;
    var isEqual = false;
    for (var i = 0; i < arr.length; i++) {
        var sum2 = 0;
        sum1 += arr[i];
        for (var j = i + 1; j < arr.length; j++) {
            sum2 += arr[j];

        }
        if (sum1 == sum2) {
            isEqual = true;
        }
    }
    return isEqual;
}


//write 19th method
function countClumps(arr){
    var sum = 0;
    for (var i=0; i<arr.length; i++){
        if (arr[i] == arr[i+1]){
            sum++;
            if (arr[i] == arr[i+2]){
                sum--;
            }
            for (var j = i; j<arr.length; j++){
                if (arr[j] != arr[i]){
                    break;
                }
            }
        }

    }
    return sum;

}

//write 20th method
function evenlySpaced(a,b,c){
    if (a-b == b-c || b-c == c-a || c-a == a-b || c-b == b-a || a-c == c-b || b-a == a-c){
        return true;
    } else {
        return false;
    }

}