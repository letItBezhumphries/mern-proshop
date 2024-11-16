import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Joey Baloney",
    email: "baloney@example.com",
    password: bcrypt.hashSync("1234abcd", 10),
  },
  {
    name: "Jenna Jaloney",
    email: "jaloney@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
