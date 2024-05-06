

const httpClientPlugin = {

    get: async(url) => {
        const resp = await fetch(url);
        return await resp.json();
    },

    post: async(utl, body) => {},
    put: async(utl, body) => {},
    delete: async(utl, body) => {},

};




module.exports = {
    http: httpClientPlugin,
}