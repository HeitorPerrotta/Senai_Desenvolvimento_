using System.Security.Cryptography.X509Certificates;
using Webapi.Event_.Tarde.Contexts;
using Webapi.Event_.Tarde.Controllers;
using Webapi.Event_.Tarde.Domains;
using Webapi.Event_.Tarde.Interfaces;
using Webapi.Event_.Tarde.Utils;

namespace Webapi.Event_.Tarde.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly EventContext _eventContext;

        public UsuarioRepository()
        {
            _eventContext = new EventContext();
        }
        public Usuario BuscarPorEmailESenha(string email, string senha)
        {
            try
            {
                Usuario usuarioBuscado = _eventContext.Usuario
                    .Select(u => new Usuario
                {
                    IdUsuario = u.IdUsuario,
                    Nome = u.Nome,
                    Email = u.Email,
                    Senha = u.Senha,

                    TipoUsuario = new TipoUsuario
                    {
                        IdTipoUsuario = u.IdTipoUsuario,
                        Titulo = u.TipoUsuario!.Titulo,
                    }
                }).FirstOrDefault(u => u.Email == email)!;

                if (usuarioBuscado != null)
                {
                    bool confere = Criptografia.CompararHash(senha, usuarioBuscado!.Senha!);

                    if (confere)
                    {
                        return usuarioBuscado;
                    }
                }
                return null!;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public Usuario BuscarPorId(Guid id)
        {
            try
            {
                Usuario usuarioBuscado = _eventContext.Usuario
                    .Select(u => new Usuario
                    {
                        IdUsuario = u.IdUsuario,
                        Nome = u.Nome,
                        Email = u.Email,
                        Senha = u.Senha,

                        TipoUsuario = new TipoUsuario
                        {
                            IdTipoUsuario = u.IdTipoUsuario,
                            Titulo = u.TipoUsuario!.Titulo
                        }
                    }).FirstOrDefault(u => u.IdUsuario == id)!;
                return usuarioBuscado;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public Usuario BuscarPorId(int id)
        {
            throw new NotImplementedException();
        }

        public Usuario BuscarUsuario(string? email, string? senha)
        {
            throw new NotImplementedException();
        }

        public void Cadastrar(Usuario usuario)
        {
            try
            {
                usuario.Senha = Criptografia.GerarHash(usuario.Senha!);

                _eventContext.Usuario.Add(usuario);

                _eventContext.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void Cadastrar(UsuarioController usuario)
        {
            throw new NotImplementedException();
        }
    }
}
