using Microsoft.EntityFrameworkCore;
using ProductsApiTest.Domains;

namespace ProductsApiTest.Contexts
{
    public class ProductsContext : DbContext
    {
        public DbSet<Products> Products { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=NOTE08-SALA19\\SQLEXPRESS; Initial Catalog=ProductsDatabase; TrustServerCertificate=True; User Id=sa; Pwd=Senai@134");
            base.OnConfiguring(optionsBuilder);
        }
    }
}
