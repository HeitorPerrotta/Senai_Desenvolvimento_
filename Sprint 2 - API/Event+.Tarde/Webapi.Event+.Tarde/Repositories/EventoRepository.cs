using Azure.Identity;
using Webapi.Event_.Tarde.Contexts;
using Webapi.Event_.Tarde.Domains;
using Webapi.Event_.Tarde.Interfaces;

namespace Webapi.Event_.Tarde.Repositories
{
    public class EventoRepository : IEventoRepository
    {

        private readonly EventContext ctx;

        public EventoRepository()
        {
            ctx = new EventContext();
        }

        public void Atualizar(Guid id, Evento Evento)
        {
            Evento EventoBuscado = ctx.Evento.Find(id)!;

            if (EventoBuscado != null)
            {
                EventoBuscado.Descricao = Evento.Descricao;
                EventoBuscado.DataEvento = Evento.DataEvento;
                EventoBuscado.NomeEvento = Evento.NomeEvento;
            }

            ctx.SaveChanges();
        }

        public Evento BuscarPorId(Guid id)
        {
            Evento EventoBuscado = ctx.Evento.Find(id)!;

            if (EventoBuscado != null)
            {
                return ctx.Evento.FirstOrDefault(e => e.IdEvento == id)!;
            }
            return null!;
        }

        public void Cadastrar(Evento evento)
        {
            ctx.Evento.Add(evento);

            ctx.SaveChanges();
        }

        public void Deletar(Guid id)
        {
            TipoEvento tipoEventoBuscado = ctx.TipoEvento.Find(id)!;

            if (tipoEventoBuscado != null)
            {
                ctx.TipoEvento.Remove(tipoEventoBuscado);
            }

            ctx.SaveChanges();
        }

        public List<Evento> Listar()
        {
            return ctx.Evento.ToList();
        }
    }
}
