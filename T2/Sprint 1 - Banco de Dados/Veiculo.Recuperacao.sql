CREATE DATABASE Veiculo
USE Veiculo 

--DDL
 
CREATE TABLE Fabricante 
 ( 
         IdFabricante INT PRIMARY KEY IDENTITY, 
         NomeFantasia VARCHAR(100) NOT NULL, 
         PaisOrigem VARCHAR(100) NOT NULL,
         CNPJ CHAR (14) NOT NULL,
		 LocalFabricacao VARCHAR(100) NOT NULL,
         RazaoSocial VARCHAR(100) NOT NULL,
 ) 


 CREATE TABLE Veiculo 
 ( 
         IdVeiculo INT PRIMARY KEY IDENTITY, 
         IdFabricante INT FOREIGN KEY REFERENCES Fabricante (IdFabricante), 
         Modelo VARCHAR(100) NOT NULL, 
         AnoFabricacao CHAR(4) NOT NULL, 
         Cor VARCHAR(100) NOT NULL, 
         Preco CHAR(100) NOT NULL,
         Placa CHAR(7) NOT NULL,
         Quilometragem VARCHAR(100) NOT NULL,
 ) 
  
 SELECT * FROM Veiculo 
 SELECT * FROM Fabricante 

--DML
  
 INSERT INTO Fabricante (NomeFantasia, PaisOrigem, CNPJ, LocalFabricacao, RazaoSocial) 
 VALUES ('Mercedes Benz','Alemanha','59104273000129','Av. Dr. Rudge Ramos, 859 - Rudge Ramos, São Bernardo do Campo - SP','Mercedes-Benz Do Brasil LTDA.') 

 INSERT INTO Veiculo (IdFabricante, Modelo, AnoFabricacao, Cor, Preco, Placa, Quilometragem) 
 VALUES ('1','GLB 200 Launch Edition','2021','Azul','R$290.000', 'MWE2018', '40.000') 
  
 --DQL 
  
 Select 
 
 Fabricante.NomeFantasia, 
 Veiculo.Modelo 
  
 FROM Fabricante 
  
 Inner Join Veiculo ON Veiculo.IdFabricante = Fabricante.IdFabricante
