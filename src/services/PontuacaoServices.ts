import { PontuacaoRepository } from '../repositories/PontuacaoRepository';
import { JogosRepository } from '../repositories/JogosRepository';
import { JogadorRepository } from '../repositories/JogadorRepository';
import { Pontuacao } from '../models/Pontuacao';

const pontuacaoRepository = new PontuacaoRepository();
const jogosRepository = new JogosRepository();
const jogadoresRepository = new JogadorRepository();

export class PontuacaoService {
  async criar(pontuacao: Omit<Pontuacao, 'id'|'data_registro'>): Promise<void> {
    const jogo = await jogosRepository.findById(pontuacao.jogo_id);
    const jogador = await jogadoresRepository.findById(pontuacao.jogador_id);

    if (!jogo) throw new Error('Jogo não encontrado');
    if (!jogador) throw new Error('Jogador não encontrado');

    if (pontuacao.pontuacao < 0) throw new Error('A pontuação não pode ser negativa');

    await pontuacaoRepository.create(pontuacao);
  }

  async ranking(jogoId: number) {
    return pontuacaoRepository.findAllByGame(jogoId);
  }

  async jogosPopulares() {
    return pontuacaoRepository.findMostPopularGames();
  }
}
