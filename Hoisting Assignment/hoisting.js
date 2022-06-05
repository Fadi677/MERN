// GIVEN
// console.log(example);
// var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

// var example;
// console.log(example);
// example = "I'm the example!";
// undefined

// console.log(example);
// let example = "I'm the example!";    

// let example;
// console.log(example);
// example = "I'm the example!";
// undefined

//111111111111111111111111111111
// console.log(example);
// example = "I'm the example!";
//it's seen as it is in the interpreter
//error

//222222222222222222222222222222
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
//it's written the same
//output: magnet

//333333333333333333333333333333
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

//read as:
// var brendan = 'super cool';
// console.log(brendan);
//output: super cool

//444444444444444444444444444444
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// //read as:
// var food = 'chicken';
// console.log(food);
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// eat();
//output: chicken
//        half-chicken

//555555555555555555555555555555
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

//read as it is

//error: mean isn't a function

// mean();
// // console.log(food);
// function mean() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// // console.log(food);

//666666666666666666666666666666
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

//read as:
// var genre;
// console.log(genre);
// genre = "disco";
// function rewind() {
//     var genre;
//     genre = "rock";
//     console.log(genre);
//     genre = "r&b";
//     console.log(genre);
// }
// rewind();
// console.log(genre);

//output: undefined, rock, r&b, disco

//777777777777777777777777777777
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

//read as:
// var dojo;
// dojo = "san jose";
// console.log(dojo);
// function learn() {
//     var dojo;
//     dojo = "seattle";
//     console.log(dojo);
//     dojo = "burbank";
//     console.log(dojo);
// }
// learn();
// console.log(dojo);

//output: sand jose, seattle, burbank, san jose

//888888888888888888888888888888
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     var dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }