interface User {
    id: number;
    name: string;
    email: string;
}

let users: User[] = [
    {
        id: 95,
        name: "Praneeth",
        email: "praneeth@gmail.com"
    },
    {
        id: 96,
        name: "John",
        email: "john@gmail.com"
    },
    {
        id: 97,
        name: "Sarah",
        email: "sarah@gmail.com"
    },
    {
        id: 98,
        name: "Mike",
        email: "mike@gmail.com"
    }
];

users.forEach(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);
});

