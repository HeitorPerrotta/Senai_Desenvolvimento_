using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Webapi.HealthClinic.Tarde.Domains
{
    [Table(nameof(Consulta))]
    public class Consulta
    {
        [Key]
        public Guid IdConsulta { get; set; } = Guid.NewGuid();

        [Column(TypeName = "DATE")]
        [Required(ErrorMessage = "Data da Consulta é obrigatória!")]
        public DateTime? DataConsulta { get; set; }

        [Column(TypeName = "VARCHAR(100)")]
        [Required(ErrorMessage = "O Tipo da Consulta é obrigatório!")]
        public string? TipoConsulta { get; set; }

        [Column(TypeName = "VARCHAR(300)")]
        [Required(ErrorMessage = "A descrição da Consulta é obrigatório!")]
        public string? Descricao { get; set; }

        //ref.Tabela Medico = FK
        [Required(ErrorMessage = "O Médico é obrigatório!")]
        public Guid IdMedico { get; set; }

        [ForeignKey(nameof(IdMedico))]
        public Medico? Medico { get; set; }
        
        //ref.Tabela Paciente = FK
        [Required(ErrorMessage = "O Paciente é obrigatório!")]
        public Guid IdPaciente { get; set; }

        [ForeignKey(nameof(IdPaciente))]
        public Paciente? Paciente { get; set; }
    }
}
