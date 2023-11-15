const users = [
    { name: "Zuhriddin", lastname: "Otamirzayev" },
    { name: "Hushnudbek", lastname: "Abdurahimov" },
    { name: "Temur", lastname: "Odilov" },
]

function getUsers() {
    setTimeout(() => {
        let result = ''
        users.forEach((i) => {
            result += `
                <h2>${i.name} ${i.lastname}</h2>
            `
        })
        document.body.innerHTML = result
    }, 1000)
}

function AddUser(user, callback) {
    setTimeout(() => {
        users.push(user)
        callback()
    }, 2000)
}

AddUser({ name: "Murodilla", lastname: "Jobirov" }, getUsers)