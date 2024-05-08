import { buildLogger } from "./plugins/logger.plugin"
// const { getAge, getUUID } = require('./plugins');


// // const { emailTemplate } =  require('./js-fundation/01-template');
// // require('./js-fundation/02-destructuring');
// // const { getUserById } = require('./js-fundation/03-callbacks');
// // const { getUserById } = require('./js-fundation/04-arrow');
// // const { buildMakePerson } = require('./js-fundation/05-factory')
// // const getPokemonById = require('./js-fundation/06-promises');
// const {buildLogger} = require('./plugins');

const logger = buildLogger('app.js');

logger.log('funciona correctamente')
logger.error('Esto es un error');


// // getPokemonById(5) 
// //     .then((pokemon) => console.log({pokemon}))
// //     .catch((err) => console.error('intenta de nuevo'))
// //     .finally(() => console.log('Finalmente'))






// // ! Referencia  a la funcion factory y uso
// // const makePerson = buildMakePerson({ getUUID, getAge });

// // const obj = { name: 'Erik', birthdate: '1997-11-10' };

// // const erik = makePerson( obj );

// // console.log({ erik });


