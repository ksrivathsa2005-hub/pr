interface User {
    id: number;
    name: string;
    email: string;

}

let user: User = {
    id: 95,
    name: "Praneeth",
    email: "praneeth@gmail.com"
};
console.log(user.name, user.id, user.email);
