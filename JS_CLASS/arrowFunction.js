const greeting  = function (name){
    return `Hi, ${name}`;
}

const newGreeting = (name) => {
    return `Hi, ${name}`;
}

const newGreetingImplicit = name => `Hi, ${name}`;

//lexical binding

const finctionalCharacter = {
        name: 'Uncle Ben',
        messageWithTraditionalFunction: function (message) {
            console.log(`${this.name} says: ${message}`);
        },

        messageWithArrowFunction: (message) => {
            console.log(`${this.name} says: ${message}`)
        }
}

finctionalCharacter.messageWithTraditionalFunction('With great power comes great responsability');
finctionalCharacter.messageWithArrowFunction('Beware of Doctor Octopus'); 