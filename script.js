const formulario = document.getElementById('formulario');
const campos = formulario.querySelectorAll('input, select');
const mensagemSucesso = document.createElement('p');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário para ser validado

    let valido = true; // Variável para controlar se o formulário é válido
    let camposInvalidos = []; // Lista de campos inválidos

    // Verificando os campos
    campos.forEach(campo => {
        if (!campo.value.trim()) {
            valido = false;
            camposInvalidos.push(campo);
            campo.style.border = '1px solid red';
        } else {
            campo.style.border = '';
        }
    });

    // Se o formulário for válido, mensagem de sucesso
    if (valido) {
        mensagemSucesso.textContent = 'Formulário enviado com sucesso!';
        mensagemSucesso.style.color = 'blue';
        formulario.appendChild(mensagemSucesso);
        formulario.reset(); // Limpa o formulário após o envio
    } else {
        // Se algum campo estiver vazio, vai aparecer um alerta
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
});
