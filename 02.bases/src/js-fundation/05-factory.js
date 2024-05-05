// Factory Functions: son funciones que crean funciones a partir de si mismas
const { v4: uuidv4 } = require('uuid');
const getAge = require('get-age');


const buildPerson = ({name, bithday}) => {

    return {
        id: uuidv4(),
        name: name,
        bithday: bithday,
        age: getAge(bithday),
    }
}


const obj = { name: 'Erik', bithday: '1997-11-10'};

const Erik = buildPerson( obj );

console.log(Erik);