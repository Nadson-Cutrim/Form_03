
//Função para formatar CPF
function formatarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '') // remove todos os caracteres que não são números
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2') // adiciona o primeiro ponto
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2') // adiciona o segundo ponto
    cpf = cpf.replace(/(\d{3})(\d{2})$/, '$1-$2') // adiciona o hífen
    return cpf
}

document.getElementById('cpf').addEventListener('input', function () {
    this.value = formatarCPF(this.value)
})


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-login')

    form.addEventListener('submit', function (event) {
        const cpfInput = document.getElementById('cpf')
        const senhaInput = document.getElementById('senha')

        let isValid = true

        // Validação do CPF
            if (!cpfInput.value || cpfInput.value.length !== 14) {
            alert('CPF inválido. Use o formato: 000.000.000-00')
            isValid = false
        }

        // Validação da senha
        if (senhaInput.value.length < 8) {
            alert('A senha deve ter no mínimo 8 caracteres.')
            isValid = false
        }

        // Impedir envio do formulário se houver erros
        if (!isValid) {
            event.preventDefault()
        }
    })
})

// Autenticação do usuário
// Verifica se o usuário já está cadastrado no localStorage
// Caso contrário, exibe uma mensagem de erro
const loginForm = document.getElementById('form-login');
const cpfInput = document.getElementById('cpf');
const senhaInput = document.getElementById('senha');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const cpfValue = cpfInput.value;
    const senhaValue = senhaInput.value;

    const storedData = JSON.parse(localStorage.getItem('formData')) || {};

    if (cpfValue === storedData.cpf && senhaValue === storedData.senha) {
        alert('Login realizado com sucesso!');
        window.location.href = 'trilhas.html';
    } else {
        alert('CPF ou senha inválidos!');
    }
});

