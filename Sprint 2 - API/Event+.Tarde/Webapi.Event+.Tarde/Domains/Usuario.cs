using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Webapi.Event_.Tarde.Domains
{
    [Table(nameof(Usuario))]
    [Index(nameof(Email), IsUnique =true)]
    public class Usuario
    {
        public static string? Titulo { get; internal set; }
        [Key]
        public Guid IdUsuario { get; set; } = Guid.NewGuid();

        [Column(TypeName = "VARCHAR(100)")]
        [Required(ErrorMessage = "Nome é obrigatório!")]
        public string? Nome { get; set; }

        [Column(TypeName = "VARCHAR(100)")]
        [Required(ErrorMessage = "Email é obrigatório!")]
        public string? Email { get; set; }

        [Column(TypeName = "CHAR(60)")]
        [Required(ErrorMessage = "Senha é obrigatória!")]
        [StringLength(60, MinimumLength = 6, ErrorMessage = "Senha deve conte")]
        public string? Senha { get; set; }

        [Required (ErrorMessage = "O tipo do usuario é obrigatório!")]
        public Guid IdTipoUsuario { get; set;}

        [ForeignKey(nameof(IdTipoUsuario))]
        public TipoUsuario? TipoUsuario { get; set; }
    }
}
