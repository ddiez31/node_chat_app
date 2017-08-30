const expect = require('expect');
const {Users} = require('./users');


describe('Users', () => {
    let users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: 1,
      name: 'Bob',
      room: 'Simplon'
    },
    {
      id: 2,
      name: 'Mike',
      room: 'Simplon'
    },
    {
      id: 3,
      name: 'Steve',
      room: 'ERN'
    }];
  });

  it('should add a new user', () => {
    let users = new Users();
    let user = {
      id: '123',
      name: 'Bob',
      room: 'Simplon'
    };

    let resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('should return names for Simplon room', () => {
    let userList = users.getUserList('Simplon');
    expect(userList).toEqual(['Bob', 'Mike']);
  });

  it('should return names for ERN room', () => {
    let userList = users.getUserList('ERN');
    expect(userList).toEqual(['Steve']);
  });

  it('should remove user', () => {
    let removedUser = users.removeUser(1);
    expect(removedUser.name).toEqual('Bob');
    expect(users.users.length).toEqual(2);
  });

  it('should not remove unknow user', () => {
    let removedUser = users.removeUser(4);
    expect(users.users.length).toEqual(3);
  });

  it('should find user', () => {
    let foundUser = users.getUser(1);
    expect(foundUser.name).toEqual('Bob');
  });

  it('should not find invalid user', () => {
    let foundUser = users.getUser(4);
    expect(foundUser).toBe(undefined);
  });
});
