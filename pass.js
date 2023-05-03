document.title = "SHOW PASSWORD"

const passwordInput = document.getElementById("password")


const togglePassword = () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text"
        label.textContent = "Show Password"
    } else {
        passwordInput.type = "password" 
        label.textContent = "Hide Password"
    }
}