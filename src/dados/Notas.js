export default class Notas{
    constructor(){
        this.notas = [];
    }
    adicionarNota(titulo, texto, categoria){
        const novaNota = new Nota(titulo, texto, categoria)
        this.notas.push(novaNota);
    }

    deletarNota(index) {
        let arrayNotas = this.notas;
        arrayNotas.splice(index, 1);
        this.notas = arrayNotas;
      }
}
class Nota{
    constructor(titulo, texto, categoria){
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}