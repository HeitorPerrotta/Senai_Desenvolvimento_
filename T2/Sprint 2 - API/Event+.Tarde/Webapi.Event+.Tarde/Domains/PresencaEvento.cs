using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Webapi.Event_.Tarde.Domains
{
    [Table(nameof(PresencaEvento))]
    public class PresencaEvento
    {
        [Key]
        public Guid IdPresencaEvento { get; set; } = Guid.NewGuid();

        [Column(TypeName = "BIT")]
        [Required(ErrorMessage = "A situação do evento é obrigatória!")]
        public bool Situacao { get; set; }

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
