import { Eleicao } from "../src/dominio/Eleicao.js"
const eleicao = new Eleicao()
eleicao.cadastrar("Ash Ketchum", 66)
eleicao.cadastrar("Misty", 67)
eleicao.cadastrar("Brock", 68)

console.log(eleicao.listarCandidatos())

eleicao.votar(66)
eleicao.votar(66)
eleicao.votar(67)
eleicao.votar(68)
eleicao.votar(68)
eleicao.votar(68)
console.log(eleicao.votos)
console.log (eleicao.apurarVotos())