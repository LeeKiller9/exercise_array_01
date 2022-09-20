function exercise1() {
    let n = +(prompt("Enter amount of array"));
    let arr = [];
    let result = [];
    let count = 0;
    for (let i = 0; i < n; i++) {
        arr[i] = +(prompt("Enter number at index " + i));
        if (arr[i] >= 10) {
            result.push(arr[i]);
            count++;
        }
    }
    document.getElementById("exr1_result").innerHTML = "Array: " + arr + "<br>Bigger than 10 have " + count + " number: " + (result.join());
}

function exercise2() {
    let n = +(prompt("Enter amount of array"));
    let arr = [];
    let max = null;
    let index = null;
    for (let i = 0; i < n; i++) {
        arr[i] = +(prompt("Enter number at index " + i));
        if (max === null) {
            max = arr[0];
        } else if (arr[i] > max) {
            max = arr[i];
            index = i;
        }
    }
    document.getElementById("exr2_result").innerHTML = "Array: " + arr + "<br>Max number is " + max + ", index is  " + index;

}

function exercise3() {
    let n = +(prompt("Enter amount of array"));
    let arr = [];
    let max = null;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        arr[i] = +(prompt("Enter number at index " + i));
        if (max === null) {
            max = arr[0];
        } else if (arr[i] > max) {
            max = arr[i];
        }
        sum += arr[i];
    }
    document.getElementById("exr3_result").innerHTML = "Array: " + arr + "<br>Max number is " + max + ", average is  " + (sum / n);
}

function exercise4() {
    let n = +(prompt("Enter amount of array"));
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = +(prompt("Enter number at index " + i));
    }
    document.getElementById("exr4_result").innerHTML = "Array: " + arr + "<br>Reverse: " + arr.reverse();
}

function exercise5() {
    let n = +(prompt("Enter amount of array"));
    let arr = [];
    let count = 0;
    for (let i = 0; i < n; i++) {
        arr[i] = +(prompt("Enter number at index " + i));
        if (arr[i] < 0) {
            count++;
        }
    }
    document.getElementById("exr5_result").innerHTML = "Array: " + arr + "<br>Smaller than 0 have " + count + " number";
}

function exercise6() {
    let number = +(prompt("Enter number V"));
    let n = +(prompt("Enter amount of array"));
    let arr = [];
    let count = 0;
    let result = "V not have in array";
    for (let i = 0; i < n; i++) {
        arr[i] = +(prompt("Enter number at index " + i));
        if (arr[i] === number) {
            count++;
        }
    }
    if (count !== 0) {
        result = "V have in array"
    }
    document.getElementById("exr6_result").innerHTML = "Array: " + arr + "<br>V is: " + number + ", " + result;
}

function exercise7() {
    let number = +(prompt("Enter number V"));
    let n = +(prompt("Enter amount of array"));
    let arr = [];
    let result = [];
    for (let i = 0; i < n; i++) {
        arr[i] = +(prompt("Enter number at index " + i));
        result[i] = arr[i];
    }
    for (let i = 0; i < n; i++) {
        if (result[i] === number) {
            for (let j = i; j < result.length - 1; j++) {
                result[j] = result[j + 1];
            }
            result[result.length - 1] = 0;
        }
    }
    document.getElementById("exr7_result").innerHTML = "Array before: " + arr + "<br>V is: " + number + "<br>Array after: " + result;
}

function exercise8() {
    let n = +(prompt("Enter amount of array"));
    let arr = [];
    let result = [];
    let tam = null;
    for (let i = 0; i < n; i++) {
        arr[i] = +(prompt("Enter number at index " + i));
        result[i] = arr[i];
    }
    for (let i = 0; i < result.length - 1; i++) {
        for (let j = i + 1; j < result.length; j++) {
            if (result[i] >= result[j]) {
                tam = result[i];
                result[i] = result[j];
                result[j] = tam;
            }
            console.log(result)
        }
    }
    document.getElementById("exr8_result").innerHTML = "Array before: " + arr + "<br>Array after: " + result;
}

function exercise9() {
    let n = +(prompt("Enter amount of array a and b (array c with have double)"));
    let arrA = [];
    let arrB = [];
    let arrC = [];
    for (let i = 0; i < n; i++) {
        arrA[i] = +(prompt("Enter number for array a at index " + i));
        arrC[i] = arrA[i];
    }
    for (let i = 0; i < n; i++) {
        arrB[i] = +(prompt("Enter number for array b at index " + i));
        arrC[i + n] = arrB[i];
    }
    document.getElementById("exr9_result").innerHTML = "Array a: " + arrA + "<br>Array b: " + arrB + "<br>Array c: " + arrC;
}