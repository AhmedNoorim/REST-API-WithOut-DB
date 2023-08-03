const { v4: uuidv4 } = require("uuid")

const users = [
    {
        id: uuidv4(),
        username: "ahmed noorim",
        email: "noorim@email.com"
    },
    {
        id: uuidv4(),
        username: "raina nusrat",
        email: "raina@email.com"
    },
    {
        id: uuidv4(),
        username: "shaheda afrin",
        email: "afrin@email.com"
    },
    {
        id: uuidv4(),
        username: "mohammad muammil",
        email: "muzammila@email.com"
    },
    {
        id: uuidv4(),
        username: "aurpita das",
        email: "aurpita@email.com"
    },
]

module.exports =users
