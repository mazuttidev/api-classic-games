CREATE DATABASE classic_games;

USE classic_games;

CREATE TABLE IF NOT EXISTS jogos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    plataforma ENUM('Super Nintendo', 'Mega Drive', 'Atari') NOT NULL,
    ano_lancamento YEAR NOT NULL
);

CREATE TABLE IF NOT EXISTS jogadores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    nickname VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS pontuacao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    jogo_id INT NOT NULL,
    jogador_id INT NOT NULL,
    pontuacao INT NOT NULL CHECK (pontuacao >= 0),
    data_registro DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (jogo_id) REFERENCES jogos(id),
    FOREIGN KEY (jogador_id) REFERENCES jogadores(id)
);