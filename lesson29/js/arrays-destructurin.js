var students = ["Jhon", "Drin"];

var [s1, s2] = students;
console.log("sutendt 1:  ", s1)
console.log("sutendt 2:  ", s2)

var places = ["Pondon", "Paris", "New York", "Berlin"];
var [firstPlace, ,secondPlace] = places;
console.log("Second place:  " Second);

var number = [1, 2, 3, 4 ,5 ,6 ,7 ,8 ,9, 110];
var [first, Second, ...othernumber] = number;
console.log("First:  ", first);
console.log("Second:  ", Second);
console.log("rest:  ", othernumber);