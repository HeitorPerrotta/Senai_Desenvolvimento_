using Webapi.HealthClinic.Tarde.Contexts;
using Webapi.HealthClinic.Tarde.Domains;
using Webapi.HealthClinic.Tarde.Interfaces;

namespace Webapi.HealthClinic.Tarde.Repositories
{
    public class ConsultaRepository : IConsulta
    {

        private readonly HealthContext ctx;

        public ConsultaRepository() 
        {
            ctx = new HealthContext();
        }

        public void Atualizar(Guid Id, Consulta consulta)
        {
            Consulta CoFind = ctx.Consulta.Find(Id)!;

            if (CoFind != null)
            {
                CoFind.TipoConsulta = consulta.TipoConsulta;
                CoFind.DataConsulta = consulta.DataConsulta;
                CoFind.Descricao = consulta.Descricao;
                CoFind.IdMedico = consulta.IdMedico;
                CoFind.IdPaciente = consulta.IdPaciente;
            }
        }

        public Consulta BuscarPorId(Guid Id)
        {
            Consulta consulta = ctx.Consulta.Find(Id)!;

            ctx.SaveChanges();

            return consulta;
        }

        public void Cadastrar(Consulta consultaRepository)
        {
            ctx.Consulta.Add(consultaRepository);

            ctx.SaveChanges();
        }

        public void Deletar(Guid Id)
        {

            Consulta CFind = ctx.Consulta.Find(Id)!;

            if (CFind != null)
            {
                ctx.Consulta.Remove(CFind);
            }

            ctx.SaveChanges();
        }

        public List<Consulta> Listar()
        {
            return ctx.Consulta.ToList();
        }
    }
}
