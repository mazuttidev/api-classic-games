// src/controllers/JogosController.ts

import { Request, Response } from 'express';
import { JogosService } from '../services/JogosServices';

export class JogosController {
  constructor(private jogosService: JogosService) {}

  async listar(req: Request, res: Response): Promise<void> {
    try {
      const jogos = await this.jogosService.listar();
      res.json(jogos);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar jogos'});
    }
  }

  async buscarPorId(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id);
    try {
      const jogo = await this.jogosService.buscarPorId(id);
      if (!jogo) {
        res.status(404).json({ message: 'Jogo não encontrado' });
        return;
      }
      res.json(jogo);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar jogo', error });
    }
  }

  async criar(req: Request, res: Response): Promise<void> {
    const { nome, plataforma, ano_lancamento } = req.body;
    try {
      await this.jogosService.criar({ nome, plataforma, ano_lancamento });
      res.status(201).json({ message: 'Jogo criado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar jogo', error });
    }
  }

  async atualizar(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { nome, plataforma, ano_lancamento } = req.body;
    try {
      await this.jogosService.atualizar(Number(id), { nome, plataforma, ano_lancamento });
      res.json({ message: 'Jogo atualizado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar jogo', error });
    }
  }

  async deletar(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      await this.jogosService.deletar(Number(id));
      res.json({ message: 'Jogo deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar jogo', error });
    }
  }
}
