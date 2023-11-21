using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Webapi.HealthClinic.Tarde.Domains
{
    [Table(nameof(Medico))]
    [Index(nameof(CRM), IsUnique = true)]
    public class Medico
    {
        [Key]
        public Guid IdMedico { get; set; } = Guid.NewGuid();

        [Column(TypeName = "VARCHAR(100)")]
        [Required(ErrorMessage = "O Nome do Médico é obrigatório!")]
        public string? Nome { get; set; }

        [Column(TypeName = "CHAR(11)")]
        [Required(ErrorMessage = "O CRM do Médico é obrigatório!")]
        public string? CRM { get; set; }

        [Column(TypeName = "VARCHAR(3)")]
        [Required(ErrorMessage = "A Idade é obrigatória!")]
        public string? Idade { get; set; }


        [Required(ErrorMessage = "A Especialização do Médico é obrigatória!")]
        public Guid IdEspecialidade { get; set; }

        [ForeignKey(nameof(IdEspecialidade))]
        public Especialidade? Especialidade { get; set; }

        [Required(ErrorMessage = "A Clínica do Médico é obrigatória!")]
        public Guid IdClinica { get; set; }

        [ForeignKey(nameof(IdClinica))]
        public Clinica? Clinica { get; set; }

        [Required(ErrorMessage = "O usuario é obrigatório!")]
        public Guid IdUsuario { get; set; }

        [ForeignKey(nameof(IdUsuario))]
        public Usuario? Usuario { get; set; }

    }
}
