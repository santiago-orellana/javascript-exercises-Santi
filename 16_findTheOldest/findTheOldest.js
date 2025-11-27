const getAge = function (birth, death) {
    if(!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}


const findTheOldest = function(people) {
    
    let i = 1;
    return people.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(
            currentPerson.yearOfBirth, 
            currentPerson.yearOfDeath
        );
        
        console.log(i + '. Oldest: ', oldestAge);
        console.log(i + '. Current: ', currentAge);
        i++;
        return oldestAge < currentAge ? currentPerson : oldest;
    });

    
    // console.log(persons);

    // let age = 0;
    // let oldestPerson;
    // persons.forEach(person => {
    //     if(person.yearOfDeath == "undefined") {
    //         person.yearOfDeath = getFullYear();
    //     }
    //     console.log("Nombre: " + person.name + ". Edad: " + (person.yearOfDeath - person.yearOfBirth));        
    //     if(age < (person.yearOfDeath - person.yearOfBirth)){
    //         oldestPerson = person;
    //         age = (person.yearOfDeath - person.yearOfBirth);
    //     }
    // });

    // return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
