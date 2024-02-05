using Webapi.Event_.Tarde.Controllers;
using Webapi.Event_.Tarde.Domains;

namespace Webapi.Event_.Tarde.Interfaces
{
    public interface IUsuarioRepository
    {
        void Cadastrar(Usuario usuario);

        Usuario BuscarPorId(int id);

        Usuario BuscarPorEmailESenha(string Email, string Senha);
        void Cadastrar(UsuarioController usuario);
        Usuario BuscarUsuario(string? email, string? senha);
    }
}
