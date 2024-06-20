using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjetoCrud.Domains;
using ProjetoCrud.Interface;
using ProjetoCrud.Repository;

namespace ProjetoCrud.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class FilmesController : ControllerBase
    {
        private IFilme ctx { get; set; }

    public FilmesController()
    {
        ctx = new FilmeRepository();
    }

        [HttpPost]
        public IActionResult Post(Filme novoFilme)
        {
            try
            {
                ctx.Cadastrar(novoFilme);

                return StatusCode(201);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet]
            public IActionResult ListarTodos()
            {
                try
                {
                    return Ok(ctx.ListarTodos());
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
                ctx.Deletar(id);

                return NoContent();
            }
            catch (Exception erro)
            {
                return BadRequest(erro.Message);
            }
        }

        [HttpPut("{id}")]
        public IActionResult Put(Guid id, Filme filme)
        {
            try
            {
                ctx.Update(id, filme);
                return NoContent();
            }
            catch (Exception erro)
            {
                return BadRequest(erro.Message);
            }
        }
    }
}
