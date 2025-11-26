// A função agora recebe o elemento do botão clicado
function adicionarAoCarrinho(buttonElement) {
    // Pega os dados armazenados no próprio botão usando data-atributos
    const id = buttonElement.getAttribute('data-id');
    const nome = buttonElement.getAttribute('data-nome');
    
    // Simula a adição ao carrinho
    alert(`"${nome}" (ID: ${id}) adicionada(o) ao carrinho!`);

    // --- Lógica do Carrinho Usando localStorage (OPCIONAL - EXPANSÃO) ---
    
    // 1. Pega o carrinho atual do localStorage ou inicializa um novo array
    let carrinho = JSON.parse(localStorage.getItem('carrinhoMotos')) || [];

    // 2. Cria o objeto do novo item
    const novoItem = {
        id: id,
        nome: nome,
        quantidade: 1 
        // Em uma loja real, você adicionaria o preço também
    };

    // 3. Verifica se o item já existe (opcional)
    const itemExistente = carrinho.find(item => item.id === id);

    if (itemExistente) {
        itemExistente.quantidade += 1; // Aumenta a quantidade
    } else {
        carrinho.push(novoItem); // Adiciona o novo item
    }

    // 4. Salva o carrinho atualizado no localStorage
    localStorage.setItem('carrinhoMotos', JSON.stringify(carrinho));

    console.log("Estado atual do carrinho:", carrinho);
}