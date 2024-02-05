using System;
using System.Linq;
using Webapi.HealthClinic.Tarde.Contexts;
using Webapi.HealthClinic.Tarde.Domains;
using Webapi.HealthClinic.Tarde.Interfaces;

namespace Webapi.HealthClinic.Tarde.Repositories
{
    public class PacienteRepository : IPaciente
    {
        private readonly HealthContext ctx;

        public PacienteRepository()
        {
            ctx = new HealthContext();
        }

        public void Atualizar(Guid id, Paciente paciente)
        {
            Paciente PBuscado = ctx.Paciente.Find(id)!;

            if (PBuscado != null)
            {
                PBuscado.Nome = paciente.Nome;
                PBuscado.RG = paciente.RG;
                PBuscado.CPF = paciente.CPF;
                PBuscado.Idade = paciente.Idade;
                PBuscado.Endereco = paciente.Endereco;
                PBuscado.IdUsuario = paciente.IdUsuario;
            }

            ctx.Paciente.Update(PBuscado!);

            ctx.SaveChanges();
        }

        public Paciente BuscarPorId(Guid id)
        {
            Paciente paciente = ctx.Paciente.FirstOrDefault(med => med.IdPaciente == id)!;

            ctx.SaveChanges();

            return paciente;
        }

        public void Cadastrar(Paciente paciente)
        {
            ctx.Paciente.Add(paciente);

            ctx.SaveChanges();
        }

        public void Deletar(Guid id)
        {
            Paciente PBuscado = ctx.Paciente.Find(id)!;

            if (PBuscado != null)
            {
                ctx.Paciente.Remove(PBuscado);
            }

            ctx.SaveChanges();
        }

        public List<Paciente> Listar()
        {
            return ctx.Paciente.ToList();
        }

        public List<Consulta> ListarConsulta(Guid id)
        {
            return ctx.Consulta.Where(c => c.IdPaciente == id).ToList();
        }
    }
}
