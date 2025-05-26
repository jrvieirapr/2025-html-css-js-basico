// Ola mundo
console.log('Ola, mundo!')

// Função responsavel por carregar o HTMl e mostrar no Container
function carregarPagina(pagina){
    fetch(pagina)
    .then((response) => response.text())
    .then((html) =>{
        document.getElementById('content').innerHTML = html
    })
    .catch((error) => console.error("Erro ao carregar pagina: ",error))

}
