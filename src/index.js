import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { Mago } from "./modules/mago.js";
import { Guerreiro } from "./modules/guerreiro.js";


const magoAntonio = new Mago('Antonio', 4, 'Fogo', 4, 3)
const magoPietra = new Mago('Pietra', 8, 'Gelo', 7, 10)
const arqueiroPedro = new Arqueiro('Pedro', 6, 6)
const arqueiroMagoChico = new ArqueiroMago('Chico', 7, 10, 'ar', 4, 8)
const guerreiroMarco = new Guerreiro('Marco', 10)

const personagens = [magoAntonio, magoPietra, arqueiroPedro, arqueiroMagoChico, guerreiroMarco ]

new PersonagemView(personagens).render()
console.log(Personagem.verificarVencedor(arqueiroMagoChico, magoAntonio))


