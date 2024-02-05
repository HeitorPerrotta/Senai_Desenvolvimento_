using Webapi.Event_.Tarde.Domains;

namespace Webapi.Event_.Tarde.Interfaces
{
    public interface ITipoEventoRepository
    {
        void Deletar(Guid id);
        List<TipoEvento> Listar();
        TipoEvento BuscarPorId(Guid id);
        void Atualizar(Guid id, TipoEvento tipoEvento);
        void Cadastrar(TipoEvento tipoEvento);
    }
}
