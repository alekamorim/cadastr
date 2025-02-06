function validar() {
    let nome = document.getElementById('nome').value;
    let senha = document.getElementById('senha').value;

    let nomeValido = /^[13579]{5}$/.test(nome);
    let senhaValido = /^[02468]{4}$/.test(senha);

    if (nomeValido && senhaValida) {
        alert('nome e senha validos!');
    } else {
        alert('nome ou senha inválidos!\n\nLembre-se:\n- O nome deve conter')
    }
}