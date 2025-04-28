import { Router } from 'express';
import { JogosController } from '../controllers/JogosController';
import { JogosService } from '../services/JogosServices';

const router = Router();
const service = new JogosService();
const controller = new JogosController(service);

router.get('/jogos', controller.listar.bind(controller));
router.get('/jogos/:id', controller.buscarPorId.bind(controller));
router.post('/jogos', controller.criar.bind(controller));
router.put('/jogos/:id', controller.atualizar.bind(controller));
router.delete('/jogos/:id', controller.deletar.bind(controller));

export default router;
