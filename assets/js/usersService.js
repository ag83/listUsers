module.exports = function ($rootScope) {

    // test users
    var users = [{id:0, userName:'Test User1', userEmail:'user1@mail.com', userTel:'11-22-33-44', userStreet:'Example str', userCity: 'DefaultCity', userState:'State', userZip:'2948'},
        {id:1, userName:'Test User2', userEmail:'user2@mail.com', userTel:'11-22-33-44', userStreet:'Example str', userCity: 'DefaultCity', userState:'State', userZip:'2948'},
        {id:2, userName:'Test User3', userEmail:'user3@mail.com', userTel:'11-22-33-44', userStreet:'Example str', userCity: 'DefaultCity', userState:'State', userZip:'2948'}];

    function getUsers() {
        return users;
    }

    function setUser(user) {
        if (users.length >0) {
            user.id = users[users.length-1].id + 1;
        } else {
            user.id = 0;
        }
        users.push(user);
        $rootScope.$broadcast('usersUpdated');
    }

    function updateUser(user) {
        var id = +user.id;
        for (var i=0; i<users.length; i++) {
            if (users[i].id === id) {
                users[i] = user;
            }
        }
    }

    function deleteUser(user) {
        var id = +user.id;
        for (var i=0; i<users.length; i++) {
            if (users[i].id === +id) {
                users.splice(i, 1);
            }
        }
        $rootScope.$broadcast('usersUpdated');
    }

    return {
        getUsers: getUsers,
        setUser: setUser,
        updateUser: updateUser,
        deleteUser: deleteUser
    };
};