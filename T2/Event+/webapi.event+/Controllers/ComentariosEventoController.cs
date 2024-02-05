using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.CognitiveServices.ContentModerator;
using System.Text;
using webapi.event_.Domains;
using webapi.event_.Repositories;

namespace webapi.event_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class ComentariosEventoController : ControllerBase
    {
        ComentariosEventoRepository comentario = new ComentariosEventoRepository();

        private readonly ContentModeratorClient _contentModeratorClient;

        public ComentariosEventoController(ContentModeratorClient contentModerator)
        {
            _contentModeratorClient = contentModerator;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(comentario.Listar());
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpGet("BuscarPorIdUsuario")]
        public IActionResult GetByIdUser(Guid idUsuario,Guid idEvento)
        {
            try
            {
                return Ok(comentario.BuscarPorIdUsuario(idUsuario,idEvento));
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post(ComentariosEvento novoComentario)
        {
            try
            {
                if (string.IsNullOrEmpty(novoComentario.Descricao))
                {
                    return BadRequest("Não há como cadastrar um comentário vazio");
                }

                //converte a string(descrição do comentário) em um MemoryStream
                using var stream = new MemoryStream(Encoding.UTF8.GetBytes(novoComentario.Descricao));

                //realiza a moderação do conteúdo
                var moderationResult = await _contentModeratorClient.TextModeration.ScreenTextAsync("text/plain", stream, "por", false, false, null, true);


                //moderationResult.Terms != null ? novoComentario.Exibe = false : novoComentario.Exibe = true;
                //se existir termos ofensivos, não mostrar(exibe = false)
                if (moderationResult.Terms != null)
                {
                    novoComentario.Exibe = false;

                }
                else
                {
                    novoComentario.Exibe = true;
                }

                comentario.Cadastrar(novoComentario);

                return StatusCode(201, novoComentario);
            }
            catch (Exception erro)
            {
                return BadRequest(erro.Message);
            }
        }



        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            try
            {
                comentario.Deletar(id);

                return NoContent();
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

    }
}
