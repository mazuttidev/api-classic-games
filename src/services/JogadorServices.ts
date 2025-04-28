import { JogadorRepository } from '../repositories/JogadorRepository';
import { Jogador } from '../models/Jogador';

const repository = new JogadorRepository();

export class JogadorService {
  async listar(): Promise<Jogador[]> {
    return repository.findAll();
  }

  async criar(jogador: Omit<Jogador, 'id'>): Promise<void> {
    await repository.create(jogador);
  }

  async verificaNickname(nickname:string): Promise<boolean>{
    const jogador = await repository.findByNickname(nickname);
    return jogador !== null;
  }

}
