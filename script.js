et btnEnviar = document.querySelectorAll('#botoes button')[0];
let btnExcluir = document.querySelectorAll('#botoes button')[1];
let btnEditar = document.querySelectorAll('#botoes button')[2];
let btnProcurar = document.querySelectorAll('#botoes button')[3];
var btnSair = document.querySelectorAll('#botoes button')[4];

var nome = document.querySelectorAll('#grupo-inputs input')[0];
var quantidade = document.querySelectorAll('#grupo-inputs input')[1];
var preco = document.querySelectorAll('#grupo-inputs input')[2];

let tabela = document.querySelector('#saida table');
let BD = [];

btnEnviar.onclick = function(){
    console.log(nome)

    if(nome.value == "" || quantidade.value == "" || preco.value == ""){
        console.log("entrou if")
        alert('Preencha todos os campos para adicionar um produto.');
    }else{
        let produto = new Object();
        produto.nome = nome.value;
        produto.quantidade = quantidade.value;
        produto.preco = preco.value;
        produto.id = BD.length;
        BD.push(produto);
        tabela.innerHTML += `<tr><td><input type="checkbox" id="${produto.id}" onchange="verificar(this.id)"></td><td>${produto.nome}</td><td>${produto.quantidade}</td><td>R$ ${preco.value}</td></tr>`;
    }
    
}

btnExcluir.onclick = function(){
    for (let i = 0; i < BD.length; i++){
        let elemento = document.querySelectorAll('#saida table tr td input')[i];
        if (elemento.checked){
            BD.splice(elemento.id, 1);
            tabela.innerHTML = `<tr><td width="30px"></td><td>Nome</td><td>Quant.</td><td>Preço</td></tr>`;
            montarTabela();
        }
    }
}

function montarTabela(){
    for (let i = 0; i < BD.length; i++){
        tabela.innerHTML += `<tr><td width="30px"><input type="checkbox" id="${i}" onchange="verificar()"></td><td>${BD[i].nome}</td><td>${BD[i].quantidade}</td><td>${BD[i].preco}</td></tr>`;
    }
}

btnEditar.onclick = function(){
    for (let i = 0; i < BD.length; i++){
        let elemento = document.querySelectorAll('#saida table tr td input')[i];
        if (elemento.checked){
            BD[i].nome = nome.value;
            BD[i].quantidade = quantidade.value;
            BD[i].preco = preco.value;

            tabela.innerHTML = `<tr><td width="30px"></td><td>Nome</td><td>Quant.</td><td>Preço</td></tr>`;
            montarTabela();
        }
    }    
}

function verificar(id){
    let cont = 0;
    console.log(id)
    for (let i = 0; i < BD.length; i++){
        let elemento = document.querySelectorAll('#saida table tr td input')[i];
        if (elemento.checked){
            nome.value = BD[i].nome;
            quantidade.value = BD[i].quantidade;
            preco.value = BD[i].preco;
            
            cont++;
          //  montarTabela();
            if (cont > 1){
                alert('Não é possível selecionar mais de 1 elemento.');
                elemento.checked = false;
                break;
            }
            
        }
    }
}

btnProcurar.onclick = function(){

    let nomeValue = document.querySelector('#nome').value;
    let resultado
    let cont = 0
    let nomeProcurado
    if(nomeValue==''){
        alert('Insira o nome do produto que deseja pesquisar')
    }else{
        BD.forEach((e,indice)=>{
            if(e.nome==nomeValue){
                resultado=indice
                nomeProcurado=e.nome
                alert(`O produto ${nomeProcurado} está em nosso estoque.`)
                cont++
            }     
                
        }
    )

    if(cont<=0){
        alert(`Não esta cadastrado`)
    } 
    
    }
    }

btnSair.onclick = function(){
      window.location.href = "./index.html"
}
