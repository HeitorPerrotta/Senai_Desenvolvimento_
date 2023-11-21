using Webapi.HealthClinic.Tarde.Domains;

namespace Webapi.HealthClinic.Tarde.Interfaces
{
    public interface IUsuario
    {
        void Cadastrar(Usuario usuario);
        Usuario BuscarPorId(Guid id);
        Usuario BuscarPorEmailESenha(string Email, string Senha);
    }
}
