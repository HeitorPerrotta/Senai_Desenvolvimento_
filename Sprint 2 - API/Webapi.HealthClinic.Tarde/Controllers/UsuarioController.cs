using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Webapi.HealthClinic.Tarde.Domains;
using Webapi.HealthClinic.Tarde.Interfaces;
using Webapi.HealthClinic.Tarde.Repositories;

namespace Webapi.HealthClinic.Tarde.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class UsuarioController : ControllerBase
    {
        private IUsuario _usuarioRepository { get; set; }

        public UsuarioController()
        {
            _usuarioRepository = new UsuarioRepository();
        }

        [HttpPost]
        public IActionResult Post(Usuario usuario)
        {
            try
            {
                _usuarioRepository.Cadastrar(usuario);

                return StatusCode(201);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
