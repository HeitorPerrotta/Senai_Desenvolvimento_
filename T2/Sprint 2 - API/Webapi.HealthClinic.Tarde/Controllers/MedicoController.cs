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
    public class MedicoController : ControllerBase
    {
        private IMedico _medicoRepository { get; set; }

        public MedicoController()
        {
            _medicoRepository = new MedicoRepository();
        }

        [HttpPost]
        public IActionResult Post(Medico medico)
        {
            try
            {
                _medicoRepository.Cadastrar(medico);

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
                return Ok(_medicoRepository.BuscarPorId(id));
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
                return Ok(_medicoRepository.Listar());
            }
            catch (Exception erro)
            {
                return BadRequest(erro.Message);
            }
        }

        [HttpDelete]
        public IActionResult Delete(Guid Id)
        {
            try
            {
                _medicoRepository.Deletar(Id);

                return NoContent();
            }
            catch (Exception erro)
            {
                return BadRequest(erro.Message);
            }
        }

        [HttpPut("{Id}")]
        public IActionResult Put(Guid Id, Medico medico)
        {
            try
            {
                _medicoRepository.Atualizar(Id, medico);
                return NoContent();
            }
            catch (Exception erro)
            {
                return BadRequest(erro.Message);
            }
        }

        [HttpGet("(BuscarConsulta)")]
        public IActionResult GetByConsulta(Guid Id)
        {
            try
            {
                _medicoRepository.ListarConsulta(Id);
                return Ok();
            }
            catch (Exception erro)
            {

                return BadRequest(erro.Message);
            }
        }

        [HttpGet("(BuscarPaciente)")]
        public IActionResult GetByPaciente(Guid Id)
        {
            try
            {
                _medicoRepository.MinhasConsultas(Id);
                return Ok();
            }
            catch (Exception erro)
            {
                return BadRequest(erro.Message);

            }
        }
    } 
}
