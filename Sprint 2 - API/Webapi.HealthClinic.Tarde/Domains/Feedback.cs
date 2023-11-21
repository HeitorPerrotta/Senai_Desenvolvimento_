using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Webapi.HealthClinic.Tarde.Domains
{
    [Table(nameof(Feedback))]
    public class Feedback
    {
  
        [Key]
        public Guid IdFeedback { get; set; } = Guid.NewGuid();

        [Column(TypeName = "VARCHAR(300)")]
        [Required(ErrorMessage = "O Feedback da Consulta é obrigatório!")]
        public string? Feedbacks { get; set; }

        [Required(ErrorMessage = "A Consulta é obrigatória!")]
        public Guid IdConsulta { get; set; }

        [ForeignKey(nameof(IdConsulta))]
        public Consulta? Consulta { get; set; }
    }
}