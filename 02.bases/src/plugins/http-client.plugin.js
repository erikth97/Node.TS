const axios = require('axios');


const httpClientPlugin = {

    get: async(url) => {
        const {data} = await axios.get(url);
        return data;
        // const resp = await fetch(url);
        // return await resp.json();
    },

    post: async(utl, body) => {},
    put: async(utl, body) => {},
    delete: async(utl, body) => {},

};




module.exports = {
    http: httpClientPlugin,
}