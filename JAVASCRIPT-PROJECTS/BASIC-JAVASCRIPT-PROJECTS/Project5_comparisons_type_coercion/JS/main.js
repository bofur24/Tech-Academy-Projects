// Type coercion is the automatic or implicit conversion of values from one data type to another. In JavaScript, this can lead to some unexpected results when performing operations on different types of data.
// In this example, the number 4 is coerced into a string and concatenated with "3", resulting in "34". Then, the number 5 is coerced into a string and concatenated with "34", resulting in "345".
document.write("3" + 4 + 5 + "<br>"); // "345"

// The isNaN() function determines whether a value is NaN (Not-a-Number) or not. In this case, since "This is a string" cannot be converted to a number, it returns true. However, when we check if 123 is NaN, it returns false because 123 is a valid number.
function notANumber() {
    var a = "This is a string";
    document.getElementById("notANumber").innerHTML = isNaN("This is a string"); // true
}

// The isNaN() function determines whether a value is NaN (Not-a-Number) or not. In this case, since 123 is a valid number, it returns false.
function notANumber2() {
    var b = 123;
    document.getElementById("notANumber2").innerHTML = isNaN(123); // false
} 

// In JavaScript, the largest representable number is approximately 1.7976931348623157e+308. If you try to use a number larger than this, it will be represented as Infinity. In this case, 2E310 is much larger than the maximum representable number, so it is displayed as Infinity.
function showInfinity() {
    var c = 2E310;
    document.getElementById("infinity").innerHTML = c;
}  

// In JavaScript, the smallest representable number is approximately -1.7976931348623157e+308. If you try to use a number smaller than this, it will be represented as -Infinity. In this case, -2E310 is much smaller than the minimum representable number, so it is displayed as -Infinity.
function showNegInfinity() {
    var d = -2E310;
    document.getElementById("negInfinity").innerHTML = d;
}

// In JavaScript, the + operator can be used for both addition and string concatenation. When you use it with numbers, it performs addition. When you use it with strings, it performs concatenation. In this case, since both operands are numbers, it will perform addition and return 12. The < operator is a comparison operator that checks if the left operand is less than the right operand. In this case, 10 is not less than 2, so it returns false.
function booleanLogic() {
    document.getElementById("booleanLogic").innerHTML = (10 > 2); // true
}



// In JavaScript, the + operator can be used for both addition and string concatenation. When you use it with numbers, it performs addition. When you use it with strings, it performs concatenation. In this case, since both operands are numbers, it will perform addition and return 12. The < operator is a comparison operator that checks if the left operand is less than the right operand. In this case, 10 is not less than 2, so it returns false.  
console.log(10 + 2); // 12
console.log(10 < 2); // false

// The == operator is a comparison operator that checks if the values of the operands are equal, regardless of their data types. In this case, 10 is equal to 10, so it returns true. The === operator is a strict equality operator that checks if the values and data types of the operands are equal. In this case, since both operands are numbers and have the same value, it also returns true.
document.write(10 == 10); // 10
document.write("<br>" + " 10 == 10 is true "); // true    

// The === operator is a strict equality operator that checks if the values and data types of the operands are equal. In this case, since both operands are numbers and have the same value, it returns true. The == operator is a comparison operator that checks if the values of the operands are equal, regardless of their data types. In this case, 10 is equal to 10, so it also returns true.
document.write(10 === 10); // 10
document.write("<br>" + " 10 === 10 is true "); // true

document.write(10 === 11); // false
document.write("<br>" + " 10 === 11 is false "); // false

document.write(10 === "10"); // false
document.write("<br>" + " 10 === '10' is false "); // false

document.write(11 === 12); // false
document.write("<br>" + " 11 === 12 is false "); // false

// The || operator is a logical OR operator that returns true if at least one of the operands is true. In this case, since 5 is not greater than 10 and 10 is not greater than 20, both operands are false, so it returns false.
document.write(5 > 10 || 10 > 20); // false
document.write("<br>" + " 5 > 10 || 10 > 20 is false "); // false


// function that demonstrates the use of the logical NOT operator (!). The ! operator negates the value of a boolean expression. In this case, since 20 is greater than 10, the expression (20 > 10) evaluates to true. When we apply the ! operator to it, it negates the value and returns false.
function not_Function(){
    document.getElementById("Not").innerHTML = !(20 > 10); // false
}

function not_Function2(){
    document.getElementById("Not2").innerHTML = !(5 > 10); // true
}