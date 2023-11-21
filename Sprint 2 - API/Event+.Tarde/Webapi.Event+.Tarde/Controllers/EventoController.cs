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
    public class EventoController : ControllerBase
    {
        private IEventoRepository _EventoRepository { get; set; }

        public EventoController()
        {
            _EventoRepository = new EventoRepository();
        }

        [HttpPost]
        public IActionResult Post(Evento Evento)
        {
            try
            {
                _EventoRepository.Cadastrar(Evento);

                return StatusCode(201);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [HttpGet("{id}")]
        public IActionResult GetById(Guid id)
        {
            try
            {
                return Ok(_EventoRepository.BuscarPorId(id));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_EventoRepository.Listar());
            }
            catch (Exception)
            {

                throw new Exception("Erro ao Listar");
            }
        }

        [HttpDelete]
        public IActionResult Delete(Guid id)
        {
            try
            {
                _EventoRepository.Deletar(id);

                return NoContent();
            }
            catch (Exception erro)
            {
                return BadRequest(erro.Message);
            }
        }

        [HttpPut("{id}")]
        public IActionResult Put(Guid id, Evento evento)
        {
            try
            {
                _EventoRepository.Atualizar(id, evento);
                return NoContent();
            }
            catch (Exception erro)
            {
                return BadRequest(erro.Message);
            }
        }
    }
}
