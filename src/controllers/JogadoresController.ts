import { Request, Response } from 'express';
import { JogadorService } from '../services/JogadorServices';

export class JogadoresController {
  constructor(private jogadorService: JogadorService) {}
    
    async listar(req: Request, res: Response) {
        const jogador = await this.jogadorService.listar();
        res.json(jogador);
    }

    async criar(req: Request, res: Response) {
        const { nome, nickname } = req.body;

        try {
            const nicknameExistente = await this.jogadorService.verificaNickname(nickname);
            if (nicknameExistente) {
                res.status(400).json({ message: 'Nickname já está em uso!' });
                return;
            }
            await this.jogadorService.criar({ nome, nickname });
            res.status(201).json({ message: 'Jogador criado com sucesso' });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao criar jogador', error });
        }
    }

}
