using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApi.CodeFirst.Heitor.Domains
{
    [Table("TiposUsuario")]

    public class TiposUsuario
    {
        [Key]
        public Guid IdTipoUsuario { get; set; } = Guid.NewGuid();

        [Column(TypeName = "VARCHAR(100)")]
        [Required(ErrorMessage = "Título é Obrigatório")]

        public Guid Titulo { get; set; }
    }
}
