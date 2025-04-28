import { JogosRepository } from '../repositories/JogosRepository';
import { Jogo } from '../models/Jogo';

const repository = new JogosRepository();

export class JogosService {
  async listar(): Promise<Jogo[]> {
    try {
      return await repository.findAll();
    } catch (error) {
      console.error('Erro ao buscar jogos no repositório:', error);
      throw new Error('Erro ao buscar jogos');
    }
  }

  async buscarPorId(id: number): Promise<Jogo | null> {
    return repository.findById(id);
  }

  async criar(jogo: Omit<Jogo, 'id'>): Promise<void> {
    await repository.create(jogo);
  }

  async atualizar(id: number, jogo: Omit<Jogo, 'id'>): Promise<void> {
    await repository.update(id, jogo);
  }

  async deletar(id: number): Promise<void> {
    await repository.delete(id);
  }
}
