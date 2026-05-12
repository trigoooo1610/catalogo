function alterarFundo(){
    document.body.style.backgroundColor = "black";
}

const formulario = document.getElementById('meuFormulario')
const colecao = document.getElementById('colecao');
formulario.addEventListener('submit', function(evento){
    evento.preventDefault()
    const novoTitulo = document.getElementById('titulo').value;
    const novaImagem = document.getElementById('imagem').value;
    const novoParagrafo = document.getElementById('paragrafo').value;
    const novaAvaliacao = document.getElementById('Avaliacao').value

    const novo = {
        titulo: novoTitulo,
        imagem: novaImagem,
        texto: novoParagrafo,
        avaliacao: novaAvaliacao
    };

    let estrelas = "";

    let nota = parseFloat(novo.avaliacao);

    if(nota > 5){
        nota = 5;
    }

    for(let i = 1; i <= Math.floor(nota); i++){
        estrelas += "⭐";
    }

    if(nota % 1 != 0){
        estrelas += "½";
    }

    const novoCard = `
    <div class = "card-filme">
        <img src="${novo.imagem}">
        <h3>${novo.titulo}</h3>
        <p>${novo.texto}</p>
        <p>${estrelas}</p>
    </div>
    `;
colecao.innerHTML += novoCard;
formulario.reset();
})
