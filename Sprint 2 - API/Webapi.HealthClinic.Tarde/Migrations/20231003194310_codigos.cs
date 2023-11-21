using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Webapi.HealthClinic.Tarde.Migrations
{
    /// <inheritdoc />
    public partial class codigos : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Clinica",
                columns: table => new
                {
                    IdClinica = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    CNPJ = table.Column<string>(type: "CHAR(14)", maxLength: 14, nullable: false),
                    Endereco = table.Column<string>(type: "VARCHAR(100)", nullable: false),
                    NomeFantasia = table.Column<string>(type: "VARCHAR(100)", nullable: false),
                    HorarioDeAbertura = table.Column<TimeOnly>(type: "time", nullable: false),
                    HorarioDeFechamento = table.Column<TimeOnly>(type: "time", nullable: false),
                    RazaoSocial = table.Column<string>(type: "VARCHAR(100)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clinica", x => x.IdClinica);
                });

            migrationBuilder.CreateTable(
                name: "Especialidade",
                columns: table => new
                {
                    IdEspecialidade = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Especializacao = table.Column<string>(type: "VARCHAR(100)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Especialidade", x => x.IdEspecialidade);
                });

            migrationBuilder.CreateTable(
                name: "TipoUsuario",
                columns: table => new
                {
                    IdTipoUsuario = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Titulo = table.Column<string>(type: "VARCHAR(100)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TipoUsuario", x => x.IdTipoUsuario);
                });

            migrationBuilder.CreateTable(
                name: "Usuario",
                columns: table => new
                {
                    IdUsuario = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Nome = table.Column<string>(type: "VARCHAR(100)", nullable: false),
                    Email = table.Column<string>(type: "VARCHAR(100)", nullable: false),
                    Senha = table.Column<string>(type: "CHAR(60)", maxLength: 60, nullable: false),
                    IdTipoUsuario = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuario", x => x.IdUsuario);
                    table.ForeignKey(
                        name: "FK_Usuario_TipoUsuario_IdTipoUsuario",
                        column: x => x.IdTipoUsuario,
                        principalTable: "TipoUsuario",
                        principalColumn: "IdTipoUsuario",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "Medico",
                columns: table => new
                {
                    IdMedico = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Nome = table.Column<string>(type: "VARCHAR(100)", nullable: false),
                    CRM = table.Column<string>(type: "CHAR(11)", nullable: false),
                    Idade = table.Column<string>(type: "VARCHAR(3)", nullable: false),
                    IdEspecialidade = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    IdClinica = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    IdUsuario = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Medico", x => x.IdMedico);
                    table.ForeignKey(
                        name: "FK_Medico_Clinica_IdClinica",
                        column: x => x.IdClinica,
                        principalTable: "Clinica",
                        principalColumn: "IdClinica",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_Medico_Especialidade_IdEspecialidade",
                        column: x => x.IdEspecialidade,
                        principalTable: "Especialidade",
                        principalColumn: "IdEspecialidade",
                        onDelete: ReferentialAction.NoAction);

                    table.ForeignKey(
                        name: "FK_Medico_Usuario_IdUsuario",
                        column: x => x.IdUsuario,
                        principalTable: "Usuario",
                        principalColumn: "IdUsuario",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "Paciente",
                columns: table => new
                {
                    IdPaciente = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Nome = table.Column<string>(type: "VARCHAR(100)", nullable: false),
                    RG = table.Column<string>(type: "CHAR(7)", nullable: false),
                    CPF = table.Column<string>(type: "CHAR(11)", nullable: false),
                    Idade = table.Column<string>(type: "VARCHAR(3)", nullable: false),
                    Endereco = table.Column<string>(type: "VARCHAR(100)", nullable: false),
                    IdUsuario = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Paciente", x => x.IdPaciente);
                    table.ForeignKey(
                        name: "FK_Paciente_Usuario_IdUsuario",
                        column: x => x.IdUsuario,
                        principalTable: "Usuario",
                        principalColumn: "IdUsuario",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "Consulta",
                columns: table => new
                {
                    IdConsulta = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    DataConsulta = table.Column<DateTime>(type: "date", nullable: false),
                    TipoConsulta = table.Column<string>(type: "VARCHAR(100)", nullable: false),
                    Descricao = table.Column<string>(type: "VARCHAR(300)", nullable: false),
                    IdMedico = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    IdPaciente = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Consulta", x => x.IdConsulta);
                    table.ForeignKey(
                        name: "FK_Consulta_Medico_IdMedico",
                        column: x => x.IdMedico,
                        principalTable: "Medico",
                        principalColumn: "IdMedico",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_Consulta_Paciente_IdPaciente",
                        column: x => x.IdPaciente,
                        principalTable: "Paciente",
                        principalColumn: "IdPaciente",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "Feedback",
                columns: table => new
                {
                    IdFeedback = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Feedbacks = table.Column<string>(type: "VARCHAR(300)", nullable: false),
                    IdConsulta = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Feedback", x => x.IdFeedback);
                    table.ForeignKey(
                        name: "FK_Feedback_Consulta_IdConsulta",
                        column: x => x.IdConsulta,
                        principalTable: "Consulta",
                        principalColumn: "IdConsulta",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Clinica_CNPJ",
                table: "Clinica",
                column: "CNPJ",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Clinica_Endereco",
                table: "Clinica",
                column: "Endereco",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Clinica_RazaoSocial",
                table: "Clinica",
                column: "RazaoSocial",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Consulta_IdMedico",
                table: "Consulta",
                column: "IdMedico");

            migrationBuilder.CreateIndex(
                name: "IX_Consulta_IdPaciente",
                table: "Consulta",
                column: "IdPaciente");

            migrationBuilder.CreateIndex(
                name: "IX_Feedback_IdConsulta",
                table: "Feedback",
                column: "IdConsulta");

            migrationBuilder.CreateIndex(
                name: "IX_Medico_CRM",
                table: "Medico",
                column: "CRM",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Medico_IdClinica",
                table: "Medico",
                column: "IdClinica");

            migrationBuilder.CreateIndex(
                name: "IX_Medico_IdEspecialidade",
                table: "Medico",
                column: "IdEspecialidade");

            migrationBuilder.CreateIndex(
                name: "IX_Medico_IdUsuario",
                table: "Medico",
                column: "IdUsuario");

            migrationBuilder.CreateIndex(
                name: "IX_Paciente_CPF",
                table: "Paciente",
                column: "CPF",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Paciente_Endereco",
                table: "Paciente",
                column: "Endereco",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Paciente_IdUsuario",
                table: "Paciente",
                column: "IdUsuario");

            migrationBuilder.CreateIndex(
                name: "IX_Paciente_RG",
                table: "Paciente",
                column: "RG",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Usuario_Email",
                table: "Usuario",
                column: "Email",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Usuario_IdTipoUsuario",
                table: "Usuario",
                column: "IdTipoUsuario");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Feedback");

            migrationBuilder.DropTable(
                name: "Consulta");

            migrationBuilder.DropTable(
                name: "Medico");

            migrationBuilder.DropTable(
                name: "Paciente");

            migrationBuilder.DropTable(
                name: "Clinica");

            migrationBuilder.DropTable(
                name: "Especialidade");

            migrationBuilder.DropTable(
                name: "Usuario");

            migrationBuilder.DropTable(
                name: "TipoUsuario");
        }
    }
}
