function buscaCep() {
    let cep = document.getElementById("cep").value
    let estado = document.getElementById("estado")
    let cidade = document.getElementById("cidade")
    let bairro = document.getElementById("bairro")
    let logradouro = document.getElementById("logradouro")
    let cepValido = cep.substr(0,5)+ "-"+ cep.substr(5)+ ".json"
    let url = "https://cdn.apicep.com/file/apicep/"+ cepValido
    fetch(url)
        .then(res => res.json())
        .then(data => {
            estado.value = data.state
            cidade.value = data.city
            bairro.value = data.district
            logradouro.value = data.address
        })
}