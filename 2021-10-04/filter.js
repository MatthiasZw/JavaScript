var users = [
    {
        id:1,
        name:"Andreas",
        alter:35,
        geschlecht:"m",
    },
    {
        id:2,
        name:"Petra",
        alter:40,
        geschlecht:"w",
    },
    {
        id:3,
        name:"John",
        alter: 45,
        geschlecht:"m",
    },
];


//klassische filter()-Funktion
/* var maennlich = users.filter( function(user) {
    return user.geschlecht === "m";

}); */

//Arrow-Funktion
var maennlich = users.filter( (user) => user.geschlecht === "m");

// Verkettung

var alterMaennlich = users.filter( (user) => user.geschlecht === "m").reduce(  (sum, user) =>  sum + user.alter, 0 );

console.log(maennlich);
console.log(alterMaennlich);

