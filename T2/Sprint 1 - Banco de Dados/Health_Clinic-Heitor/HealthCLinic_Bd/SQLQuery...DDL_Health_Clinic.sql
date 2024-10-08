CREATE DATABASE [Health_Clinic_Heitor]
USE [Health_Clinic_Heitor]

CREATE TABLE TiposDeUsuarios
(
	IdTiposDeUsuarios INT PRIMARY KEY IDENTITY,
	NomeTiposDeUsuario VARCHAR (50) NOT NULL UNIQUE
)

CREATE TABLE Clinica
(
	IdClinica INT PRIMARY KEY IDENTITY,
	CNPJ VARCHAR (18) NOT NULL UNIQUE,
	NomeFantasia VARCHAR (50) NOT NULL,
	RazaoSocial VARCHAR (50) NOT NULL UNIQUE,
	Endereco VARCHAR (100) NOT NULL UNIQUE,
	HorarioDeAbertura TIME NOT NULL,
	HorarioDeFechamento TIME NOT NULL
)

CREATE TABLE Especialidade
(
	IdEspecialidade INT PRIMARY KEY IDENTITY,
	Especializacao VARCHAR (50) NOT NULL
)

CREATE TABLE Usuario
(
	IdUsuario INT PRIMARY KEY IDENTITY,
	IdTiposDeUsuarios INT FOREIGN KEY REFERENCES TiposDeUsuarios (IdTiposDeUsuarios),
	Nome VARCHAR (50) NOT NULL,
	Email VARCHAR (100) NOT NULL UNIQUE,
	Senha VARCHAR (50) NOT NULL UNIQUE
)

CREATE TABLE Paciente
(
	IdPaciente INT PRIMARY KEY IDENTITY,
	IdUsuario INT FOREIGN KEY REFERENCES Usuario (IdUsuario) NOT NULL,
	Nome VARCHAR (50) NOT NULL,
	Idade CHAR (2) NOT NULL,
	Descricao VARCHAR (200) NOT NULL,
	RG VARCHAR (7) NOT NULL UNIQUE,
	CPF CHAR (11) NOT NULL UNIQUE,
	Endereco VARCHAR (100) NOT NULL UNIQUE,
)

CREATE TABLE Medico
(
	IdMedico INT PRIMARY KEY IDENTITY,
	IdEspecialidade INT FOREIGN KEY REFERENCES Especialidade (IdEspecialidade) NOT NULL UNIQUE,
	IdClinica INT FOREIGN KEY REFERENCES Clinica (IdClinica) NOT NULL,
	Nome VARCHAR (50) NOT NULL,
	Idade CHAR (2) NOT NULL,
	CRM CHAR (11) NOT NULL UNIQUE,
	Descricao VARCHAR (200) NOT NULL,
)


CREATE TABLE Consulta
(
	IdConsulta INT PRIMARY KEY IDENTITY,
	IdPaciente INT FOREIGN KEY REFERENCES Paciente (IdPaciente) NOT NULL,
	IdMedico INT FOREIGN KEY REFERENCES Medico (IdMedico) NOT NULL,
	DataAgendamento DATE NOT NULL UNIQUE,
	HoraAgendamento TIME NOT NULL UNIQUE,
	Descricao VARCHAR (200) NOT NULL,
	Situacao VARCHAR (100) NOT NULL
)


CREATE TABLE Feedback
(
	IdFeedback INT PRIMARY KEY IDENTITY,
	IdConsulta INT FOREIGN KEY REFERENCES Consulta (IdConsulta) NOT NULL,
	FeedBack VARCHAR (200) NOT NULL
)


DROP TABLE TiposDeUsuarios

DROP TABLE Usuario

DROP TABLE Feedback

DROP TABLE Medico

DROP TABLE Consulta

DROP TABLE Clinica

DROP TABLE Paciente

DROP TABLE Especialidade


SELECT * FROM TiposDeUsuarios
SELECT * FROM Usuario
SELECT * FROM Feedback
SELECT * FROM Medico
SELECT * FROM Consulta
SELECT * FROM Paciente
SELECT * FROM Especialidade
SELECT * FROM Clinica 
