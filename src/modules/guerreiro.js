import { Personagem } from "./personagem.js";

export class Guerreiro extends Personagem {
    static tipo = "Guerreiro"
    static descricao = "Você será esmagado pela fúria do Guerreiro!"
    forca 

    constructor(nome, forca, descricao) {
        super(nome)
        this.forca = forca
        this.descricao = descricao
    }

    obterInsignia() {
        if(this.level >= 5) {
            return "Guerreiro Furioso"
        } else {
            return super.obterInsignia()
        }
    }
}