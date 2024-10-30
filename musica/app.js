function atualizarLista() {
    const listaMusicas = document.getElementById('listaMusicas');
    listaMusicas.innerHTML = '';

    const musicas = JSON.parse(localStorage.getItem('musicas')) || [];

    musicas.forEach((musica, index) => {
        const li = document.createElement('li');
        li.textContent = musica;

        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.onclick = () => removerMusica(index);

        li.appendChild(btnRemover);
        listaMusicas.appendChild(li);
    });
}

function adicionarMusica() {
    const inputMusica = document.getElementById('musica');
    const musica = inputMusica.value;

    if (musica) {
        const musicas = JSON.parse(localStorage.getItem('musicas')) || [];
        musicas.push(musica);
        localStorage.setItem('musicas', JSON.stringify(musicas));
        inputMusica.value = '';
        atualizarLista();
    }
}

function removerMusica(index) {
    const musicas = JSON.parse(localStorage.getItem('musicas')) || [];
    musicas.splice(index, 1);
    localStorage.setItem('musicas', JSON.stringify(musicas));
    atualizarLista();
}

document.getElementById('addMusica').addEventListener('click', adicionarMusica);
document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem('usuario');
    window.location.href = 'login.html';
});

// Atualiza a lista ao carregar a página
if (localStorage.getItem('usuario')) {
    atualizarLista();
} else {
    window.location.href = 'login.html';
}
