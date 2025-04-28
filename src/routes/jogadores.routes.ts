import { Router } from 'express';
import { JogadoresController } from '../controllers/JogadoresController';
import { JogadorService } from '../services/JogadorServices';

const router = Router();
const service = new JogadorService();
const controller = new JogadoresController(service);

router.get('/jogadores', controller.listar.bind(controller));
router.post('/jogador', controller.criar.bind(controller));

export default router;