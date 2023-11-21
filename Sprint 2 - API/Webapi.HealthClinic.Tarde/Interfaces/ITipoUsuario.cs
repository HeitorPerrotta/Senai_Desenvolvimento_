using Webapi.HealthClinic.Tarde.Domains;

namespace Webapi.HealthClinic.Tarde.Interfaces
{
    public interface ITipoUsuario
    {
        void Cadastrar(TipoUsuario tipoUsuario);
        void Deletar(Guid id);
        List<TipoUsuario> Listar();
        TipoUsuario BuscarPorId(Guid id);
        void Atualizar(Guid id, TipoUsuario tipoUsuario);
    }
}
