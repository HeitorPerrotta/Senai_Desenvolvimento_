using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Webapi.Event_.Tarde.Domains
{
    [Table(nameof(ComentarioEvento))]
    public class ComentarioEvento
    {
        [Key]
        public Guid IdComentarioEvento { get; set; } = Guid.NewGuid();

        [Column(TypeName = "TEXT")]
        [Required(ErrorMessage = "A descrição é obrigatória!")]
        public string? Descricao { get; set; }

        [Column(TypeName = "BIT")]
        [Required(ErrorMessage = "A informação sobre exibição é obrigatória!")]
        public bool Exibe { get; set; }

        //ref.Tabela Usuario = FK
        [Required(ErrorMessage = "O Usuario é obrigatório!")]
        public Guid IdUsuario { get; set; }

        [ForeignKey(nameof(IdUsuario))]
        public Usuario? Usuario { get; set; }

        //ref.Tabela Evento = FK
        [Required(ErrorMessage = "O evento é obrigatório!")]
        public Guid IdEvento { get; set; }

        [ForeignKey(nameof(IdEvento))]
        public Evento? Evento { get; set; }
    }
}