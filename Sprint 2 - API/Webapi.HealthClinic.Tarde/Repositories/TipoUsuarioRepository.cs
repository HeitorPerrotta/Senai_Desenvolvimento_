using Webapi.HealthClinic.Tarde.Contexts;
using Webapi.HealthClinic.Tarde.Domains;
using Webapi.HealthClinic.Tarde.Interfaces;

namespace Webapi.HealthClinic.Tarde.Repositories
{
    public class TipoUsuarioRepository : ITipoUsuario
    {
        private readonly HealthContext ctx;

        public TipoUsuarioRepository()
        {
            ctx = new HealthContext();
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
            TipoUsuario TipoBuscado = ctx.TipoUsuario.Find(id)!;

            if (TipoBuscado != null)
            {
                ctx.TipoUsuario.Remove(TipoBuscado);
            }

            ctx.SaveChanges();
        }

        public List<TipoUsuario> Listar()
        {
            return ctx.TipoUsuario.ToList();
        }
    }
}