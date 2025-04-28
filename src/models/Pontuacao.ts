export class Pontuacao {
      constructor(
        public id: number,
        public jogo_id: number,
        public jogador_id: number, 
        public pontuacao: number,
        public data_registro: Date,
      ) { }
}