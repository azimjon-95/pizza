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

function AddUser(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            users.push(user)

            const error = false;

            if (!error) {
                resolve()
            } else {
                reject("Nimadur xato ketdi")
            }
        }, 2000)
    })

}

// AddUser({ name: "Murodilla", lastname: "Jobirov" })
//     .then(getUsers)
//     .catch(err => console.log(err))

async function Result() {
    await AddUser({ name: "Murodilla", lastname: "Jobirov" })


    getUsers()
}

Result()