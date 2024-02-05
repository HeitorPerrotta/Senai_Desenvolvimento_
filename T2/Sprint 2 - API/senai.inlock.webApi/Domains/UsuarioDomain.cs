using System.ComponentModel.DataAnnotations;

namespace senai.inlock.webApi.Domains
{
    public class UsuarioDomain
    {
        public int IdUsuario { get; set; }

        [Required(ErrorMessage = "O email é obrigatório !")]

        public string? Email { get; set; }

        [StringLength(20, MinimumLength = 3, ErrorMessage = "O Campo senha precisa de no mínimo 3 e no máximo 30 caracteres !")]
        [Required(ErrorMessage = "A senha é obrigatória !")]

        public string? Senha { get; set; }

        public int IdTipoDeUsuario { get; set; }
    }
}

