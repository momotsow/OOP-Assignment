
 class Person {
    constructor(fullName, lastName, age, gender, interest){
        this.name = fullName;
        this.surname = lastName;
        this.age = age;
        this.gender = gender;
        this.interest = interest;
        this.greet = "Hi, my name is " + fullName + ".";
        }
    }

var firstPerson = new Person("Khomotso", "Mkansi", 21, "female", "reading books and listening to music"); 

console.log("hi "+firstPerson.greet+".");
console.log(firstPerson);

 var secondPerson = new Person("Prudence", "Mathebula", 15, "male", "playing chess and coding"); 

 console.log("Hi, my name is " + secondPerson.name + " " + secondPerson.surname + ", I am " + secondPerson.age + " and my interests are " + secondPerson.interest + "."  + secondPerson.greet);
 console.log(secondPerson);
