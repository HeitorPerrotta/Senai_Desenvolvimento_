using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using senai.inlock.webApi.Domains;
using senai.inlock.webApi.Interfaces;
using senai.inlock.webApi.Repositories;

namespace senai.inlock.webApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JogoController : ControllerBase
    {
        private IJogoRepository _jogoRepository { get; set; }
        public JogoController()
        {
            _jogoRepository = new JogoRepository();
        }

         /// <summary>
        /// Endpoint que acessa o método de listar os Jogos
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                List<JogoDomain> listaJogos = _jogoRepository.ListarTodos();

                return Ok(listaJogos);
            }
            catch (Exception error)
            {
                return BadRequest(error.Message);
            }
       }

        /// <summary>
        /// Endpoint que acessa o método de cadastrar os Jogos
        /// </summary>
        /// <param name="novoJogo"></param>
        /// <returns></returns>
        [HttpPost]
        [Authorize(Roles = "2")]
        public IActionResult Post(JogoDomain novoJogo)
        {
            try
            {
                _jogoRepository.Cadastrar(novoJogo);

                return Created("Objeto Criado", novoJogo);
            }
            catch (Exception erro)
            {
                return BadRequest(erro.Message);
            }
        }

        /// <summary>
        /// EndPoint que acessa o metodo para deletar pelo ID
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                _jogoRepository.Deletar(id);

                return Ok(id);
            }
            catch (Exception erro)
            {
                return BadRequest(erro.Message);
            }
        }
    }
}
