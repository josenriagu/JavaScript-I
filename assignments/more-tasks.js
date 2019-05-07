const friends = [
    { name: 'Monica', gender: 'F' },
    { name: 'Chandler', gender: 'M' },
    { name: 'Ross', gender: 'M' },
    { name: 'Phoebe', gender: 'F' },
    { name: 'Joey', gender: 'M' },
    { name: 'Rachel', gender: 'M' }
  ];


  
let femaleFriends = [];
for (i = 0; i < friends.length; i++) {
    gender = friends[i].gender;
    if (gender === "F"){
        femaleFriends.push(friends[i]);
    }
}

let output = function (person){
    return person.gender === "F";
}

femaleFriends = friends.filter((person) => { // ES6+
    return output(person);
}); // finish this

femaleFriends = friends.filter(function(person) { // <= ES5
    return output(person);
});

femaleFriends = friends.filter(person => output(person)); // ^ ES6

console.log(femaleFriends);