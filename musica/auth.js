// Função para cadastrar um novo usuário
function cadastrarUsuario() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const usuarioExistente = usuarios.find(user => user.username === username);

        if (usuarioExistente) {
            alert('Usuário já existe!');
        } else {
            usuarios.push({ username, password });
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
            alert('Cadastro realizado com sucesso!');
            window.location.href = 'login.html';
        }
    }
}

// Função para fazer login
function fazerLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuario = usuarios.find(user => user.username === username && user.password === password);

    if (usuario) {
        localStorage.setItem('usuario', username);
        window.location.href = 'index.html';
    } else {
        alert('Usuário ou senha incorretos.');
    }
}

// Eventos de cadastro e login
if (document.getElementById('signupBtn')) {
    document.getElementById('signupBtn').addEventListener('click', cadastrarUsuario);
}

if (document.getElementById('loginBtn')) {
    document.getElementById('loginBtn').addEventListener('click', fazerLogin);
}
