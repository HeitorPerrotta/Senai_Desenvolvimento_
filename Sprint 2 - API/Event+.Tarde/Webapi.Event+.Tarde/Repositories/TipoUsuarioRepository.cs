using Microsoft.EntityFrameworkCore;
using Webapi.Event_.Tarde.Contexts;
using Webapi.Event_.Tarde.Domains;
using Webapi.Event_.Tarde.Interfaces;

namespace Webapi.Event_.Tarde.Repositories
{
    public class TipoUsuarioRepository : ITipoUsuarioRepository
    {
        private readonly  EventContext ctx;

        public TipoUsuarioRepository()
        {
            ctx = new EventContext();
        }

        public void Atualizar(Guid id, TipoUsuario tipoUsuario)
        {
            TipoUsuario tipoUsuarioBuscado = ctx.TipoUsuario.Find(id)!;

            if (tipoUsuarioBuscado != null)
            {
                tipoUsuarioBuscado.Titulo = tipoUsuario.Titulo;
            }

            ctx.SaveChanges();
        }

        public TipoUsuario BuscarPorId(Guid id)
        {
            TipoUsuario tipoUsuario = ctx.TipoUsuario.Find(id)!;

            ctx.SaveChanges();

            return tipoUsuario;
        }

        public void Cadastrar(TipoUsuario tipoUsuario)
        {
            try
            {
                ctx.TipoUsuario.Add(tipoUsuario);

                ctx.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void Deletar(Guid id)
        {
            TipoUsuario tipoUsuarioBuscado = ctx.TipoUsuario.Find(id)!;

            if (tipoUsuarioBuscado != null)
            {
                ctx.TipoUsuario.Remove(tipoUsuarioBuscado);
            }

            ctx.SaveChanges();
        }

        public List<TipoUsuario> Listar()
        {
            return ctx.TipoUsuario.ToList();
        }
    }
}