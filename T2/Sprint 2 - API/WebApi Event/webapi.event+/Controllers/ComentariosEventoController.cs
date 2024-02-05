using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.CognitiveServices.ContentModerator;
using System.Text;
using webapi.event_.Domains;
using webapi.event_.Interfaces;
using webapi.event_.Repositories;

namespace webapi.event_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class ComentariosEventoController : ControllerBase
    {
        //acesso aos metodos repositorios
        private ComentariosEventoRepository _comentarioRepository { get; set; }

        //armazena dados da API externa (IA - Azure)
        private ContentModeratorClient _contentModeratorClient { get; set; }

        /// <summary>
        /// Construtor que recebe os dados nescessários ao serviço externo
        /// </summary>
        /// <param name="contentModeratorClient">Objeto do tipo ContentModeratorClient</param>
        public ComentariosEventoController(ContentModeratorClient contentModeratorClient)
        {
            _contentModeratorClient = contentModeratorClient;
        }

        [HttpPost("CadastroIA")]
        public async Task<IActionResult> PostIA(ComentariosEvento comentariosEvento)
        {
            try
            {
                //se a descrição do comentário não for passada no objeto
                if (string.IsNullOrEmpty(comentariosEvento.Descricao)) 
                {
                    return BadRequest("O texto a ser realizado não pode ser vazio!");
                }

                //converte a string(descrição do comentario em um MemoryStream)
                using var stream = new MemoryStream(Encoding.UTF8.GetBytes(comentariosEvento.Descricao));

                //Realiza a moderação do conteúdo(Descrição do comentário)
                var moderationResult = await _contentModeratorClient.TextModeration
                    .ScreenTextAsync("text/plain", stream, "por", false, false, null, true);

                //se existir termos ofensivos
                if (moderationResult.Terms != null)
                {
                    //atribuir false para "Exibe"
                    comentariosEvento.Exibe = false;

                    //cadastra o comentario
                    _comentarioRepository.Cadastrar(comentariosEvento);
                }
                else
                {
                    comentariosEvento.Exibe = true;

                    _comentarioRepository.Cadastrar(comentariosEvento);
                }
                return StatusCode(201, comentariosEvento);
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
                return Ok(_comentarioRepository.Listar());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("ListarSomenteExibe")]
        public IActionResult GetIA()
        {
            try
            {
                return Ok(_comentarioRepository.Listar());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("BuscarPorIdUsuario/{id}")]
        public IActionResult GetByIdUser(Guid idUsuario, Guid idEvento)
        {
            try
            {
                return Ok(_comentarioRepository.BuscarPorIdUsuario(idUsuario,idEvento));
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        public IActionResult Post(ComentariosEvento novoComentario)
        {
            try
            {
                _comentarioRepository.Cadastrar(novoComentario);
                return StatusCode(201, novoComentario);
            }
            catch (Exception e)
            {

                return BadRequest(e);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            try
            {
                _comentarioRepository.Deletar(id);

                return NoContent();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
