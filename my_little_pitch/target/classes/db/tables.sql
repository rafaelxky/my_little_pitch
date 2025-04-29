DROP TABLE IF EXISTS resposta;
DROP TABLE IF EXISTS rfp;
DROP TABLE IF EXISTS clients;

CREATE TABLE rfp
(
    id     INT PRIMARY KEY,
    date   DATE,
    text   TEXT,
    tokens INT
);

CREATE TABLE resposta
(
    id       INT PRIMARY KEY,
    data     DATE,
    rating   INT,
    resposta TEXT,
    rfpid    INT,
    FOREIGN KEY (rfpid) REFERENCES rfp (id)
);

CREATE TABLE clients
(
    id                   INT PRIMARY KEY,
    "nome_da_empresa"    VARCHAR(255),
    cargo                VARCHAR(255),
    "nome"               VARCHAR(255),
    "setor_de_atividade" VARCHAR(255)
);
