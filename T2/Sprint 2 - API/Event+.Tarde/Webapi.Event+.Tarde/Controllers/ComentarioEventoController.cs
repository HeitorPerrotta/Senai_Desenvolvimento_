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
    public class ComentarioEventoController : ControllerBase
    {
            private IComentarioEventoRepository _comentarioEventoRepository;

            public ComentarioEventoController()
            {
                _comentarioEventoRepository = new ComentarioEventoRepository();
            }


            [HttpPost]
            public IActionResult Post(ComentarioEvento comentario)
            {
                try
                {
                    _comentarioEventoRepository.Cadastrar(comentario);

                    return Ok();
                }
                catch (Exception e)
                {
                    return BadRequest(e.Message);
                }
            }

            [HttpGet]
            public IActionResult Get(Guid id)
            {
                try
                {
                    List<ComentarioEvento> comentarios = _comentarioEventoRepository.Listar(id);

                    return Ok(comentarios);
                }
                catch (Exception e)
                {
                    return BadRequest(e.Message);
                }
            }

            [HttpDelete]
            public IActionResult Delete(Guid id)
            {
                try
                {
                    _comentarioEventoRepository.Deletar(id);

                    return Ok();
                }
                catch (Exception e)
                {
                    return BadRequest(e.Message);
                }
            }

    }
}