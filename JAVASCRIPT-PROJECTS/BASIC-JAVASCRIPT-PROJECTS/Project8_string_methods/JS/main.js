// Concat() Method
function concatenateStrings() {
    var str1 = "Hello ";
    var str2 = "World!";
    var result = str1.concat(str2);
    document.getElementById("stringOutput").innerHTML = result; // Output: "Hello World!"
}

// Slice() Method
function sliceString() {
    var str = "JavaScript is awesome!";
    var result = str.slice(0, 10);
    document.getElementById("sentence").innerHTML = str; // Output: "JavaScript is awesome!"
    document.getElementById("sliceOutput").innerHTML = result; // Output: "JavaScript"
}

// toUpperCase() Method
function convertToUpperCase() {
    var str = "hello world";
    var result = str.toUpperCase();
    document.getElementById("word").innerHTML = str; // Output: "hello world"
    document.getElementById("upperOutput").innerHTML = result; // Output: "HELLO WORLD"
}   

// Search() Method
function searchWord() {
    var str = "The quick brown fox jumps over the lazy dog.";   
    var result = str.search("quick");
    document.getElementById("searchInput").innerHTML = str; // Output: "The quick brown fox jumps over the lazy dog."
    document.getElementById("searchOutput").innerHTML = result; // Output: 4 (index of the first occurrence of "quick")
}

// toString() Method
function stringNumber() {
    var num = 12345;
    var result = num.toString();
    document.getElementById("stringNum").innerHTML = num; // Output: 12345
    document.getElementById("numOutput").innerHTML = result; // Output: "12345"
}   

// Precision() Method
function precision_Method() {
    var num = 123.456789;
    var result = num.toPrecision(6);
    document.getElementById("precisionOutput").innerHTML = result; // Output: "123.457"
}

// toFixed() Method
function Fix_Method() {
    var num = 123.456789;
    var result = num.toFixed(2);
    document.getElementById("fixOutput").innerHTML = result; // Output: "123.46"
}

// valueOf() Method
function valueof_Method() {
    var str = "Hello World!";
    var result = str.valueOf();
    document.getElementById("valueOfOutput").innerHTML = result; // Output: "Hello World!"
}
