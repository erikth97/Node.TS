// const { emailTemplate } =  require('./js-fundation/01-template');
// require('./js-fundation/02-destructuring');
const { getUserById } = require('./js-fundation/03-callbacks');

//console.log(emailTemplate);


const id = 1;

getUserById(id, function(error, user) {
    if(error) {
        throw new Error(error);
    }

    console.log(user);
});