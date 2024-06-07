window.onload = () => {
    console.log("carregou")
    const email = localStorage.getItem("email");
    console.log(email)
    const spanEmail = document.getElementById('user-email')
    spanEmail.innerText = email;

}