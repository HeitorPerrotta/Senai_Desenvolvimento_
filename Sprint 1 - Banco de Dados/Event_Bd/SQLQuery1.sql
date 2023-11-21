--DDL -Data Definition Language

--criar o banco de dados
CREATE DATABASE [Event+_Tarde]
USE [Event+_Tarde]

--criar as tabelas
CREATE TABLE TiposDeUsuario
(
	IdTiposDeUsuario INT PRIMARY KEY IDENTITY,
	TituloTipoUsuario VARCHAR(50) NOT NULL UNIQUE
)

CREATE TABLE TiposDeEvento
(
	IdTiposDeEvento INT PRIMARY KEY IDENTITY,
	TituloTipoEvento VARCHAR(50) NOT NULL UNIQUE
)


CREATE TABLE Instituicao
(
	IdInstituicao INT PRIMARY KEY IDENTITY,
	CNPJ CHAR(14) NOT NULL UNIQUE,
	Endereco VARCHAR(200) NOT NULL,
	NomeFantasia VARCHAR(200) NOT NULL
)

CREATE TABLE Usuario
(
	IdUsuario INT PRIMARY KEY IDENTITY,
	IdTiposDeUsuario INT FOREIGN KEY REFERENCES TiposDeUsuario(IdTipoDeUsuario) NOT NULL,
	Nome VARCHAR(50) NOT NULL,
	Email VARCHAR(50) NOT NULL UNIQUE,
	Senha CHAR(50) NOT NULL
)

CREATE TABLE Evento
(
	IdEvento INT PRIMARY KEY IDENTITY,
	IdTiposDeEvento INT FOREIGN KEY REFERENCES TiposDeEvento(IdTipoDeEvento) NOT NULL,
	IdInstituicao INT FOREIGN KEY REFERENCES Instituicao(IdInstituicao) NOT NULL,
	Nome VARCHAR(100) NOT NULL,
	Descricao VARCHAR(100) NOT NULL,
	DataEvento DATE NOT NULL,
	HorarioEvento TIME NOT NULL
)

CREATE TABLE PresencasEvento
(
	IdPresencaEvento INT PRIMARY KEY IDENTITY,
	IdUsuario INT FOREIGN KEY REFERENCES Usuario(IdUsuario) NOT NULL,
	IdEvento INT FOREIGN KEY REFERENCES Evento(IdEvento) NOT NULL,
	Situacao BIT DEFAULT(0)
)

CREATE TABLE ComentarioEvento
(
	IdComentarioEvento INT PRIMARY KEY IDENTITY,
	IdUsuario INT FOREIGN KEY REFERENCES Usuario(IdUsuario) NOT NULL,
	IdEvento INT FOREIGN KEY REFERENCES Evento(IdEvento) NOT NULL,
	Descricao VARCHAR(200) NOT NULL,
	Exibe BIT DEFAULT(0)
)

--COMADOS DML
