import { v4 as uuidv4 } from 'uuid';

let users = []; 


export const getUsers = (req, res) => {
    res.send(users);
};

export const createUser = (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4() });

    res.send(`User added to the system: ${user.firstName}`);
}

export const getUser = (req, res) => {
    const { id } = req.params;

    // Найдем пользователя по идентификатору
    const foundUser = users.find((user) => user.id === id);

    if (foundUser) {
        res.send(foundUser);
    } else {
        res.status(404).send('User not found');
    }
};

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with id ${id} deleted from the database`);
};

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    
    // Найдем пользователя по идентификатору
    const user = users.find((user) => user.id === id);

    if (!user) {
        return res.status(404).send('User not found');
    }

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.send(`User with the id ${id} has been updated`);
};
