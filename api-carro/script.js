let url = "./ceps.json"

    let placa = document.getElementById("placa")
    let marca = document.getElementById("marca")
    let modelo = document.getElementById("modelo")
    let ano = document.getElementById("ano")
    let cor = document.getElementById("cor")

function busca(){

    fetch(url)
        .then(res => res.json())
        .then(data => {
            for(var cep of data.ceps){
                if(placa.value == cep.placa){
                    cor.value = cep.cor
                    ano.value = cep.ano
                    marca.value = cep.marca
                    modelo.value =  cep.modelo
                    break
                }
            }
        })
}