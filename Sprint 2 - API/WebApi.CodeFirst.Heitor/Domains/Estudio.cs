using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApi.CodeFirst.Heitor.Domains
{
    [Table("Estudio")]
    public class Estudio
    {
        public Guid IdEstudio { get; set; } = Guid.NewGuid();

        [Column(TypeName = "VARCHAR(100)")]
        [Required(ErrorMessage = "Nome Obrigatório!")]
        public string? Nome { get; set; }

        //ref.lista de jogos
        public List<Jogo>? Jogo { get; set; }
    }
}
