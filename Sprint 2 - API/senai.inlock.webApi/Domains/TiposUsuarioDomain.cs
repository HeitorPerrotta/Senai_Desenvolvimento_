using System.ComponentModel.DataAnnotations;

namespace senai.inlock.webApi.Domains
{
    public class TiposUsuarioDomain
    {
        public int IdTipoUsuario { get; set; }

        public string? Titulo { get; set; }
    }
}
