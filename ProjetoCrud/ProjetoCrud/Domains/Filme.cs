using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjetoCrud.Domains
{
    [Table(nameof(Filme))]

    public class Filme
    {
        [Key]
        public Guid IdFilme { get; set; } = Guid.NewGuid();

        [Column(TypeName = "VARCHAR(300)")]
        public string? NomeFilme { get; set; }

        [Column(TypeName = "VARCHAR(300)")]
        public string? FilmeDescription { get; set;}

        [Column(TypeName = "VARCHAR(300)")]
        public string? Gênero { get; set;}

        [Column(TypeName = "DATE")]
        public DateTime? DataLancamento { get; set; }
    }
}
