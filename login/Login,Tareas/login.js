// Objeto JSON para almacenar correos y contraseñas
const usuarios = {
    "usuario1@example.com": "12345",
    "usuario2@example.com": "abcde",
};

// Función para manejar el inicio de sesión
function iniciarSesion(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (usuarios[email] && usuarios[email] === password) {
        alert("Inicio de sesión exitoso.");
        window.location.href = "file:///C:/login/Login,Tareas/Tareas.html"; // Redirige a otra página
    } else {
        alert("Correo o contraseña incorrectos. Por favor, inténtalo de nuevo.");
    }
}

// Escucha el evento submit del formulario
document.getElementById("login-form").addEventListener("submit", iniciarSesion);

