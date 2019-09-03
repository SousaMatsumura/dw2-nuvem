const path = require('path');
const fs = require('fs');

const dbPath = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'users.json'
);

class User {
    constructor(nick, email, password) {
        this.nick = nick;
        this.email = email;
        this.password = password;
    }

    save() {
        /**
         * Deveria usar metódos assincronos
         */

        let users = readUsers();
        users.push(this);
        fs.writeFileSync(dbPath, JSON.stringify(users));
    }

    static show() {
        let users = readUsers();
        return users;
    }

}

const readUsers = () => {
    let users = [];
    try {
        let data = fs.readFileSync(dbPath);
        if (data) users = JSON.parse(data.toString());
    } catch (e) { };
    return users;
}

module.exports = User;