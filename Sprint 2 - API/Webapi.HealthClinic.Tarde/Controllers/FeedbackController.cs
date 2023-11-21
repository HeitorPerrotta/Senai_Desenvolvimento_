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
    public class FeedbackController : ControllerBase
    {
        private IFeedback _feedbackRepository { get; set; }

        public FeedbackController()
        {
            _feedbackRepository = new FeedbackRepository();
        }

        [HttpPost]
        public IActionResult Post(Feedback feedback)
        {
            try
            {
                _feedbackRepository.Cadastrar(feedback);

                return StatusCode(201);
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
                _feedbackRepository.Deletar(id);

                return NoContent();
            }
            catch (Exception erro)
            {
                return BadRequest(erro.Message);
            }
        }
    }
}
