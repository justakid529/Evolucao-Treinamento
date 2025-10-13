CREATE DATABASE evolucaoconsultoria;
USE evolucaoconsultoria;


CREATE TABLE contatos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100),
    telefone VARCHAR(20),
    mensagem TEXT
);
