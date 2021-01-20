const LocalStorageApi = {
    addToken: function(token) {
        localStorage.setItem('token', token);
    },
    getToken: function() {
        return localStorage.getItem('token')
    },
    deleteToken: function() {
        localStorage.removeItem('token')
    }
}

export default LocalStorageApi