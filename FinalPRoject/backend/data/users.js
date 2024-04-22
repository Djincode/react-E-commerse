import bcrypt from 'bcryptjs';


const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true,
    },
    {
        name: 'John Doe',
        email: 'john.doe@email.com',
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false,
    },
    {
        name: 'Make Adam',
        email: 'make.adam@email.com',
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false,
    }
]

export default users;
