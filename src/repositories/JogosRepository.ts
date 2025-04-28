import connection from "../database/connection";
import { Jogo } from "../models/Jogo";

export class JogosRepository {
    async findAll(): Promise<Jogo[]> {
        try {
            const [rows] = await connection.query('SELECT * FROM jogos');
            return rows as Jogo[];
        } catch (error) {
            console.error('Erro ao buscar jogos:', error);
            return [];
        }
    }

    async findById(id: number): Promise<Jogo | null> {
        try {
            const [rows] = await connection.query('SELECT * FROM jogos WHERE id = ?', [id]);
            const result = (rows as Jogo[])[0];
            return result || null;
        } catch (error) {
            console.error(`Erro ao buscar o jogo com ID ${id}:`, error);
            return null;
        }
    }

    async create(jogo: Omit<Jogo, 'id'>): Promise<boolean> {
        try {
            const { nome, plataforma, ano_lancamento } = jogo;
            const [result]: any = await connection.query(
                'INSERT INTO jogos (nome, plataforma, ano_lancamento) VALUES (?, ?, ?)',
                [nome, plataforma, ano_lancamento]
            );
            return result.affectedRows > 0;
        } catch (error) {
            console.error('Erro ao criar jogo:', error);
            return false;
        }
    }

    async update(id: number, jogo: Omit<Jogo, 'id'>): Promise<boolean> {
        try {
            const { nome, plataforma, ano_lancamento } = jogo;
            const [result]: any = await connection.query(
                'UPDATE jogos SET nome = ?, plataforma = ?, ano_lancamento = ? WHERE id = ?',
                [nome, plataforma, ano_lancamento, id]
            );
            return result.affectedRows > 0;
        } catch (error) {
            console.error(`Erro ao atualizar jogo ID ${id}:`, error);
            return false;
        }
    }

    async delete(id: number): Promise<boolean> {
        try {
            const [result]: any = await connection.query('DELETE FROM jogos WHERE id = ?', [id]);
            return result.affectedRows > 0;
        } catch (error) {
            console.error(`Erro ao deletar jogo ID ${id}:`, error);
            return false;
        }
    }

}