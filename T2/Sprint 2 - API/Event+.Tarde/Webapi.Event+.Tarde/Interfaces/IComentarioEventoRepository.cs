using Webapi.Event_.Tarde.Domains;

namespace Webapi.Event_.Tarde.Interfaces
{
    public interface IComentarioEventoRepository
    {   void Cadastrar(ComentarioEvento comentarioEvento);
        void Deletar(Guid id);
        List<ComentarioEvento> Listar(Guid id);
    }
}