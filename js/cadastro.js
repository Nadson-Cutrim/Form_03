
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

//Função para formatar CPF
function formatarCEP(cep) {
    cep = cep.replace(/\D/g, '') // remove todos os caracteres que não são números
    return cep
}

document.getElementById('cep').addEventListener('input', function () {
    this.value = formatarCEP(this.value)
})

function formatarTexto(texto) {
    texto = texto.replace(/[^a-zA-ZÀ-ÿ\s]/g, '') // Remove tudo que não for letra ou espaço
    return texto
}

document.getElementById('nome').addEventListener('input', function () {
    this.value = formatarTexto(this.value)
})

document.addEventListener('DOMContentLoaded', () => {
    const setNome = document.getElementById('nome')
    const setDate = document.getElementById('date')
    const setCPF = document.getElementById('cpf')
    const setSexo = document.getElementById('sexo')

    const setEmail = document.getElementById('email')
    const setTel = document.getElementById('tel')
    const setSenha = document.getElementById('senha')
    const setConfirSenha = document.getElementById('confirSenha')

    const setCep = document.getElementById('cep')
    const setRua = document.getElementById('rua')
    const setCidade = document.getElementById('cidade')
    const setNum = document.getElementById('num')
    const setEstato = document.getElementById('estado')

    const setFront = document.getElementById('front')
    const setBack = document.getElementById('back')
    const setFull = document.getElementById('full')
    const setJogos = document.getElementById('jogos')
    const setUx = document.getElementById('ux')

    const setRadio = document.querySelectorAll('input[type="radio"]')

    console.log(setRadio)
    
    setRadio.forEach(radio => {
        if (radio.checked) {
            console.log(radio.value)
        }
    })



})