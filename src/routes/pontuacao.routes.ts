import { Router } from 'express';
import { PontuacaoController } from '../controllers/PontuacaoController';

const router = Router();
const controller = new PontuacaoController();

router.post('/pontuacoes', controller.criar.bind(controller));
router.get('/ranking/:idJogo', controller.ranking.bind(controller));
router.get('/populares', controller.jogosPopulares.bind(controller));

export default router;