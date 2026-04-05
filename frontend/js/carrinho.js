
let carrinho = JSON.parse(localStorage.getItem('meuCarrinho')) || [];


function adicionarAoCarrinho(nomeProduto) {
    if (!nomeProduto) return; 

    carrinho.push(nomeProduto);
    localStorage.setItem('meuCarrinho', JSON.stringify(carrinho));
    
    console.log("Produto adicionado:", nomeProduto);
    alert(`${nomeProduto} foi adicionado à sua lista!`);
}

const botoes = document.querySelectorAll('.btn-comprar');

botoes.forEach(botao => {
    botao.onclick = (event) => {
        event.preventDefault(); 
        const nome = botao.getAttribute('data-nome'); 
        adicionarAoCarrinho(nome);
    };
});

function esvaziarCarrinho() {
    localStorage.removeItem('meuCarrinho');
    
    carrinho = []; 
    
    console.log("Carrinho esvaziado com sucesso.");
    alert("Seu carrinho foi limpo!");
}