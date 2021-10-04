var users = [
    {
        id:1,
        name:"Andreas",
    },
    {
        id:2,
        name:"Petra",
    },
    {
        id:3,
        name:"John",
    },
];

//klassich: 
/* var userIds =[];
users.forEach(function(user){
    userIds.push(user.id);
}); */

//mit map()
/* var userIds = users.map(function(user){
    return user.id;
}); */

// mit Arrow-Funktion

var userIds = users.map(user => user.id);

( ) => //ohne Parameter
einem => // mit einem Parameter
(zwei, oder, mehr) => //mit zwei oder mehr Parametern


console.log(userIds);