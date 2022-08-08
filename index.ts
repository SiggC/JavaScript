         // variable: type
function log(message: string) {
    console.log(message);
}

log('Hello, TypeScript!');
// log(123); // comilation error, log only accept string arguments

function scopingIsEnforced() {

    for (var i = 0; i < 10; i++) {
        console.log(i);

    }

    // console.log(i);
}
