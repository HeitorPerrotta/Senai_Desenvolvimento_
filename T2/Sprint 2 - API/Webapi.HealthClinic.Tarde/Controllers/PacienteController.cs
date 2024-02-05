using Microsoft.AspNetCore.Mvc;
using Webapi.HealthClinic.Tarde.Domains;
using Webapi.HealthClinic.Tarde.Interfaces;
using Webapi.HealthClinic.Tarde.Repositories;

namespace Webapi.HealthClinic.Tarde.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class PacienteController : ControllerBase
    {
        private IPaciente _pacienteRepository { get; set; }

        public PacienteController()
        {
            _pacienteRepository = new PacienteRepository();
        }

        [HttpPost]
        public IActionResult Post(Paciente paciente)
        {
            try
            {
                _pacienteRepository.Cadastrar(paciente);

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
                return Ok(_pacienteRepository.BuscarPorId(id));
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
                return Ok(_pacienteRepository.Listar());
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
                _pacienteRepository.Deletar(id);

                return NoContent();
            }
            catch (Exception erro)
            {
                return BadRequest(erro.Message);
            }
        }

        [HttpPut("{id}")]
        public IActionResult Put(Guid id, Paciente paciente)
        {
            try
            {
                _pacienteRepository.Atualizar(id, paciente);
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
                _pacienteRepository.ListarConsulta(Id);
                return Ok();
            }
            catch (Exception erro)
            {

                return BadRequest(erro.Message);
            }
        }
    }
}