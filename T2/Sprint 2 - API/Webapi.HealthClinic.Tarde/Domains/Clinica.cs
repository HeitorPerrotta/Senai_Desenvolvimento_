    using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Webapi.HealthClinic.Tarde.Domains
{
    [Table(nameof(Clinica))]
    [Index(nameof(CNPJ), IsUnique = true)]
    [Index(nameof(RazaoSocial), IsUnique = true)]
    [Index(nameof(Endereco), IsUnique = true)]
    public class Clinica
    {
        [Key]
        public Guid IdClinica { get; set; } = Guid.NewGuid();

        [Column(TypeName = "CHAR(14)")]
        [Required(ErrorMessage = "CNPJ obrigatório!")]
        [StringLength(14)]
        public string? CNPJ { get; set; }

        [Column(TypeName = "VARCHAR(100)")]
        [Required(ErrorMessage = "Endereço é obrigatório!")]
        public string? Endereco { get; set; }

        [Column(TypeName = "VARCHAR(100)")]
        [Required(ErrorMessage = "O nome fantasia é obrigatório!")]
        public string? NomeFantasia { get; set; }

        [Required(ErrorMessage = "O Horário de abertura é obrigatório!")]
        [Column(TypeName = "TIME")]   
        public TimeOnly? HorarioDeAbertura { get; set; }

        [Required(ErrorMessage = "O Horário de fechamento é obrigatório!")]
        [Column(TypeName = "TIME")]
        public TimeOnly? HorarioDeFechamento { get; set; }

        [Column(TypeName = "VARCHAR(100)")]
        [Required(ErrorMessage = "A Razão Social é obrigatória!")]
        public string? RazaoSocial { get; set; }

    }
}