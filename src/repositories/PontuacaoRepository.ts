import connection from "../database/connection";
import { Pontuacao } from '../models/Pontuacao';

export class PontuacaoRepository {
  async create(pontuacao: Omit<Pontuacao, 'id' | 'data_registro'>): Promise<void> {
    const query = 'INSERT INTO pontuacao (jogo_id, jogador_id, pontuacao) VALUES (?, ?, ?)';
    await connection.execute(query, [pontuacao.jogo_id, pontuacao.jogador_id, pontuacao.pontuacao]);
  }

  async findAllByGame(jogoId: number): Promise<Pontuacao[]> {
    const query = 'SELECT * FROM pontuacao WHERE jogo_id = ? ORDER BY pontuacao DESC LIMIT 10';
    const [rows] = await connection.execute(query, [jogoId]);
    return rows as Pontuacao[];
  }

  async findMostPopularGames(): Promise<any[]> {
    const query = 'SELECT jogo_id, COUNT(*) AS total FROM pontuacao GROUP BY jogo_id ORDER BY total DESC LIMIT 3';
    const [rows] = await connection.execute(query);
    return rows as any;
  }
}
