// Ride function as a ternary operator
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// Vote function as a ternary operator
function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

// Keywords and constructors function
function myFunction() {
    function Vehicle(Make, Model, Year, Color) {
        this.Vehicle_Make = Make;
        this.Vehicle_Model = Model;
        this.Vehicle_Year = Year;
        this.Vehicle_Color = Color;
    }
    var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
    var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
    var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

// Person constructor function
function thisFunction () {
    function Person (first, last, age) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.fullName = function() {
            return this.firstName + " " + this.lastName;
        };
    }
    var person = new Person(document.getElementById("first").value, document.getElementById("last").value, document.getElementById("age").value);
    document.getElementById("Person_Constructor").innerHTML = "Hello " + person.fullName() + ", you are " + person.age + " years old.";
}

// Nested function
function count_function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point -= 1;}
        Plus_one();
        return Starting_point;
    }
}
