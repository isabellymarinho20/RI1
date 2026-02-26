const personagem = {
    nome: 'Steve Rogers',
    codinome: 'capitao america',
    armaPrincipal: 'escudo americano',
    armaSecundaria: '',
    velocidade: 85,
    forca: 75,
    resistencia: 80,
    descricao: function(){
        return 'Nome do personagem:' + this.nome + '\n' +
        'codinome do personagem:' + this.codinome + '\n' +
        'arma principal:' + this.armaPrincipal + '\n' +
        'arma secundaria:' + this.armaSecundaria + '\n' +
        'nivel de força:' + this.forca + '\n' +
        'nivel de velocidade:' + this.velocidade + '\n' +
        'nivel de resistencia:' + this.resistencia + '\n' 
    }

}

const personagem1 = {
    nome: 'hulk',
    codinome: 'Hulk',
    armaPrincipal: 'mãozinha',
    armaSecundaria: '',
    velocidade: 70,
    forca: 100,
    resistencia: 100,
    descricao: function(){
        return 'Nome do personagem:' + this.nome + '\n' +
        'codinome do personagem:' + this.codinome + '\n' +
        'arma principal:' + this.armaPrincipal + '\n' +
        'arma secundaria:' + this.armaSecundaria + '\n' +
        'nivel de força:' + this.forca + '\n' +
        'nivel de velocidade:' + this.velocidade + '\n' +
        'nivel de resistencia:' + this.resistencia + '\n' 
    }

}

const personagem2 = {
    nome: 'petter parker',
    codinome: 'homem-aranha',
    armaPrincipal: 'teia',
    armaSecundaria: '',
    velocidade: 90,
    forca: 70,
    resistencia: 80,
    descricao: function(){
        return 'Nome do personagem:' + this.nome + '\n' +
        'codinome do personagem:' + this.codinome + '\n' +
        'arma principal:' + this.armaPrincipal + '\n' +
        'arma secundaria:' + this.armaSecundaria + '\n' +
        'nivel de força:' + this.forca + '\n' +
        'nivel de velocidade:' + this.velocidade + '\n' +
        'nivel de resistencia:' + this.resistencia + '\n' 
    }

}

const thanos = {
    nome: 'Titã Louco',
    codinome: 'thanos',
    armaPrincipal: 'espada de dois gume',
    armaSecundaria: '',
    velocidade: 50,
    forca: 90,
    resistencia: 80,
    descricao: function(){
        return 'Nome do personagem:' + this.nome + '\n' +
        'codinome do personagem:' + this.codinome + '\n' +
        'arma principal:' + this.armaPrincipal + '\n' +
        'arma secundaria:' + this.armaSecundaria + '\n' +
        'nivel de força:' + this.forca + '\n' +
        'nivel de velocidade:' + this.velocidade + '\n' +
        'nivel de resistencia:' + this.resistencia + '\n' 
    }

}


let personagens = [personagem, personagem1, personagem2,thanos]

 let vencedor 
 let soma = 0 
 let poder = 0
 

for (let index = 0; index < personagens.length; index++) {

    poder = personagens[index].forca + personagens[index].resistencia +
    personagens[index].velocidade
    
    if (poder>soma){
        soma = poder
        vencedor = personagens[index].codinome
    }
   
}


console.log('Quem venceu o Thanos foi:' + vencedor)
