using Webapi.Event_.Tarde.Contexts;
using Webapi.Event_.Tarde.Domains;
using Webapi.Event_.Tarde.Interfaces;
using static Webapi.Event_.Tarde.Repositories.ComentarioEventoRepository;

namespace Webapi.Event_.Tarde.Repositories
{
    public class ComentarioEventoRepository : IComentarioEventoRepository
    {
        private readonly EventContext ctx;

        public ComentarioEventoRepository()
        {
            ctx = new EventContext();
        }

        public void Cadastrar(ComentarioEvento comentarioEvento)
        {
            ctx.ComentarioEvento.Add(comentarioEvento);
            ctx.SaveChanges();
        }

        public void Deletar(Guid id)
        {
            ComentarioEvento comentarioDeletar = ctx.ComentarioEvento.FirstOrDefault(x => x.IdComentarioEvento == id)!;
            ctx.ComentarioEvento.Remove(comentarioDeletar);
            ctx.SaveChanges();
        }

        public List<ComentarioEvento> Listar(Guid id)
        {
            List<ComentarioEvento> comentario = ctx.ComentarioEvento.Where(x => x.IdUsuario == id).ToList();

            return comentario;
        }
    }
}
