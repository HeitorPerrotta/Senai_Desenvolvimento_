using Webapi.Event_.Tarde.Domains;

namespace Webapi.Event_.Tarde.Interfaces
{
    public interface IPresencaEventoRepository
    {
            void Deletar(Guid id);

            void Cadastrar(PresencaEvento presencaEvento);

            List<PresencaEvento> ListarPresenca(Guid id);

    }
}
