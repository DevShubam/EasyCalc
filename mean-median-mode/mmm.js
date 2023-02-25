var arr = new Array;

// the function that return the mean value.
function mean(x) {
    var sum = 0;
    for (i = 0; i < x.length; i++) {
        sum += x[i];
    }
    var result = sum / x.length;
    return result.toFixed(2);

}

// the function that return the median value.
function median(x) {
    if (x.length % 2 == 0) {
        return (x[x.length / 2] + x[x.length / 2 - 1]) / 2;
    };
    return x[x.length / 2 - 0.5];
}

// the function that return the mode value(s).
function mode(x) {
    var counter = 1;
    var repeated = 1;
    var arrMode = [];
    var elemNumber = 0;
    for (i = 1; i < x.length; i++) {
        if (x[i] == x[i - 1]) {
            counter++;
            if (counter > repeated) {
                repeated = counter;
                elemNumber = 0;
                arrMode = [];
                arrMode[elemNumber] = x[i]
            }
            else {
                if (counter == repeated && counter > 1) {
                    elemNumber++;
                    arrMode[elemNumber] = x[i];
                }
            }
        }
        else {
            counter = 1;
        }
    }
    if (arrMode.length > 0) {

        return "" + arrMode + " and it's repeated " + repeated + " times.";
    }
    return "There is no mode"
}
function calc() {
    arr = [];
    error = ""; document.getElementById("result").innerHTML = "";
    var text = document.getElementById("txtlist").value;
    var counter = 0;
    var stNum = "";
    for (i = 0; i < text.length; i++) {
        if (text[i] != ',') {
            stNum += text[i];
            if (parseInt(stNum) >= 0)
                arr[counter] = parseInt(stNum);
            else
                error = "Sorry, there is something wrong in your input";
        }
        else {

            if (parseInt(stNum) >= 0) {
                arr[counter] = parseInt(stNum);
                counter++;
                stNum = "";
            }
            else
                error = "Sorry, there is something wrong in your input";
        }
    }
    if (arr.length != 0 && error.length == 0) {
        arr.sort(function (a, b) { return a - b });
        document.getElementById("result").innerHTML = "The list of numbers are: " + arr + "" + "<br/>" + "mean = " + mean(arr) + "<br/>median = " + median(arr) + "<br/>mode = " + mode(arr);
    }
    else
        document.getElementById("result").innerHTML = error;
}
