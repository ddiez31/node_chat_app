[{
  id:'',
  name: '',
  room: ''
}]

class Users {
  constructor() {
    this.users = [];
  }

  addUser (id, name, room) {
    let user = {
      id,
      name,
      room
    };
    this.users.push(user);
    return user;
  }

  getUser(id) {
    return this.users.filter((user) => user.id === id)[0];
  }

  removeUser (id) {
    let removedUser = this.getUser(id);
    if (removedUser) {
      this.users = this.users.filter((removedUser) => removedUser.id != id);
    }
    return removedUser;
  }

  getUserList(room) {
    let users = this.users.filter((user) => user.room === room);
    return users.map((user) => user.name);
  }
}

module.exports = {Users};
