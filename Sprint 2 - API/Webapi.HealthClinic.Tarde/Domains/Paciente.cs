using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Webapi.HealthClinic.Tarde.Domains
{
    [Table(nameof(Paciente))]
    [Index(nameof(RG), IsUnique = true)]
    [Index(nameof(CPF), IsUnique = true)]
    [Index(nameof(Endereco), IsUnique = true)]

    public class Paciente
    {
        [Key]
        public Guid IdPaciente { get; set; } = Guid.NewGuid();

        [Column(TypeName = "VARCHAR(100)")]
        [Required(ErrorMessage = "O Nome é obrigatório!")]
        public string? Nome { get; set; }

        [Column(TypeName = "CHAR(7)")]
        [Required(ErrorMessage = "O RG é obrigatório!")]
        public string? RG { get; set; }

        [Column(TypeName = "CHAR(11)")]
        [Required(ErrorMessage = "O CPF é obrigatório!")]
        public string? CPF { get; set; }

        [Column(TypeName = "VARCHAR(3)")]
        [Required(ErrorMessage = "A Idade é obrigatória!")]
        public string? Idade { get; set;}

        [Column(TypeName = "VARCHAR(100)")]
        [Required(ErrorMessage = "Endereço é obrigatório!")]
        public string? Endereco { get; set; }

        [Required(ErrorMessage = "O usuario é obrigatório!")]
        public Guid IdUsuario { get; set; }

        [ForeignKey(nameof(IdUsuario))]
        public Usuario? Usuario { get; set; }
    }
}
