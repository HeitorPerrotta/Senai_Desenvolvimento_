using Webapi.Event_.Tarde.Contexts;
using Webapi.Event_.Tarde.Domains;
using Webapi.Event_.Tarde.Interfaces;

namespace Webapi.Event_.Tarde.Repositories
{
    public class PresencaEventoRepository : IPresencaEventoRepository
    {
        private readonly EventContext ctx;

        public PresencaEventoRepository()
        {
            ctx = new EventContext();
        }

        public void Cadastrar(PresencaEvento presencaEvento)
        {
            ctx.PresencaEvento.Add(presencaEvento);

            ctx.SaveChanges();
        }

        public void Deletar(Guid id)
        {
            PresencaEvento presencaEventoBuscado = ctx.PresencaEvento.Find(id)!;

            if (presencaEventoBuscado != null)
            {
                ctx.PresencaEvento.Remove(presencaEventoBuscado);
            }

            ctx.SaveChanges();
        }

        public List<PresencaEvento> ListarPresenca(Guid id)
        {
            List<PresencaEvento> presencaEvento = ctx.PresencaEvento.Where(x => x.IdUsuario == id).ToList();

            return presencaEvento;
        }
    }
}
