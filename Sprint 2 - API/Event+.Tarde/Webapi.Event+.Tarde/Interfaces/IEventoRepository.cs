using Webapi.Event_.Tarde.Domains;

namespace Webapi.Event_.Tarde.Interfaces
{
    public interface IEventoRepository
    {
        void Cadastrar(Evento evento);
        void Deletar(Guid Id);
        List<Evento> Listar();
        Evento BuscarPorId(Guid Id);
        void Atualizar(Guid Id, Evento evento);
    }
}
