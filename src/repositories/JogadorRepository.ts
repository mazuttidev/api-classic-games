import connection from "../database/connection";
import { Jogador } from "../models/Jogador";

export class JogadorRepository {
    async findAll(): Promise<Jogador[]> {
        try {
            const [rows] = await connection.query('SELECT * FROM jogadores');
            return rows as Jogador[];
        } catch (error) {
            console.error('Erro ao buscar jogadores:', error);
            return [];
        }
    }

    async findById(id: number): Promise<Jogador | null> {
        try {
            const [rows] = await connection.query('SELECT * FROM jogadores WHERE id = ?', [id]);
            const result = (rows as Jogador[])[0];
            return result || null;
        } catch (error) {
            console.error(`Erro ao buscar o jogador com ID ${id}:`, error);
            return null;
        }
    }

    async findByNickname(nickname: string): Promise<Jogador | null> {
        try {
            const [rows] = await connection.query('SELECT * FROM jogadores WHERE nickname = ?', [nickname]);
            const result = (rows as Jogador[])[0];
            return result || null;
        } catch (error) {
            console.error(`Erro ao buscar o jogo com ID ${nickname}:`, error);
            return null;
        }
    }

    async create(jogador: Omit<Jogador, 'id'>): Promise<boolean> {
        try {
            const { nome, nickname } = jogador;
            const [result]: any = await connection.query(
                'INSERT INTO jogadores (nome, nickname) VALUES (?, ?)',
                [nome, nickname]
            );
            return result.affectedRows > 0;
        } catch (error) {
            console.error('Erro ao criar jogo:', error);
            return false;
        }
    }

}