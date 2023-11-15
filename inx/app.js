

const SignUp = () => {
    const LoginReg = document.getElementById("loginReg").value;
    const ParolReg = document.getElementById("parolReg").value;
    const result = document.getElementById("resulReg");

    localStorage.setItem("login", LoginReg)
    localStorage.setItem("parol", ParolReg)
    result.innerText = "Ro'yhatdan o'tdingiz"



}


function Signin() {
    const Login = document.getElementById("login").value;
    const Parol = document.getElementById("parol").value;
    const result = document.getElementById("result");

    let LoginR = localStorage.getItem("login")
    let ParolR = localStorage.getItem("parol")

    if (Login === LoginR && Parol === ParolR) {
        result.innerText = "Logon va Parol To'g'ri"
        window.location = "../app/index.html"
    } else {
        result.innerText = "Logon yoki Parol noto'g'ri"
    }

}

function Clear() {
    localStorage.removeItem("login")
    localStorage.removeItem("parol")
}



const h1 = document.getElementById('h1');
let date = new Date()
switch (date.getDay()) {
    case 0:
        day = "Yakshanba"
        break
    case 1:
        day = "Dushanba"
        break
    case 2:
        day = "Seshanba"
        break
    case 3:
        day = "Chorshanba"
        break
    case 4:
        day = "Payshanba"
        break
    case 5:
        day = "Juma"
        break
    case 6:
        day = "Shanba"
        break

}

h1.innerHTML = day

