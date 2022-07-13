database(`CREATE TABLE IF NOT EXISTS USUARIO (
    CODIGO INTEGER PRIMARY KEY AUTOINCREMENT,
    MATRICULA INTEGER NOT NULL,
    EMAIL VARCHAR(100) NOT NULL,
    SENHA VARCHAR(100) NOT NULL,
    CARGO STRING,
    NOME VARCHAR(100) NOT NULL,
    APROVADO BOOLEAN
    )`).then(result => {
    console.log('TABELA USUARIO CRIADA')
}).catch(erro => {
    console.log('TABELA USUARIO NÃO CRIADA')
    console.log(erro)
});

database(`CREATE TABLE IF NOT EXISTS RESERVA (
    CODIGO INTEGER PRIMARY KEY AUTOINCREMENT,
    DATA_RETIRADA DATE NOT NULL,
    DATA_DEVOLUCAO DATE,
    FK_USUARIO INT,
    FOREIGN KEY(FK_USUARIO) REFERENCES USUARIO(CODIGO)
    ON UPDATE CASCADE ON DELETE CASCADE
    )`).then(result => {
    console.log('TABELA RESERVA CRIADA')
}).catch(erro => {
    console.log('TABELA RESERVA NÃO CRIADA')
    console.log(erro)
});

database(`CREATE TABLE IF NOT EXISTS PRODUTO (
    CODIGO INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
    NOME VARCHAR(100) NOT NULL,
    CARACTERISTICA VARCHAR(500) NOT NULL,
    QUANTIDADE VARCHAR(100) NOT NULL,
    ULTIMA_RETIRADA DATE,
    DESCARTAVEL BOOLEAN NOT NULL,
    DETALHES VARCHAR(500),
    IMAGEM VARCHAR(500),
    FK_LOCALIZACAO INT,
    FK_CLASSIFICACAO INT,
    FOREIGN KEY(FK_LOCALIZACAO) REFERENCES LOCALIZACAO(CODIGO),
    FOREIGN KEY(FK_CLASSIFICACAO) REFERENCES CLASSIFICACAO(CODIGO) 
    ON UPDATE CASCADE ON DELETE CASCADE
    )`).then(result => {
    console.log('TABELA PRODUTO CRIADA')
}).catch(erro => {
    console.log('TABELA PRODUTO NÃO CRIADA')
    console.log(erro)
});

database(`CREATE TABLE IF NOT EXISTS LOCALIZACAO (
    CODIGO INTEGER PRIMARY KEY AUTOINCREMENT,
    LOCALIDADE VARCHAR(100) NOT NULL
    )`).then(result => {
    console.log('TABELA LOCALIZACAO CRIADA')
}).catch(erro => {
    console.log('TABELA LOCALIZACAO NÃO CRIADA')
    console.log(erro)
});

database(`CREATE TABLE IF NOT EXISTS CLASSIFICACAO (
    CODIGO INTEGER PRIMARY KEY AUTOINCREMENT,
    CLASSIFICACAO VARCHAR(100) NOT NULL
    )`).then(result => {
    console.log('TABELA LOCALIZACAO CRIADA')
}).catch(erro => {
    console.log('TABELA LOCALIZACAO NÃO CRIADA')
    console.log(erro)
});
