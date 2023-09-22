import { Personagem } from "./personagem.js"

export class Mago extends Personagem {
    elementoMagico
    levelMagico
    inteligencia
    static tipo = "Mago"
    static descricao = 'O mago é implacável'

    constructor(nome, elementoMagico, levelMagico, inteligencia) {
        super(nome)
        this.elementoMagico = elementoMagico
        this.inteligencia = inteligencia
        this.levelMagico = levelMagico
    }
    obterInsignia() {
        if(this.levelMagico && this.inteligencia >= 5) {
            return `Mestre do ${this.elementoMagico}`
        } 
        return super.obterInsignia()
    }
}