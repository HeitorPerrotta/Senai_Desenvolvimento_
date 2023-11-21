using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Webapi.Event_.Tarde.Domains;
using Webapi.Event_.Tarde.Interfaces;
using Webapi.Event_.Tarde.Repositories;

namespace Webapi.Event_.Tarde.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class PresencaEventoController : ControllerBase
    {
        private IPresencaEventoRepository _presencaEventoRepository;

        public PresencaEventoController()
        {
            _presencaEventoRepository = new PresencaEventoRepository();
        }

        [HttpPost("CadastarPresenca")]
        public IActionResult Post(PresencaEvento presenca)
        {
            try
            {
                _presencaEventoRepository.Cadastrar(presenca);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("PresencasUsuario")]
        public IActionResult Get(Guid id)
        {
            try
            {
                List<PresencaEvento> p = _presencaEventoRepository.ListarPresenca(id);
                return Ok(p);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete("DeletarPresenca")]
        public IActionResult Delete(Guid id)
        {
            try
            {
                _presencaEventoRepository.Deletar(id);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
