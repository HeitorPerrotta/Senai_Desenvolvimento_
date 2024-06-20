using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjetoCrud.Migrations
{
    /// <inheritdoc />
    public partial class CrudFilmes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Filme",
                columns: table => new
                {
                    IdFilme = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    NomeFilme = table.Column<string>(type: "VARCHAR(300)", nullable: true),
                    FilmeDescription = table.Column<string>(type: "VARCHAR(300)", nullable: true),
                    Gênero = table.Column<string>(type: "VARCHAR(300)", nullable: true),
                    DataLancamento = table.Column<DateTime>(type: "DATE", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Filme", x => x.IdFilme);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Filme");
        }
    }
}
