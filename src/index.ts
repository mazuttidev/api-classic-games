import express from 'express';
import cors from 'cors';
import jogosRoutes from './routes/jogos.routes';
import jogadoresRoutes from './routes/jogadores.routes';
import pontuacaoRoutes from './routes/pontuacao.routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(jogosRoutes);
app.use(jogadoresRoutes);
app.use(pontuacaoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});