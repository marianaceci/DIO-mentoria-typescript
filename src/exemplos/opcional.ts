let buttonTeste = document.getElementById('button');

// '?' se existir, roda. se nao existir, nao roda e tbm nao da erro
buttonTeste?.addEventListener('click', () => {    
    console.log('funcionou');    
})

