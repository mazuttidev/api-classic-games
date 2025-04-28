enum PlataformasType {
    'Super Nintendo',
    'Mega Drive',
    'Atari'
}

export class Jogo {
    constructor(
        public id: number,
        public nome: string,
        public plataforma: PlataformasType,
        public ano_lancamento: number,
    ) { }
}