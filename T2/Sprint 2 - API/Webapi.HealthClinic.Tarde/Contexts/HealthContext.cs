using Microsoft.EntityFrameworkCore;
using Webapi.HealthClinic.Tarde.Domains;

namespace Webapi.HealthClinic.Tarde.Contexts
{
    public class HealthContext : DbContext
    {

        public DbSet<TipoUsuario> TipoUsuario { get; set; }
        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<Clinica> Clinica { get; set; }
        public DbSet<Consulta> Consulta { get; set; }
        public DbSet<Medico> Medico { get; set; }
        public DbSet<Paciente> Paciente { get; set; }
        public DbSet<Especialidade> Especialidade { get; set; }
        public DbSet<Feedback> Feedback { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=NOTE11-S13; Database=HealthClinic_Tarde; User Id=sa; Pwd=Senai@134; TrustServerCertificate= True;", x => x.UseDateOnlyTimeOnly());
            base.OnConfiguring(optionsBuilder);
        }

    }
}
