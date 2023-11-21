using System.ComponentModel.DataAnnotations;

namespace Webapi.Event_.Tarde.ViewModel
{
    public class LoginViewModel
    {
        [Required (ErrorMessage = "O Email é obrigatório!")]
        public string? Email { get; set; }

        [Required (ErrorMessage = "A Senha é obrigatória!")]
        public string? Senha { get; set; }
    }
}