var users = [
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
users.forEach(function (user) {
    console.log("ID: ".concat(user.id, ", Name: ").concat(user.name, ", Email: ").concat(user.email));
});
