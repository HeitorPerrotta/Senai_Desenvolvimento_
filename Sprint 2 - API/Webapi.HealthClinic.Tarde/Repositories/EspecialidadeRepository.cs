using Webapi.HealthClinic.Tarde.Contexts;
using Webapi.HealthClinic.Tarde.Domains;
using Webapi.HealthClinic.Tarde.Interfaces;

namespace Webapi.HealthClinic.Tarde.Repositories
{
    public class EspecialidadeRepository : IEspecialidade
    {
        private readonly HealthContext ctx;

        public EspecialidadeRepository()
        {
            ctx = new HealthContext();
        }

        public void Cadastrar(Especialidade especialidade)
        {
            ctx.Especialidade.Add(especialidade);
            ctx.SaveChanges();
        }

        public void Deletar(Guid Id)
        {
            Especialidade CFind = ctx.Especialidade.Find(Id)!;

            if (CFind != null)
            {
                ctx.Especialidade.Remove(CFind);
            }

            ctx.SaveChanges();
        }

        public List<Especialidade> Listar()
        {
            return ctx.Especialidade.ToList();
        }
    }
}
