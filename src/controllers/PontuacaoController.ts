import { Request, Response } from 'express';
import { PontuacaoService } from '../services/PontuacaoServices';

const pontuacaoService = new PontuacaoService();

export class PontuacaoController {
  async criar(req: Request, res: Response): Promise<void> {
    try {
      const { jogo_id, jogador_id, pontuacao } = req.body;

      await pontuacaoService.criar({ jogo_id, jogador_id, pontuacao });
      res.status(201).json({ message: 'Pontuação registrada com sucesso' });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async ranking(req: Request, res: Response): Promise<void> {
    try {
      const jogoId = parseInt(req.params.idJogo);
      const ranking = await pontuacaoService.ranking(jogoId);
      res.json(ranking);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async jogosPopulares(req: Request, res: Response): Promise<void> {
    try {
      const jogos = await pontuacaoService.jogosPopulares();
      res.json(jogos);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}
