using Webapi.Event_.Tarde.Domains;

namespace Webapi.Event_.Tarde.Interfaces
{
    public interface ITipoUsuarioRepository
    {

        void Cadastrar(TipoUsuario tipoUsuario);
        void Deletar(Guid id);
        List<TipoUsuario> Listar();    
        TipoUsuario BuscarPorId(Guid id);
        void Atualizar (Guid id, TipoUsuario tipoUsuario);
    }
}
