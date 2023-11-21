using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApi.CodeFirst.Heitor.Domains
{
    [Table("Usuario")]
    public class Usuario
    {
        [Key]
        public Guid IdUsuario { get; set; } = Guid.NewGuid();

       
        [Column(TypeName = "VARCHAR(100)")]
        [Required(ErrorMessage = "Email obrigatótio!")]
        public string? Email { get; set; }

        
        [Column(TypeName = "VARCHAR(100)")]
        [Required(ErrorMessage = "Senha Obrigatória!" )]
        [StringLength(20, MinimumLength = 6, ErrorMessage = "A senha deve conter no mínimo 6 e no máximo 12 caracteres")]
        public string? Senha { get; set; }
    }
}
