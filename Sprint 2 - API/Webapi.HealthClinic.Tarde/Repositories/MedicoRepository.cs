using System;
using System.Linq;
using Webapi.HealthClinic.Tarde.Contexts;
using Webapi.HealthClinic.Tarde.Domains;
using Webapi.HealthClinic.Tarde.Interfaces;

namespace Webapi.HealthClinic.Tarde.Repositories
{
    public class MedicoRepository : IMedico
    {
        private readonly HealthContext ctx;

        public MedicoRepository()
        {
            ctx = new HealthContext();
        }

        public void Atualizar(Guid Id, Medico medico)
        {
            Medico MeFind = ctx.Medico.Find(Id)!;

            if (MeFind != null)
            {
                MeFind.Nome = medico.Nome;
                MeFind.CRM = medico.CRM;
                MeFind.Idade = medico.Idade;
                MeFind.IdEspecialidade = medico.IdEspecialidade;
                MeFind.IdClinica = medico.IdClinica;
                MeFind.IdUsuario = medico.IdUsuario;
            }

            ctx.Medico.Update(MeFind!);

            ctx.SaveChanges();
        }

        public List<Medico> BuscarPorEspecialidade(Especialidade especialidade)
        {
            List<Medico> MeFind = ctx.Medico.Where(e => e.Especialidade.Especializacao == especialidade.Especializacao).ToList();

            return MeFind;
        }

        public Medico BuscarPorId(Guid Id)
        {
            Medico medico = ctx.Medico.FirstOrDefault(med => med.IdMedico == Id)!;

            ctx.SaveChanges();

            return medico;
        }

        public void Cadastrar(Medico medico)
        {
            ctx.Medico.Add(medico);

            ctx.SaveChanges();
        }

        public void Deletar(Guid Id)
        {
            Medico MeFind = ctx.Medico.Find(Id)!;

            if (MeFind != null)
            {
                ctx.Medico.Remove(MeFind);
            }

            ctx.SaveChanges();
        }

        public List<Medico> Listar()
        {
            return ctx.Medico.ToList();
        }

        public List<Consulta> ListarConsulta(Guid Id)
        {
            return ctx.Consulta.Where(c => c.IdMedico == Id).ToList();
        }

        public List<Paciente> MinhasConsultas(Guid Id)
        {
            return ctx.Paciente.Where(c => c.IdPaciente == Id).ToList();
        }
    }
}
