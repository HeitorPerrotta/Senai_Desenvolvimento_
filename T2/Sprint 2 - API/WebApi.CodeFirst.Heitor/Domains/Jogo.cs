using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApi.CodeFirst.Heitor.Domains
{
    [Table("Jogo")]
    public class Jogo
    {
        [Key]
        public Guid IdJogo { get; set; } = Guid.NewGuid();
           
        [Column(TypeName = "VARCHAR(100)")]
        [Required(ErrorMessage = "Nome do Jogo Obrigatório!")]
        public string? Nome { get; set; }
        
        [Column(TypeName = "VARCHAR(100)")]
        [Required(ErrorMessage = "Descrição do Jogo Obrigatóri!")]
        public string? Descricao { get; set; }

        [Column(TypeName = "DATE")]
        [Required(ErrorMessage = "Descrição do Jogo Obrigatória!")]
        public DateTime DataLancamento { get; set; }

        [Column(TypeName = "DECIMAL(4,2)")]
        [Required(ErrorMessage = "Preço do Jogo Obrigatória!")]
        public decimal Preco { get; set; }

        //ref.tabela estúdio - FK
        public Guid IdEstudio { get; set; }

        [ForeignKey("IdEstudio")]
        public Estudio? Estudio { get; set; }
    }
}