// const { emailTemplate } =  require('./js-fundation/01-template');
// require('./js-fundation/02-destructuring');
// const { getUserById } = require('./js-fundation/03-callbacks');
const { getUserById } = require('./js-fundation/04-arrow');

//console.log(emailTemplate);


const id = 1;

getUserById(id, (error, user) => {
    if(error) {
        throw new Error(error);
    }

    console.log(user);
});