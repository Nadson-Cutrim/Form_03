
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

//Função para validar o CPF 

function validaNumerosRepetidos(cpf) {
    const numerosRepetidos = [
        '00000000000', '11111111111', '22222222222',
        '33333333333', '44444444444', '55555555555',
        '66666666666', '77777777777', '88888888888',
        '99999999999'
    ]
    return numerosRepetidos.includes(cpf)
}

function validaPrimeiroDigito(cpf) {
    let soma = 0, multiplicador = 10
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf[i]) * multiplicador--
    }
    let resto = (soma * 10) % 11
    return resto === 10 || resto === 11 ? 0 : resto !== parseInt(cpf[9])
}

function validaSegundoDigito(cpf) {
    let soma = 0, multiplicador = 11
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf[i]) * multiplicador--
    }
    let resto = (soma * 10) % 11
    return resto === 10 || resto === 11 ? 0 : resto !== parseInt(cpf[10])
}

function ehUmCPF(cpfValue) {
    const msg_span = document.querySelector('.mensagem-erro');

    const cor = (validaNumerosRepetidos(cpfValue) || validaPrimeiroDigito(cpfValue) || validaSegundoDigito(cpfValue))
        ? '#DC2626'
        : '#16A34A'

    const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50"><path fill="${cor}" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"/><path fill="${cor}" d="M24 32h2v2h-2zm1.6-2h-1.2l-.4-8v-6h2v6z"/></svg>`

    const mensagem = (cor === '#DC2626') ? 'O CPF não existe' : 'O CPF é válido'

    msg_span.innerHTML = `${icon} ${mensagem}`
    msg_span.style.color = cor
}


document.getElementById('cpf').addEventListener('input', (e) => {
    let cpfValue = e.target.value.replace(/\D/g, '')
    if (cpfValue.length === 11) {
        ehUmCPF(cpfValue);
    }
})

//Função para formatar CEP

function formatarCEP(cep) {
    cep = cep.replace(/\D/g, '') // remove todos os caracteres que não são números
    return cep
}

document.getElementById('cep').addEventListener('input', function () {
    this.value = formatarCEP(this.value)
})

//Função para formatar NOMES

function formatarTexto(texto) {
    texto = texto.replace(/[^a-zA-ZÀ-ÿ\s]/g, '') // Remove tudo que não for letra ou espaço
    return texto
}

document.getElementById('nome').addEventListener('input', function () {
    this.value = formatarTexto(this.value)
})

//Função para validção das senhas

const setSenha1 = document.getElementById('senha')
const setSenha2 = document.getElementById('confirSenha')

function validate() {
    if (setSenha1.value === setSenha2.value) {
        setSenha2.setCustomValidity('')
    } else {
        setSenha2.setCustomValidity('As senhas digitadas não conferem')
    }
    setSenha2.reportValidity()
}

setSenha2.addEventListener('input', validate)

//Função para formatar o TELEFONE

function formatarTelefone(telefone) {
    telefone = telefone.replace(/\D/g, '') // remove todos os caracteres que não são números
    telefone = telefone.replace(/^(\d{2})(\d)/, '($1) $2') // adiciona parênteses e espaço
    telefone = telefone.replace(/(\d{4})(\d{4})$/, '$1-$2') // adiciona hífen
    return telefone
  }
  document.getElementById('tel').addEventListener('input', function(){
    this.value = formatarTelefone(this.value)
})

//Função para formatar E-mail

function formatarEmail(){

    document.getElementById('email').addEventListener('input',() => {
        
    })
}