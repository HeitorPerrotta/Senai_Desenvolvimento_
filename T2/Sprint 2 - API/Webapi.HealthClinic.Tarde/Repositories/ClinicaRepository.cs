using System;
using Webapi.HealthClinic.Tarde.Contexts;
using Webapi.HealthClinic.Tarde.Domains;
using Webapi.HealthClinic.Tarde.Interfaces;

namespace Webapi.HealthClinic.Tarde.Repositories
{
    public class ClinicaRepository : IClinica
    {
        private readonly HealthContext ctx;

        public ClinicaRepository()
        {
            ctx = new HealthContext();
        }

        public void Atualizar(Guid Id, Clinica clinica)
        {
            Clinica CFind = ctx.Clinica.Find(Id)!;

            if (CFind != null)
            {
                CFind.CNPJ = clinica.CNPJ;
                CFind.Endereco = clinica.Endereco;
                CFind.NomeFantasia = clinica.NomeFantasia;
                CFind.HorarioDeAbertura = clinica.HorarioDeAbertura;
                CFind.HorarioDeFechamento = clinica.HorarioDeFechamento;
                CFind.RazaoSocial = clinica.RazaoSocial;
            }

            ctx.Clinica.Update(CFind!);

            ctx.SaveChanges();
        }

        public Clinica BuscarPorId(Guid Id)
        {
            Clinica clinica = ctx.Clinica.FirstOrDefault(cli => cli.IdClinica == Id)!;

            ctx.SaveChanges();

            return clinica;
        }

        public void Cadastrar(Clinica clinicaRepository)
        {
            ctx.Clinica.Add(clinicaRepository);

            ctx.SaveChanges();
        }

        public void Deletar(Guid Id)
        {

            Clinica CFind = ctx.Clinica.Find(Id)!;

            if (CFind != null)
            {
                ctx.Clinica.Remove(CFind);
            }

            ctx.SaveChanges();
        }

        public List<Clinica> Listar()
        {
            return ctx.Clinica.ToList();
        }
    }
}