let amigo = [];

function adicionarAmigo(){
    const nomeImput = document.getElementById('nome');
    const nome = nomeImput.value.trim();

    if(nome === ""){
        alert("Insira um nome válido!");
        return;
    }
    
    amigo.push(nome);
    
    nomeImput.value = "";
    
    exibirAmigos();
}

function exibirAmigos(){
    const listaAmigos = getElementById('lista-amigos');
    listaAmigos.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textcontent = amigo;
        listaAmigos.appendChild('li');
    });
}

