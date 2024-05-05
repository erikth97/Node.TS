// Factory Functions: son funciones que crean funciones a partir de si mismas
const { getAge, getUUID } = require('../plugins');


const buildPerson = ({name, bithday}) => {

    return {
        id: getUUID(),
        name: name,
        bithday: bithday,
        age: getAge(bithday),
    }
}


const obj = { name: 'Erik', bithday: '1997-11-10'};

const Erik = buildPerson( obj );

console.log(Erik);