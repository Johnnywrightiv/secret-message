let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log(secretMessage);

//remove last string of array
secretMessage.pop();
console.log(secretMessage);

// add to end of array
secretMessage.push('to', 'Program');
console.log(secretMessage);

// reassign index 7
secretMessage[7] = 'right';
console.log(secretMessage);

// remove first item in array
secretMessage.shift();
console.log(secretMessage);

// add 'Programming' to begining of array
secretMessage.splice(0, 0, 'Programming');
console.log(secretMessage);

// replaces multiple index
secretMessage.splice(6, 5, 'know');
console.log(secretMessage);

console.log(secretMessage.join(' '));
