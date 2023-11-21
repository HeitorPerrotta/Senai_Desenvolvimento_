using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Webapi.HealthClinic.Tarde.Domains
{
    [Table(nameof(Especialidade))]
    public class Especialidade
    {
        [Key]
        public Guid IdEspecialidade { get; set; } = Guid.NewGuid();

        [Column(TypeName = "VARCHAR(100)")]
        [Required(ErrorMessage = "Especializacao do Medico é obrigatória!")]
        public string? Especializacao { get; set; }
    }
}
