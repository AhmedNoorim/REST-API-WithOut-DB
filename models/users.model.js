const { v4: uuidv4 } = require("uuid")

const users = [
    {
        id: uuidv4(),
        username: "ahmed noorim",
        email: "noorim@email.com"
    },
    {
        id: uuidv4(),
        username: "yeasfy abedin",
        email: "yeasu@email.com"
    },
]

module.exports =users