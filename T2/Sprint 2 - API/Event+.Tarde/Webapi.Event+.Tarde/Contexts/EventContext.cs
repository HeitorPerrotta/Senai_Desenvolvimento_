﻿using Microsoft.EntityFrameworkCore;
using Webapi.Event_.Tarde.Domains;

namespace Webapi.Event_.Tarde.Contexts
{
    public class EventContext : DbContext
    {
        public DbSet<TipoUsuario> TipoUsuario { get; set; }
        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<TipoEvento> TipoEvento{ get; set; }
        public DbSet<Evento> Evento { get; set; }
        public DbSet<ComentarioEvento> ComentarioEvento { get; set; }
        public DbSet<Instituicao> Instituicao { get; set; }
        public DbSet<PresencaEvento> PresencaEvento { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=NOTE11-S13; Database=event+_tarde; User Id=sa; Pwd=Senai@134; TrustServerCertificate= True");
            base.OnConfiguring(optionsBuilder);
        }
    }
}
