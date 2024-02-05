USE [Health_Clinic_Heitor]

SELECT 
	Consulta.IdConsulta AS [Id da Consulta],
	Consulta.DataAgendamento AS [Data do Agendamento],
	Consulta.HoraAgendamento AS [Hora do Agendamento],
	Clinica.NomeFantasia AS [Nome da Clinica],
	Usuario.Nome AS [Nome do Paciente],
	Paciente.Idade AS [Idade do Paciente],
	Medico.Nome AS [Nome do Medico],
	Especialidade.Especializacao AS [Especializacao do Medico],
	Medico.CRM AS [CRM do Medico],
	Paciente.Descricao AS [Descrição],
	Feedback.FeedBack AS [Feedback da Consulta] 
	
FROM Consulta
INNER JOIN Paciente ON Paciente.IdPaciente = Consulta.IdPaciente
INNER JOIN Medico ON Medico.IdMedico = Consulta.IdMedico
INNER JOIN Usuario ON Usuario.IdUsuario = Paciente.IdUsuario
INNER JOIN Especialidade ON Medico.IdEspecialidade = Especialidade.IdEspecialidade
INNER JOIN Clinica ON Medico.IdClinica = Clinica.IdClinica
LEFT JOIN Feedback ON Feedback.IdConsulta = Feedback.IdFeedback


SELECT * FROM Medico
SELECT * FROM TiposDeUsuarios
SELECT * FROM Usuario
SELECT * FROM Feedback
SELECT * FROM Consulta
SELECT * FROM Paciente
SELECT * FROM Especialidade
SELECT * FROM Clinica 
