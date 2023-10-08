class Heroi {
    constructor(nome,idade,tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    ataque(){
        switch(this.tipo){
            case 'mago':{
                console.log('O mago atacou usando magia')
                break
            }case 'guerreiro':{
                console.log('O guerreiro atacou usando espada')
                break
            }case 'monge':{
                console.log('O monge atacou usando artes marciais')
                break
            }case 'ninja':{
                console.log('O ninja atacou usando shuriken')
                break
            }
        }
    }
}

var herois = []

herois.push(new Heroi('Pedro',18,'mago'))
herois.push(new Heroi('Ana',20,'ninja'))
herois.push(new Heroi('Bill',40,'monge'))
herois.push(new Heroi('Sofia',20,'mago'))
herois.push(new Heroi('Paulo',20,'guerreiro'))

herois.forEach(h=>h.ataque())