const path = require('path');
const fs = require('fs');
const uuid = require('uuid/v4');

const dbPath = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'users.json'
);

class User {
    constructor(nick, email, password, id) {
        if(!id) this.id = uuid();
        else this.id = id;
        this.nick = nick;
        this.email = email;
        this.password = password;
    }

    static getById(id){
        return readUsers()
        .then((users) =>{
            return users.find(function (element){
                return element.id == id;
            });
        })
        .catch((err) => {
            console.log(err);
        });
    }

    save() {
        readUsers()
        .catch((err) => {
            console.log(err);
            return [];
        })
        .then((users) => {
            users.push(this);
            writeUsers(users);
            //fs.writeFileSync(dbPath, JSON.stringify(users));
        });
    }

    static show() {
        return readUsers();
    }
}

const readUsers = () => {
    return new Promise((resolve, reject)=>{
        fs.readFile(dbPath, (err, data)=>{
            if(err) return reject(err);
            return resolve(JSON.parse(data.toString()));
        })
    });
}

const writeUsers = (users) => {
    return new Promise((resolve, reject)=>{
        users.push(this);
        fs.writeFile(dbPath, JSON.stringify(users), (err, data) => {
            if (err) console.err(err);
            else console.log('Saved!');
        });
    })
};


module.exports = User;