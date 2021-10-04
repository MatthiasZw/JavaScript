var users = [
    {
        id:1,
        name:"Andreas",
        alter:35,
    },
    {
        id:2,
        name:"Petra",
        alter:40,
    },
    {
        id:3,
        name:"John",
        alter: 45,
    },
];

//Klassich mit reduce
/* var gesAlter = users.reduce( function(sum, user){
    return sum + user.alter;
}, 0 ); 
 */
// 0, damit das alter als Integer geliefert wird = Startwert dieser Eigenschaft

//Arrow-funktion

var gesAlter = users.reduce( (sum, user) => sum + user.alter, 0 )

console.log(gesAlter);