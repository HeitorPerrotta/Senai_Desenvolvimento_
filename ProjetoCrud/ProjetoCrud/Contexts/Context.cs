using Microsoft.EntityFrameworkCore;
using ProjetoCrud.Domains;

namespace ProjetoCrud.Context
{
    public class FilmesContext : DbContext
    {
        public DbSet<Filme> Filmes { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=NOTE14-SALA19; Initial Catalog=CrudFilmes; User Id=sa; Pwd=Senai@134; TrustServerCertificate= True;");
            base.OnConfiguring(optionsBuilder);
        }
    }
}
