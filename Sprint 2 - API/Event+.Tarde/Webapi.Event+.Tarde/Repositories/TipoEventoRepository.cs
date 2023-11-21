using Microsoft.AspNetCore.Http.HttpResults;
using Webapi.Event_.Tarde.Contexts;
using Webapi.Event_.Tarde.Domains;
using Webapi.Event_.Tarde.Interfaces;

namespace Webapi.Event_.Tarde.Repositories
{
    public class TipoEventoRepository : ITipoEventoRepository
    {

        private readonly EventContext ctx;

        public TipoEventoRepository()
        {
            ctx = new EventContext();
        }


        public void Atualizar(Guid id, TipoEvento tipoEvento)
        {
            TipoEvento tipoEventoBuscado = ctx.TipoEvento.Find(id)!;

            if (tipoEventoBuscado != null)
            {
                tipoEventoBuscado.Titulo = tipoEvento.Titulo;
            }

            ctx.TipoEvento.Update(tipoEventoBuscado!);

            ctx.SaveChanges();
        }

        public TipoEvento BuscarPorId(Guid id)
        {
            TipoEvento tipoEvento = ctx.TipoEvento.Find(id)!;

            ctx.SaveChanges();

            return tipoEvento;
        }

        public void Cadastrar(TipoEvento tipoEvento)
        {
                
            ctx.TipoEvento.Add(tipoEvento);

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

        public List<TipoEvento> Listar()
        {
            List<TipoEvento> t = ctx.TipoEvento.ToList();
            return t;
        }
    }
}
