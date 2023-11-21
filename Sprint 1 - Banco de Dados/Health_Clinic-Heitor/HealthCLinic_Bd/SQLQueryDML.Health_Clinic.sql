USE [Health_Clinic_Heitor]

INSERT INTO TiposDeUsuarios (NomeTiposDeUsuario) VALUES ('Paciente'), ('Medico');

INSERT INTO Clinica (CNPJ, NomeFantasia, RazaoSocial, Endereco, HorarioDeAbertura, HorarioDeFechamento) VALUES ('93.459.052/0001-01', 'Health Clinic', 'Health Clinic','Rua Niteroi, 180 São Caetano do Sul', '08:00:00', '22:00:00');

INSERT INTO Especialidade (Especializacao) VALUES ('Quiropraxista');

INSERT INTO Usuario (IdTiposDeUsuarios, Nome, Email, Senha) VALUES (2, 'Heitor', 'heitor@healthclinic.com', '12345687');

INSERT INTO Paciente (IdUsuario, Nome, Idade, Descricao, RG, CPF, Endereco) VALUES (1, 1, '17', 'Dores na costa', '123456X', '11223344556', 1);

INSERT INTO Medico (IdEspecialidade, IdClinica, Nome, Idade, CRM, Descricao) VALUES (1, 1, 'Carlos', 1, '11223344556', 1);

INSERT INTO Consulta (IdPaciente, IdMedico, DataAgendamento, HoraAgendamento, Descricao, Situacao) VALUES (1, 1, '2023/08/16', '10:30:00', 1, 'O Paciente está reclamando de dores e agendou uma consulta');

INSERT INTO Feedback (IdConsulta, FeedBack) VALUES (1,'Consulta muito boa, ajeitou minha coluna!');
